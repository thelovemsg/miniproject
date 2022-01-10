package miniproject.demo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import miniproject.demo.dto.CommentDto;
import miniproject.demo.dto.LikersInfoDto;
import miniproject.demo.dto.ImageDto;
import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.search.ContentSearchCondition;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.Member;
import miniproject.demo.repository.CommentRepository;
import miniproject.demo.repository.ContentRepository;
import miniproject.demo.repository.ImageRepository;
import miniproject.demo.repository.MemberRepository;
import miniproject.demo.repository.querydsl.ContentInfoQuerydslRepository;
import miniproject.demo.repository.querydsl.ContentRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PostService {

   private final ContentRepository contentRepository;
   private final MemberRepository memberRepository;
   private final CommentRepository commentRepository;
   private final ImageRepository imageRepository;
   private final ContentRepositoryCustom contentRepositoryCustom;
   private final ContentInfoQuerydslRepository contentInfoQuerydslRepository;

   public PostDto saveContent(PostDto post){
      Content content = new Content(post);
      Member member1 = memberRepository.findByEmail(post.getEmail()).orElseGet(() -> new Member());
      content.setMember(member1);
      content.setContentWriter(member1.getNickname());
      Content newContent = contentRepository.save(content);
      return new PostDto(newContent);
   }

   public Page<PostDto> getPostsList(ContentSearchCondition condition, Pageable pageable){
      Page<PostDto> postPages = contentRepositoryCustom.searchContentByApplyPage(condition, pageable);
      List<PostDto> postList = postPages.stream().map(post -> {
         List<CommentDto> commentList = commentRepository.findAllCommentByContentId(post.getPostId());
         List<ImageDto> imageList = imageRepository.findAllImagesByContentId(post.getPostId());
         List<LikersInfoDto> contentInfoList = contentInfoQuerydslRepository.contentInfoForLikersByPostId(post.getPostId());
         post.setLikers(contentInfoList);
         post.setCommentList(commentList);
         post.setImageList(imageList);
         return post;
      }).collect(Collectors.toList());
      return new PageImpl<>(postList, pageable, postPages.getTotalElements());
   }


}

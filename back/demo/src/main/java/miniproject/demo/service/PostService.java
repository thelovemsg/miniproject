package miniproject.demo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import miniproject.demo.dto.PostDto;
import miniproject.demo.entity.Comment;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.Image;
import miniproject.demo.entity.Member;
import miniproject.demo.repository.CommentRepository;
import miniproject.demo.repository.ContentRepository;
import miniproject.demo.repository.ImageRepository;
import miniproject.demo.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

   @Transactional(readOnly = false)
   public PostDto saveContent(PostDto post){
      Content content = new Content(post);
      Member member1 = memberRepository.findByEmail(post.getEmail()).orElseGet(() -> new Member());
      content.setMember(member1);
      content.setContentWriter(member1.getNickname());
      Content newContent = contentRepository.save(content);
      return new PostDto(newContent);
   }

   @Transactional(readOnly = false)
   public List<PostDto> getPostsList(){
      List<Content> contentList = contentRepository.findAll();
      List<PostDto> postDtoList = contentList.stream().map(content -> {
         List<Comment> comments = commentRepository.findAllCommentByContentId(content.getId());
         List<Image> images = imageRepository.findAllImagesByContentId(content.getId());
         PostDto postDto = new PostDto(content, comments, images);
         return postDto;
      }).collect(Collectors.toList());
      return postDtoList;
   }

}

package miniproject.demo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import miniproject.demo.dto.CommentDto;
import miniproject.demo.entity.Comment;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.Member;
import miniproject.demo.repository.CommentRepository;
import miniproject.demo.repository.ContentRepository;
import miniproject.demo.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class CommentService {

    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;
    private final ContentRepository contentRepository;

    public CommentDto addComment(CommentDto commentDto) {
        Member findMember = memberRepository.findByEmail(commentDto.getEmail()).orElseGet(Member::new);
        Content content = contentRepository.findById(commentDto.getPostId()).orElseGet(Content::new);
        commentDto.setMemberId(findMember.getId());
        commentDto.setWriter(findMember.getNickname());
        Comment comment = commentRepository.save(new Comment(commentDto, content));
        System.out.println("comment = " + comment);
        return new CommentDto(comment);
    }
}

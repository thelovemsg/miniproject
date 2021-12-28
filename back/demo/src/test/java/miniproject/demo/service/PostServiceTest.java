package miniproject.demo.service;

import miniproject.demo.dto.PostDto;
import miniproject.demo.entity.Comment;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.Image;
import miniproject.demo.repository.CommentRepository;
import miniproject.demo.repository.ContentRepository;
import miniproject.demo.repository.ImageRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
@Transactional
class PostServiceTest {
    @PersistenceContext
    EntityManager em;
    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ContentRepository contentRepository;

    @Autowired
    ImageRepository imageRepository;

    @Test
    public void testing(){
        List<Content> contentList = contentRepository.findAll();
        List<PostDto> postDtoList = contentList.stream().map(content -> {
            List<Comment> comments = commentRepository.findAllCommentByContentId(content.getId());
            List<Image> images = imageRepository.findAllImagesByContentId(content.getId());
            PostDto postDto = new PostDto(content, comments, images);
            return postDto;
        }).collect(Collectors.toList());
        System.out.println("contentList = " + contentList);
        System.out.println("postDtoList = " + postDtoList);
        System.out.println("contentList = " + contentList);
    }
}
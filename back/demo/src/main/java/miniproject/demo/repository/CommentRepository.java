package miniproject.demo.repository;

import miniproject.demo.dto.CommentDto;
import miniproject.demo.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<CommentDto> findAllCommentByContentId(Long commentId);
}

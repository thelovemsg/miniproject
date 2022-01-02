package miniproject.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miniproject.demo.entity.Comment;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Long id;
    private Long postId;
    private String description;
    private String writer;
    private Long memberId;
    private Long parentId;
    private String email;
    private LocalDateTime createdDate;

    /**
     * Set CommentDto from comment class
     * id, postId, description, memberId ,writer
     * @param comment
     *
     */
    public CommentDto(Comment comment){
        this.id = comment.getId();
        this.postId = comment.getContent().getId();
        this.description = comment.getCommentDescription();
        this.memberId = comment.getMemberId();
        this.writer = comment.getCommentWriter();
        this.createdDate = comment.getCreatedDate();
    }


}

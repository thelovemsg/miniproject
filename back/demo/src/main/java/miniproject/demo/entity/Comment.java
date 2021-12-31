package miniproject.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import miniproject.demo.dto.CommentDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class Comment extends BaseTimeEntity{

    @Id @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "content_id")
    @JsonIgnore
    private Content content = new Content();

    private Long memberId;

    private String commentWriter;
    private String commentDescription;

    @OneToMany(mappedBy = "id")
    @JsonIgnore
    private List<Comment> parent_comment = new ArrayList<>();

    public Comment(Content content, String description, String writer){
        this.content = content;
        this.commentDescription = description;
        this.commentWriter = writer;
        this.memberId  = content.getMember().getId();
    }

    public Comment(CommentDto commentDto ,Content content){
        this.content = content;
        this.memberId = commentDto.getMemberId();
        this.commentDescription = commentDto.getDescription();
        this.commentWriter = commentDto.getWriter();
    }

}

package miniproject.demo.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
public class Comment extends BaseTimeEntity{

    @Id @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "content_id")
    private Content content;

    private String comment_description;

    @OneToMany(mappedBy = "id")
    private List<Comment> parent_comment = new ArrayList<>();

}

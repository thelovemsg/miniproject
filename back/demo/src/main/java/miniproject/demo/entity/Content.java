package miniproject.demo.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import miniproject.demo.dto.PostDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@NoArgsConstructor
@ToString(of={"id","description","contentWriter"})
@EqualsAndHashCode(callSuper=false)
public class Content extends BaseTimeEntity{

    @Id @GeneratedValue
    @Column(name="content_id")
    private Long id;

    @Column(name="content_description")
    private String description;

    private String contentWriter;

    @OneToMany(mappedBy = "id")
    @Column(name = "content_retweet_id")
    private List<Content> child_contents = new ArrayList<>();

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "content")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "contentInfo_content")
    private List<ContentInfo> contentInfoList= new ArrayList<>();

    //연관관계 편의 메서드
    public void setComments(Comment comment){
        comments.add(comment);
        comment.setContent(this);
    }

    public Content(String description, String contentWriter, Member member){
        this.description = description;
        this.contentWriter = contentWriter;
        this.member = member;
    }

    public Content(PostDto post){
        this.description = post.getDescription();
    }
}

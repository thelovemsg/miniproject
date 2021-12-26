package miniproject.demo.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import miniproject.demo.enums.ContentInfoType;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@Table(name="contentInfo")
@EqualsAndHashCode(callSuper=false)
public class ContentInfo extends BaseTimeEntity{

    @Id @GeneratedValue
    @Column(name = "content_info_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "content_id")
    private Content contentInfo_content;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member_contentInfo;

    @Enumerated(EnumType.STRING)
    private ContentInfoType contentInfoType;

    public ContentInfo(Content content, ContentInfoType contentInfoType, Member member){
        this.contentInfo_content = content;
        this.contentInfoType = contentInfoType;
        this.member_contentInfo = member;
    }
}

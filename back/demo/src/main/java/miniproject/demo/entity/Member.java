package miniproject.demo.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Member extends BaseEntity{

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;
    @Email
    private String email;
    private String nickname;
    private String password;
    private LocalDate birthday;

    @OneToMany(mappedBy = "member")
    private List<Content> contents = new ArrayList<>();

    @OneToMany(mappedBy = "member_contentInfo")
    private List<ContentInfo> contentInfos = new ArrayList<>();

    public Member(String email){
        this.email = email;
    }

    public Member(String email, String nickname, String password, LocalDate birthday) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.birthday = birthday;
    }

    public void setContentInfo(ContentInfo contentInfo){
        contentInfos.add(contentInfo);
    }
}

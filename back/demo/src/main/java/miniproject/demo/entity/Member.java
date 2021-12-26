package miniproject.demo.entity;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import miniproject.demo.enums.Authority;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class Member extends BaseEntity{

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;
    @Email
    private String email;
    private String nickname;
    private String password;
    private LocalDate birthday;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @OneToMany(mappedBy = "member")
    private List<Content> contents = new ArrayList<>();

    @OneToMany(mappedBy = "member_contentInfo")
    private List<ContentInfo> contentInfos = new ArrayList<>();

    @Builder
    public Member(String email, String nickname, String password, LocalDate birthday,Authority authority) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.birthday = birthday;
        this.authority = authority;
    }

    public void setContentInfo(ContentInfo contentInfo){
        contentInfos.add(contentInfo);
    }
}

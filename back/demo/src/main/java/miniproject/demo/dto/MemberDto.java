package miniproject.demo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miniproject.demo.entity.Member;
import miniproject.demo.enums.ContentInfoType;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {

    private Long id;
    private String email;
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate birthday;
    private String nickname;
    private ContentInfoType contentInfoType;
    private boolean isPass;

    public MemberDto(Member member, boolean isPass){
        MemberDto memberDto = new MemberDto();
        this.id = member.getId();
        this.email = member.getEmail();
        this.birthday = member.getBirthday();
        this.nickname = member.getNickname();
        this.isPass = isPass;
    }

    public MemberDto(String email, boolean isPass) {
        this.email = email;
        this.isPass = isPass;
    }
}

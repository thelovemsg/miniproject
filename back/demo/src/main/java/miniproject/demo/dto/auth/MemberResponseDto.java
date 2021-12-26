package miniproject.demo.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miniproject.demo.entity.Member;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private String email;
    private String status;
    public MemberResponseDto(String status) {
        this.status = status;
    }

    public static MemberResponseDto of(Member member) {
        return new MemberResponseDto(member.getEmail());
    }
}

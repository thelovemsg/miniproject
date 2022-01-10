package miniproject.demo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import miniproject.demo.entity.Member;
import miniproject.demo.enums.ContentInfoType;
import org.springframework.context.annotation.Role;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
@ToString(of = {"id", "email", "nickname", "birthday"})
public class MemberDto implements Serializable {

    private static final long serialVerionsUID = 1L;

    private Long id;
    private String email;
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate birthday;
    private String nickname;
    private ContentInfoType contentInfoType;
    private boolean isPass;
    private List<PreContentInfoDto> preContentInfoDtoList;
    private List<PostDto> postDtoList;
    private List<Long> postDtoIds;

    public MemberDto(Member member, boolean isPass, List<PreContentInfoDto> preContentInfoDtoList, List<PostDto> postDtoList){
        this.id = member.getId();
        this.email = member.getEmail();
        this.birthday = member.getBirthday();
        this.nickname = member.getNickname();
        this.password = member.getPassword();
        this.isPass = isPass;
        this.preContentInfoDtoList = preContentInfoDtoList;
        this.postDtoList = postDtoList;
    }

    public MemberDto(String email, boolean isPass) {
        this.email = email;
        this.isPass = isPass;
    }

    public MemberDto(Member member) {
        this.email = member.getEmail();
        this.id = member.getId();
    }

    public MemberDto(Member member, List<PostDto> postsDto) {
        setMemberInfo(member, postsDto);
    }

    public static MemberDto setMemberInfo(Member member, List<PostDto> postsDto){
        MemberDto memberDto = new MemberDto();
        memberDto.setEmail(member.getEmail());
        List<Long> collect = postsDto.stream().map(postDto ->
                postDto.getPostId()
        ).collect(Collectors.toList());
        memberDto.setId(member.getId());
        memberDto.setPostDtoIds(collect);
        return memberDto;
    }

}

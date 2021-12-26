package miniproject.demo.controller;

import lombok.RequiredArgsConstructor;
import miniproject.demo.constants.StatusCode;
import miniproject.demo.dto.MemberDto;
import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.TokenDto;
import miniproject.demo.dto.TokenRequestDto;
import miniproject.demo.dto.auth.MemberRequestDto;
import miniproject.demo.dto.auth.MemberResponseDto;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.DefaultRes;
import miniproject.demo.enums.ResultEnum;
import miniproject.demo.service.AuthService;
import miniproject.demo.service.MemberService;
import miniproject.demo.service.PostService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    @Value("${jwt.secret}")
    private String secretKey;
    private final AuthService authservice;
    private final MemberService memberService;
    private final PostService postService;

    @PostMapping("/signup")
    public ResponseEntity<MemberResponseDto> signup(@RequestBody MemberRequestDto memberRequestDto) {
        return ResponseEntity.ok(authservice.signup(memberRequestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto memberRequestDto) {
//        token을 header에 담아서 사용도 가능함.
//        TokenDto token = authservice.login(memberRequestDto);
//        res.addHeader("at-jwt-access-token", token.getAccessToken());
//        res.addHeader("at-jwt-refresh-token", token.getRefreshToken());
//        return ResponseEntity.ok(memberRequestDto);
        return ResponseEntity.ok(authservice.login(memberRequestDto));
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequestDto tokenRequestDto) {
        return ResponseEntity.ok(authservice.reissue(tokenRequestDto));
    }

    @PostMapping("/member")
    public ResponseEntity<MemberResponseDto> getLoginMemberInfo(@RequestBody MemberRequestDto memberRequestDto){
        MemberDto memberInfo = memberService.findMemberInfo(memberRequestDto.getEmail());
        if(memberInfo.getEmail() == null){
            return ResponseEntity.ok(null);
        }else{
            return new ResponseEntity(DefaultRes.res(StatusCode.RESET_CONTENT, memberInfo), HttpStatus.OK);
        }
    }

    @PostMapping("/post")
    public ResponseEntity<PostDto> postContent(@RequestBody PostDto postDto){
        return ResponseEntity.ok(postService.saveContent(postDto));
    }
}

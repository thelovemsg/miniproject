package miniproject.demo.controller;

import lombok.RequiredArgsConstructor;
import miniproject.demo.constants.StatusCode;
import miniproject.demo.dto.*;
import miniproject.demo.dto.auth.MemberRequestDto;
import miniproject.demo.dto.auth.MemberResponseDto;
import miniproject.demo.entity.DefaultRes;
import miniproject.demo.service.AuthService;
import miniproject.demo.service.CommentService;
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

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    @Value("${jwt.secret}")
    private String secretKey;
    private final AuthService authservice;
    private final MemberService memberService;
    private final PostService postService;
    private final CommentService commentService;

    @PostMapping("/signup")
    public ResponseEntity<MemberResponseDto> signup(@RequestBody MemberRequestDto memberRequestDto) {
        return ResponseEntity.ok(authservice.signup(memberRequestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto memberRequestDto) {
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

    @PostMapping("/comment")
    public ResponseEntity<CommentDto> addComment(@RequestBody CommentDto commentDto){
        return ResponseEntity.ok( commentService.addComment(commentDto));
    }

    @PostMapping("/post")
    public ResponseEntity<PostDto> postContent(@RequestBody PostDto postDto){
        PostDto postDto1 = postService.saveContent(postDto);
        return ResponseEntity.ok(postDto1);
    }
}

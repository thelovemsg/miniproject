package miniproject.demo.controller;

import lombok.RequiredArgsConstructor;
import miniproject.demo.constants.StatusCode;
import miniproject.demo.dto.*;
import miniproject.demo.dto.auth.MemberRequestDto;
import miniproject.demo.dto.auth.MemberResponseDto;
import miniproject.demo.entity.DefaultRes;
import miniproject.demo.service.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    private final ContentInfoService contentInfoService;

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
        // 오류를 이용하면 이렇게 코드를 작성할 필요가 사실 없음.
        MemberDto memberInfo = memberService.findMemberInfo(memberRequestDto.getEmail());
        if(memberInfo.getEmail() == null){
            return ResponseEntity.ok(null);
        }else{
            return new ResponseEntity(DefaultRes.res(StatusCode.RESET_CONTENT, memberInfo), HttpStatus.OK);
        }
    }

    @PostMapping("/comment")
    public ResponseEntity<CommentDto> addComment(@RequestBody CommentDto commentDto){
        return ResponseEntity.ok(commentService.addComment(commentDto));
    }

    @PostMapping("/post")
    public ResponseEntity<PostDto> postContent(@RequestBody PostDto postDto){
        return ResponseEntity.ok(postService.saveContent(postDto));
    }
//    원인 `불명의 이유로 patch가 안돼서 post로 하겠음.
//    @PatchMapping("/post/{postId}/like")
//    public String testing(@PathVariable("postId") Long postId){
//        return "ttesting!!";
//    }
    @PostMapping("/post/{postId}/like")
    public ResponseEntity<LikersInfoDto> likeContent(@PathVariable("postId") Long postId, @RequestBody MemberRequestDto memberRequestDto){
        System.out.println("postId = " + postId);
        LikersInfoDto likersInfoDto = contentInfoService.addLikeInfo(postId, memberRequestDto.getEmail());
        return ResponseEntity.ok(likersInfoDto);
    }

    @PostMapping("/post/{postId}/unlike")
    public ResponseEntity<Long> unlikeContent(@PathVariable("postId") Long postId, @RequestBody MemberRequestDto memberRequestDto){
        return ResponseEntity.ok(contentInfoService.deleteLikeInfo(postId, memberRequestDto.getEmail()));
    }

}

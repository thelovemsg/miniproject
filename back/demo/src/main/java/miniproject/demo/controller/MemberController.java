package miniproject.demo.controller;

import lombok.RequiredArgsConstructor;
import miniproject.demo.constants.ResponseMessage;
import miniproject.demo.constants.StatusCode;
import miniproject.demo.dto.MemberDto;
import miniproject.demo.entity.DefaultRes;
import miniproject.demo.enums.ResultEnum;
import miniproject.demo.repository.contentinfo.ContentInfoRepository;
import miniproject.demo.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberService memberService;
    private final ContentInfoRepository contentInfoRepository;
    @PostMapping("/api/member")
    public String signUpMember(@RequestBody MemberDto memberDto) {
        String result = "";
        int count = memberService.checkMemberEmailDuplication(memberDto.getEmail());
        result = count != 0 ? ResultEnum.DUPLICATE.getKey() :  memberService.signUpMember(memberDto);
        return result;
    }

    @PostMapping("api/login")
    public ResponseEntity loginMember(@RequestBody MemberDto memberDto){
        MemberDto memberInfo = memberService.login(memberDto.getEmail(), memberDto.getPassword());
        if(memberInfo.getEmail() == null){
            return new ResponseEntity(DefaultRes.res(StatusCode.UNAUTHORIZED , ResponseMessage.NOT_FOUND_USER, memberInfo), HttpStatus.OK);
        }else if(memberInfo.getEmail() != null && ! memberInfo.isPass()){
            return new ResponseEntity(DefaultRes.res(StatusCode.UNAUTHORIZED , ResponseMessage.USER_INFO_WRONG, memberInfo), HttpStatus.OK);
        }else{
            return new ResponseEntity(DefaultRes.res(StatusCode.OK , ResponseMessage.USER_INFO_WRONG, memberInfo), HttpStatus.OK);
        }
    }
}

//package miniproject.demo.controller;
//
//import lombok.RequiredArgsConstructor;
//import miniproject.demo.constants.ResponseMessage;
//import miniproject.demo.constants.StatusCode;
//import miniproject.demo.dto.MemberDto;
//import miniproject.demo.entity.DefaultRes;
//import miniproject.demo.enums.ResultEnum;
//import miniproject.demo.repository.ContentInfoRepository;
//import miniproject.demo.service.MemberService;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletResponse;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/api")
//@CrossOrigin("http://localhost:3000")
//public class MemberController {
//
//    private final MemberService memberService;
//    private final ContentInfoRepository contentInfoRepository;
//
//    @PostMapping("/member")
//    public String signUpMember(@RequestBody MemberDto memberDto) {
//        String result = "";
//        boolean isExist = memberService.checkMemberEmailDuplication(memberDto.getEmail());
//        result = isExist ? ResultEnum.DUPLICATE.getKey() :  memberService.signUpMember(memberDto);
//        return result;
//    }
//
//    @GetMapping("/hello")
//    public String hello(){
//        return "hello";
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity loginMember(@RequestBody MemberDto memberDto) throws Exception {
//        MemberDto memberInfo = memberService.login(memberDto.getEmail(), memberDto.getPassword());
//        if(memberInfo.getEmail() == null){
//            return new ResponseEntity(DefaultRes.res(StatusCode.UNAUTHORIZED , ResponseMessage.NOT_FOUND_USER, memberInfo), HttpStatus.OK);
//        }else if(memberInfo.getEmail() != null && ! memberInfo.isPass()){
//            return new ResponseEntity(DefaultRes.res(StatusCode.UNAUTHORIZED , ResponseMessage.USER_INFO_WRONG, memberInfo), HttpStatus.OK);
//        }else{
//            return new ResponseEntity(DefaultRes.res(StatusCode.OK , ResponseMessage.READ_USER, memberInfo), HttpStatus.OK);
//        }
//    }
//
//    @GetMapping("/logout")
//    public ResponseEntity logoutMember(HttpServletResponse response) {
//        return new ResponseEntity(DefaultRes.res(StatusCode.OK, ResponseMessage.LOGOUT_SUCCESS), HttpStatus.OK);
//    }
//}

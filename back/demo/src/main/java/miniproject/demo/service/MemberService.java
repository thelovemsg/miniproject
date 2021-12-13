package miniproject.demo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import miniproject.demo.dto.MemberDto;
import miniproject.demo.entity.Member;
import miniproject.demo.enums.ResultEnum;
import miniproject.demo.repository.contentinfo.ContentInfoQuerydslRepository;
import miniproject.demo.repository.contentinfo.ContentInfoRepository;
import miniproject.demo.repository.member.MemberRepository;
import miniproject.demo.utils.EncryptUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.function.Supplier;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final ContentInfoQuerydslRepository contentInfoQuerydslRepository;

    public int checkMemberEmailDuplication(String email) {
        return memberRepository.countByEmail(email);
    }

    @Transactional(readOnly = false)
    public String signUpMember(MemberDto memberDto) {
        String result = "";
        try {
            memberRepository.save(
                    new Member(memberDto.getEmail()
                        , memberDto.getNickname()
                        , EncryptUtils.encryptToSha256(memberDto.getPassword())
                        , memberDto.getBirthday()));
            result = ResultEnum.SUCCESS.getKey();
        } catch (Exception e){
            result = ResultEnum.FAIL.getKey();
            log.error("member sign up error", e);
        } finally {
            return result;
        }
    }

    @Transactional(readOnly = false)
    public MemberDto login(String email, String password){
        MemberDto memberDto = new MemberDto();
        try {
            if(memberRepository.countByEmail(email) == 1){
                memberDto = Optional.ofNullable(memberRepository.findByEmailAndPassword(email,
                        EncryptUtils.encryptToSha256(password))).map(member -> {
                        MemberDto memberDto1 = new MemberDto(member, true);
                    return memberDto1;
                }).orElseGet(() -> new MemberDto(email, false));
            }
        }catch (Exception e){
            log.error("error occur when logging in... ", e);
        }
        return memberDto;
    }
}

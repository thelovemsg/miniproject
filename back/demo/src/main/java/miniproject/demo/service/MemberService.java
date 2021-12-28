package miniproject.demo.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import miniproject.demo.dto.MemberDto;
import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.PreContentInfoDto;
import miniproject.demo.entity.Member;
import miniproject.demo.enums.Authority;
import miniproject.demo.enums.ResultEnum;
import miniproject.demo.repository.MemberRepository;
import miniproject.demo.repository.querydsl.ContentInfoQuerydslRepository;
import miniproject.demo.repository.querydsl.ContentQuerydslRepository;
import miniproject.demo.utils.EncryptUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final ContentInfoQuerydslRepository contentInfoQuerydslRepository;
    private final ContentQuerydslRepository contentQuerydslRepository;

    @Transactional(readOnly = false)
    public String signUpMember(MemberDto memberDto) {
        String result = "";
        try {
            memberRepository.save(
                    new Member(memberDto.getEmail()
                        , memberDto.getNickname()
                        , EncryptUtils.encryptToSha256(memberDto.getPassword())
                        , memberDto.getBirthday(),
                            Authority.ROLE_USER));
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
            if(memberRepository.existsByEmail(email)){
                memberDto = Optional.ofNullable(memberRepository.findByEmailAndPassword(email,
                        EncryptUtils.encryptToSha256(password))).map(member -> {
                    List<PreContentInfoDto> preContentInfoDtoList = contentInfoQuerydslRepository.contentInfoGroupByType(member.getId());
                    List<PostDto> Posts = contentQuerydslRepository.contentByMemberId(member.getId());
                    MemberDto memberDto1 = new MemberDto(member, true, preContentInfoDtoList, Posts);
                    return memberDto1;
                }).orElseGet(() -> new MemberDto(email, false));

            }
        }catch (Exception e){
            log.error("error occur when logging in... ", e);
        }
        return memberDto;
    }

    @Transactional(readOnly = true)
    public MemberDto findMemberInfo(String email){
        return memberRepository.findByEmail(email).map(member -> {
            List<PostDto> postsDto = contentQuerydslRepository.contentByMemberId(member.getId());
            return MemberDto.setMemberInfo(member, postsDto);
            }
        ).orElseGet(() -> new MemberDto());
    }

}

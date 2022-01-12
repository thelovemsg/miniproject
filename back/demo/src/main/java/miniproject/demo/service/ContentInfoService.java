package miniproject.demo.service;


import lombok.RequiredArgsConstructor;
import miniproject.demo.dto.LikersInfoDto;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.ContentInfo;
import miniproject.demo.entity.Member;
import miniproject.demo.enums.ContentInfoType;
import miniproject.demo.repository.ContentInfoRepository;
import miniproject.demo.repository.ContentRepository;
import miniproject.demo.repository.MemberRepository;
import miniproject.demo.repository.querydsl.ContentInfoQuerydslRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ContentInfoService {

    private final ContentInfoRepository contentInfoRepository;
    private final MemberRepository memberRepository;
    private final ContentRepository contentRepository;
    private final ContentInfoQuerydslRepository contentInfoQuerydslRepository;

    public LikersInfoDto addLikeInfo(Long postId, String email){
        Member member = memberRepository.findByEmail(email).orElseGet(Member::new);
        Content content = contentRepository.findById(postId).orElseGet(Content::new);
        ContentInfo contentInfo = new ContentInfo(content, ContentInfoType.LIKE, member);
        ContentInfo savedContentInfo = contentInfoRepository.save(contentInfo);

        return new LikersInfoDto(savedContentInfo.getId(), member.getId());
    }

    public Long deleteLikeInfo(Long postId, String email) {
        Member member = memberRepository.findByEmail(email).orElseGet(Member::new);
        Content content = contentRepository.findById(postId).orElseGet(Content::new);
        contentInfoQuerydslRepository.deleteLikeInContentInfoByContentIdAndMemberId(content.getId(), member.getId());
        return member.getId();
    }
}

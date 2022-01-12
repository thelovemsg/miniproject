package miniproject.demo.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import miniproject.demo.dto.LikersInfoDto;
import miniproject.demo.dto.PreContentInfoDto;
import miniproject.demo.dto.QLikersInfoDto;
import miniproject.demo.dto.QPreContentInfoDto;
import miniproject.demo.entity.ContentInfo;
import miniproject.demo.entity.QContentInfo;
import miniproject.demo.enums.ContentInfoType;
import org.springframework.stereotype.Repository;

import java.util.List;

import static miniproject.demo.entity.QContentInfo.contentInfo;


@Repository
@RequiredArgsConstructor
public class ContentInfoQuerydslRepository {

    private final JPAQueryFactory queryFactory;

    public List<PreContentInfoDto> contentInfoGroupByType(Long memberId){
       return queryFactory
                .select(
                        new QPreContentInfoDto(
                                contentInfo.contentInfoType.stringValue(), contentInfo.count())
                )
                .from(contentInfo)
                .where(contentInfo.member_contentInfo.id.eq(memberId))
                .groupBy(contentInfo.contentInfoType).fetch();

    }

    public List<LikersInfoDto> contentInfoForLikersByPostId(Long postId){
        return queryFactory
                .select(
                        new QLikersInfoDto(contentInfo.id,
                                contentInfo.member_contentInfo.id)
                )
                .from(contentInfo)
                .where(contentInfo.contentInfo_content.id.eq(postId),
                        contentInfo.contentInfoType.eq(ContentInfoType.LIKE)).fetch();
    }

    public void deleteLikeInContentInfoByContentIdAndMemberId(Long postId, Long memberId){
        queryFactory
                .delete(contentInfo)
                .where(contentInfo.contentInfo_content.id.eq(postId),
                        contentInfo.member_contentInfo.id.eq(memberId)).execute();
    }

}

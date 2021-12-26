package miniproject.demo.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import miniproject.demo.dto.PreContentInfoDto;
import miniproject.demo.dto.QPreContentInfoDto;
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

}

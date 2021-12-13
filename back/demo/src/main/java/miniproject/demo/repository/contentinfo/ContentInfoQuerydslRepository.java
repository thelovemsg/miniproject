package miniproject.demo.repository.contentinfo;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static miniproject.demo.entity.QContentInfo.*;
import static miniproject.demo.entity.QMember.*;

@Repository
@RequiredArgsConstructor
public class ContentInfoQuerydslRepository {

    private final JPAQueryFactory queryFactory;

    public JPAQuery<Tuple> contentInfoGroupByType(Long memberId){
        return queryFactory
                .select(contentInfo.contentInfoType, contentInfo.count())
                .leftJoin(member)
                .where(member.id.eq(contentInfo.member_contentInfo.id))
                .groupBy(contentInfo.contentInfoType);
    }

}

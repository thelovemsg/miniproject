package miniproject.demo.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.QPostDto;
import org.springframework.stereotype.Repository;

import java.util.List;

import static miniproject.demo.entity.QContent.content;

@Repository
@RequiredArgsConstructor
public class ContentQuerydslRepository {

    private final JPAQueryFactory queryFactory;

    public List<PostDto> contentByMemberId(Long memberId){
        return queryFactory
                .select(new QPostDto(content.id, content.member.id, content.description, content.contentWriter, content.createdDate))
                .from(content)
                .where(content.member.id.eq(memberId)).fetch();
    }

}

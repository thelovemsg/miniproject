package miniproject.demo.repository.querydsl;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.QPostDto;
import miniproject.demo.dto.search.ContentSearchCondition;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.QMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import java.util.List;

import static miniproject.demo.entity.QContent.content;
import static miniproject.demo.entity.QMember.*;
import static org.springframework.util.StringUtils.hasText;

@Repository
public class ContentQuerydslRepository implements ContentRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;
    private final EntityManager entityManager;

    public ContentQuerydslRepository(JPAQueryFactory jpaQueryFactory, EntityManager entityManager) {
        this.jpaQueryFactory = jpaQueryFactory;
        this.entityManager = entityManager;
    }

    public List<PostDto> contentByMemberId(Long memberId){
        return jpaQueryFactory
                .select(new QPostDto(content.id, content.member.id, content.description, content.contentWriter, content.createdDate))
                .from(content)
                .where(content.member.id.eq(memberId)).fetch();
    }

    @Override
    public Page<PostDto> searchContentByApplyPage(ContentSearchCondition condition, Pageable pageable) {
        List<PostDto> posts = jpaQueryFactory
                .select(new QPostDto(
                        content.id.as("postId"),
                        member.id.as("memberId"),
                        content.contentWriter.as("writer"),
                        content.description,
                        content.createdDate
                ))
                .from(content)
                .leftJoin(content.member, member)
                .where(contentWriterEq(condition.getContentWriter()),
                        contentDescriptionLike(condition.getDescription()))
                .orderBy(content.createdDate.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Content> countQuery = jpaQueryFactory
                .select(content)
                .from(content)
                .leftJoin(content.member, member)
                .where(contentWriterEq(condition.getContentWriter()),
                        contentDescriptionLike(condition.getDescription()));

          return PageableExecutionUtils.getPage(posts, pageable, countQuery::fetchCount);
    }

    private BooleanExpression contentWriterEq(String contentWriter){
        return hasText(contentWriter) ? content.contentWriter.eq(contentWriter) : null;
    }

    private BooleanExpression contentDescriptionLike(String description){
        return StringUtils.hasText(description) ? content.description.containsIgnoreCase(description) : null;
    }

}


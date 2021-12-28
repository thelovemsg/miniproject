package miniproject.demo.repository.querydsl;

import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.search.ContentSearchCondition;
import miniproject.demo.entity.Content;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ContentRepositoryCustom {

    Page<PostDto> searchContentByApplyPage(ContentSearchCondition condition, Pageable pageable);

}

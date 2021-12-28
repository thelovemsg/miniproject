package miniproject.demo.repository.querydsl;

import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.search.ContentSearchCondition;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class ContentQuerydslRepositoryTest {
    @Autowired
    ContentQuerydslRepository ContentQuerydslRepository;

    @Test
    public void test() throws Exception{
        ContentSearchCondition condition = new ContentSearchCondition();
        //given
        PageRequest pageRequest = PageRequest.of(0, 3);
        Page<PostDto> postDtos = ContentQuerydslRepository.searchContentByApplyPage(condition, pageRequest);
        //when
        for (PostDto postDto : postDtos) {
            System.out.println("postDto = " + postDto);
        }
        //then

    }



}
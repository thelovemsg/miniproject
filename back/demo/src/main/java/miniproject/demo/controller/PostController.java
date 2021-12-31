package miniproject.demo.controller;

import lombok.RequiredArgsConstructor;
import miniproject.demo.constants.ResponseMessage;
import miniproject.demo.constants.StatusCode;
import miniproject.demo.dto.PostDto;
import miniproject.demo.dto.search.ContentSearchCondition;
import miniproject.demo.entity.DefaultRes;
import miniproject.demo.service.PostService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("/api/posts")
    public ResponseEntity loadingPosts(ContentSearchCondition condition, @PageableDefault(size = 10) Pageable pageable){
        Page<PostDto> postPages = postService.getPostsList(condition, pageable);
        return new ResponseEntity(DefaultRes.res(StatusCode.OK, ResponseMessage.POST_SEARCH_SUCCESS, postPages), HttpStatus.OK);
    }

    @GetMapping("/api/hello")
    public String hello(){
        return "hello";
    }

}

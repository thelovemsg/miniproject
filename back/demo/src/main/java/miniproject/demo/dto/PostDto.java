package miniproject.demo.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.NoArgsConstructor;
import miniproject.demo.entity.Content;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class PostDto {

    private Long postId;
    private Long memberId;
    private String description;
    private String writer;
    private LocalDateTime createdDate;
    private String email;
    private List<CommentDto> commentList = new ArrayList<>();
    private List<ImageDto> imageList = new ArrayList<>();
    private List<LikersInfoDto> likers = new ArrayList<>();

    @QueryProjection
    public PostDto(Long postId, Long memberId, String writer, String description, LocalDateTime createdDate){
        this.postId = postId;
        this.memberId = memberId;
        this.description = description;
        this.writer = writer;
        this.createdDate = createdDate;
    }

    public PostDto(Long postId){
        this.postId = postId;
    }

    public PostDto(Content content){
        this.postId = content.getId();
        this.memberId = content.getMember().getId();
        this.createdDate = content.getCreatedDate();
        this.writer = content.getContentWriter();
        this.description = content.getDescription();
    }

    public PostDto(Content content, List commentList, List imageDtoList, List contentInfoDtoList){
        this.postId = content.getId();
        this.memberId = content.getMember().getId();
        this.createdDate = content.getCreatedDate();
        this.writer = content.getContentWriter();
        this.description = content.getDescription();
        this.commentList = commentList;
        this.imageList = imageDtoList;
        this.likers = contentInfoDtoList;
    }

}

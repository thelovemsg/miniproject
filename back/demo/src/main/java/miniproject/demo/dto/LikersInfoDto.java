package miniproject.demo.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class LikersInfoDto {
    private Long id;
    private Long memberId;

    @QueryProjection
    public LikersInfoDto(Long id, Long memberId){
        this.id = id;
        this.memberId = memberId;
    }
}

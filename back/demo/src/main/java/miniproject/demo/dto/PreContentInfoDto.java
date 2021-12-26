package miniproject.demo.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class PreContentInfoDto {
    private String contentType;
    private Long length;

    @QueryProjection
    public PreContentInfoDto(String contentType, Long length){
        this.contentType = contentType;
        this.length = length;
    }
}

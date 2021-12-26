package miniproject.demo.dto;

import com.querydsl.core.annotations.QueryProjection;
import miniproject.demo.enums.ContentInfoType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TestContentInfo {

    @Id
    @GeneratedValue
    private Long id;
    private String contentInfoType;
    private Long memberId;

    @QueryProjection
    public TestContentInfo(String contentInfoType, Long memberId) {
        this.contentInfoType = contentInfoType;
        this.memberId = memberId;
    }
}

package miniproject.demo.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@EqualsAndHashCode(callSuper=false)
public class Hashtag extends BaseTimeEntity{

    @Id @GeneratedValue
    @Column(name = "hashtag_id")
    private Long id;

    private String hashtagContent;

}



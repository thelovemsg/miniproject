package miniproject.demo.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class JwtRequest {

    private static final long serialVersionUID = 5926468583005150707L;

    private String email;
    private String password;

}

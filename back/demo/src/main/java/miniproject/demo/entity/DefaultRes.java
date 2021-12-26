package miniproject.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.context.annotation.Bean;

@Data
@AllArgsConstructor
@Builder
public class DefaultRes<T> {
    private int statusCode;
    private String responseMessage;
    private T result;

    public DefaultRes(final int statusCode, final String responseMessage) {
        this.statusCode = statusCode;
        this.responseMessage = responseMessage;
        this.result = null;
    }

    public static<T> DefaultRes<T> res(final int statusCode, final String responseMessage) {
        return res(statusCode, responseMessage, null);
    }

    public static<T> DefaultRes<T> res(final int statusCode, final T t) {
        return DefaultRes.<T>builder()
                .result(t)
                .statusCode(statusCode)
                .build();
    }

    public static<T> DefaultRes<T> res(final int statusCode, final String responseMessage, final T t) {
        return DefaultRes.<T>builder()
                .result(t)
                .statusCode(statusCode)
                .responseMessage(responseMessage)
                .build();
    }


}

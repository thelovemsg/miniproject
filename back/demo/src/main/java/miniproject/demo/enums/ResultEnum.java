package miniproject.demo.enums;

public enum ResultEnum implements EnumModel {
    SUCCESS("SUCCESS"),
    FAIL("FAIL"),
    DUPLICATE("DUPLICATE");

    private String value;

    ResultEnum(String value){
        this.value = value;
    }

    @Override
    public String getKey() {
        return name();
    }

    @Override
    public String getValue() {
        return value;
    }
}

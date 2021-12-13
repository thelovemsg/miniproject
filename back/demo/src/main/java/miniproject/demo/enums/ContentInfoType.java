package miniproject.demo.enums;

public enum ContentInfoType implements EnumModel{
    LIKED("LIKED"),
    FOLLOWING("FOLLOWING"),
    FOLLOWED("FOLLOWED"),
    LIKE("LIKE");

    private String value;

    ContentInfoType(String value){
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

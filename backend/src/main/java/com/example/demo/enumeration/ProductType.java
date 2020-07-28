package com.example.demo.enumeration;

public enum ProductType {
    FOOD(0,"food"),
    CLOTHING(1,"clothing"),
    OTHER(2,"other");

    private Integer key;
    private String name;

    ProductType(Integer key, String name) {
        this.key = key;
        this.name = name;
    }

    public Integer getKey() {
        return key;
    }

    public void setKey(Integer key) {
        this.key = key;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ProductType{" +
                "key=" + key +
                ", name='" + name + '\'' +
                '}';
    }
}

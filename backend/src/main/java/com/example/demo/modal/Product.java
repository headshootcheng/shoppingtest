package com.example.demo.modal;

public class Product {
    private String name;
    private Double price;
    private Integer type;
    private Double qty;

    public Product(String name,Double price,Integer type,Double qty) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.qty = qty;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getType() {
        return type;
    }

    public Double getQty() {
        return qty;
    }

    public void setQty(Double qty) {
        this.qty = qty;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", price=" + price +
                ", type=" + type +
                ", qty=" + qty +
                '}';
    }
}

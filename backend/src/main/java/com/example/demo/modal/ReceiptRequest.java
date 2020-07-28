package com.example.demo.modal;

import java.util.List;

public class ReceiptRequest {
    private List<Product> productList;
    private Integer key;

    public ReceiptRequest(List<Product> productList, Integer key) {
        this.productList = productList;
        this.key = key;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public Integer getKey() {
        return key;
    }

    public void setKey(Integer key) {
        this.key = key;
    }

    @Override
    public String toString() {
        return "ReceiptRequest{" +
                "productList=" + productList +
                ", key=" + key +
                '}';
    }
}

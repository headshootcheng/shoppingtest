package com.example.demo.enumeration;


public enum Location {
    CA(0,"CA",9.75),
    NY(1,"NY",8.875);

    private Integer key;
    private String name;
    private Double taxRate;

    Location(Integer key, String name, Double taxRate) {
        this.key = key;
        this.name = name;
        this.taxRate = taxRate;
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

    public Double getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(Double taxRate) {
        this.taxRate = taxRate;
    }

    @Override
    public String toString() {
        return "Location{" +
                "key=" + key +
                ", name='" + name + '\'' +
                ", taxRate=" + taxRate +
                '}';
    }
}



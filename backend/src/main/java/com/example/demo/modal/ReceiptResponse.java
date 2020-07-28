package com.example.demo.modal;

public class ReceiptResponse {
    private Double subtotal;
    private Double tax;
    private Double total;

    public ReceiptResponse() {

    }

    public ReceiptResponse(ReceiptRequest input) {

    }

    public Double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }

    public Double getTax() {
        return tax;
    }

    public void setTax(Double tax) {
        this.tax = tax;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "ReceiptResponse{" +
                "subtotal=" + subtotal +
                ", tax=" + tax +
                ", total=" + total +
                '}';
    }
}

package com.example.demo.service.interfac;

import com.example.demo.modal.ReceiptRequest;
import com.example.demo.modal.ReceiptResponse;

public interface ReceiptService {
    ReceiptResponse generateReceipt(ReceiptRequest receiptRequestDto);
}

package com.example.demo.controller;


import com.example.demo.enumeration.Location;
import com.example.demo.enumeration.ProductType;
import com.example.demo.modal.ReceiptRequest;
import com.example.demo.modal.ReceiptResponse;
import com.example.demo.service.interfac.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class apiController {
    @Autowired
    private ReceiptService receiptService;

    @GetMapping("/location")
    public List<Location> loadLocation(){
        List <Location> locationList = new ArrayList<>();
        for(Location eachLocation:Location.values()){
            //System.out.println(eachLocation);
            locationList.add(eachLocation);
        }
        return  locationList;
    }

    @GetMapping("/productType")
    public List<ProductType> loadType(){
        List <ProductType> typeList = new ArrayList<>();
        for(ProductType eachType:ProductType.values()){
            typeList.add(eachType);
        }
        return typeList;
    }

    @PostMapping("/receipt")
    public ReceiptResponse printResult(@RequestBody ReceiptRequest receiptRequest){
        ReceiptResponse receiptResponse = receiptService.generateReceipt(receiptRequest);
        System.out.println("receiptResponse"+receiptResponse);
        return receiptResponse;
    }
}

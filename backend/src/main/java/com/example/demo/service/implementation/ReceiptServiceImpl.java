package com.example.demo.service.implementation;

import com.example.demo.enumeration.Location;
import com.example.demo.enumeration.ProductType;
import com.example.demo.modal.Product;
import com.example.demo.modal.ReceiptRequest;
import com.example.demo.modal.ReceiptResponse;
import com.example.demo.service.interfac.ReceiptService;
import org.springframework.stereotype.Service;
import java.text.DecimalFormat;
import java.util.List;

@Service
public class ReceiptServiceImpl implements ReceiptService {
    @Override
    public ReceiptResponse generateReceipt(ReceiptRequest receiptRequest){
        ReceiptResponse receiptResponse = new ReceiptResponse();
        DecimalFormat df = new DecimalFormat("#.##");
        List<Product> productList = receiptRequest.getProductList();
        Integer countryCode = receiptRequest.getKey();
        Location currentLocation = getCurrentLocation(countryCode);
        Double subtotal = 0.00;
        Double tax = 0.00;
        Double total = 0.00;
        for(Product eachProduct: productList){
            Double price = eachProduct.getPrice();
            Double qty = eachProduct.getQty();
            Double sum = price*qty;
            subtotal+= sum;
            Integer key = eachProduct.getType();
            ProductType productType = getProductType(key);
            tax = calcTax(tax,productType,currentLocation,sum);
        }
        tax = Math.ceil(tax*20)/20;
        total = subtotal+ tax;

        subtotal= Double.valueOf(df.format(subtotal));
        tax= Double.valueOf(df.format(tax));
        total= Double.valueOf(df.format(total));

        receiptResponse.setSubtotal(subtotal);
        receiptResponse.setTax(tax);
        receiptResponse.setTotal(total);
        return receiptResponse;
    }

    private Location getCurrentLocation(Integer countryCode){
        for (Location eachLocation : Location.values()) {
            if(countryCode==eachLocation.getKey()){
                return eachLocation;
            }
        }
        return Location.CA;
    }

    private ProductType getProductType(Integer key){
        for (ProductType eachType : ProductType.values()) {
            if(key==eachType.getKey()){
                return eachType;
            }
        }
        return ProductType.OTHER;
    }

    private Double calcTax(Double tax,ProductType type,Location location,Double sum){
        switch(location){
            case CA:{
                if(!type.equals(ProductType.FOOD)){
                    tax+=sum*location.getTaxRate()/100;
                    return tax;
                }
                return tax;
            }
            case NY:{
                if(type.equals(ProductType.OTHER)){
                    tax+=sum*location.getTaxRate()/100;
                    return tax;
                }
                return tax;
            }

            default:{
                tax+=sum*location.getTaxRate()/100;
                return tax;
            }
        }
    }

}

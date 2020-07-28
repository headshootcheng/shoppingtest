import React, { useState, useEffect } from "react";
import "../styles/app.css";
import { connect } from "react-redux";
interface product {
  name: string;
  price: number;
  qty: number;
  type: number;
}
interface receipt {
  subtotal: number;
  total: number;
  tax: number;
}

const Receipt2: React.FC<{
  receiptData: receipt;
  productListData: product[];
}> = ({ receiptData = {}, productListData = [] }) => {
  const [list, setList] = useState<product[]>([]);
  const [subtotalNum, setSubNum] = useState<number>(0);
  const [totalTaxNum, setTaxNum] = useState<number>(0);
  const [totalAmountNum, setAmountNum] = useState<number>(0);
  //   console.log("receiptData", receiptData);
  let { subtotal, tax, total } = receiptData;
  useEffect(() => {
    setSubNum(subtotal || 0);
    setTaxNum(tax || 0);
    setAmountNum(total || 0);
  }, [receiptData]);

  useEffect(() => {
    setList(productListData);
  }, [productListData]);

  return (
    <div className=" flex-1  flex  border-black border-4 rounded-lg flex-col max-h-screen overflow-scroll">
      <div className="flex flex-row justify-between p-4">
        <span className="flex-1">item</span>
        <span className="flex-1">price</span>
        <span className="flex-1">qty</span>
      </div>
      {/* {receiptData.productList ? renderList(receiptData.productList) : null} */}
      {list.map(({ name, price, qty }) => {
        console.log(name, qty, price);
        return (
          <div className=" flex flex-row  justify-between p-4">
            <span className="flex-1">{name}</span>
            <span className="flex-1">${price}</span>
            <span className="flex-1">{qty}</span>
          </div>
        );
      })}
      <div className=" flex flex-row  justify-between p-4">
        <span className="flex-1">subtotal:</span>
        <span className="flex-1"></span>
        <span className="flex-1">${subtotalNum.toFixed(2)}</span>
      </div>
      <div className=" flex flex-row  justify-between p-4">
        <span className="flex-1">tax:</span>
        <span className="flex-1"></span>
        <span className="flex-1">${totalTaxNum.toFixed(2)}</span>
      </div>
      <div className=" flex flex-row  justify-between p-4">
        <span className="flex-1">total:</span>
        <span className="flex-1"></span>
        <span className="flex-1">${totalAmountNum.toFixed(2)}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    receiptData: state.receipt,
    productListData: state.productList,
  };
};

const Receipt = connect(mapStateToProps, null)(Receipt2);
export default Receipt;

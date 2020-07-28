import React, { useState, useEffect } from "react";
import "../styles/app.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
interface product {
  name: string;
  price: number;
  qty: number;
  type: number;
}
const Inputbox: React.FC<{
  index: number;
  name: string;
  price: string;
  qty: number;
  type: number;
  productList: product[];
  changeProductList: (input: product[]) => void;
}> = ({ index, name, price, qty, type, productList, changeProductList }) => {
  interface choice {
    value: number;
    label: string;
  }
  const defaultTypeList: choice[] = [
    { value: 0, label: "Food" },
    { value: 1, label: "Clothing" },
    { value: 2, label: "Others" },
  ];

  const [TypeList, setTypeList] = useState<choice[]>(defaultTypeList);
  const [productName, setProductName] = useState<string>(name);
  const [productPrice, setProductPrice] = useState<string>(price);
  const [productQty, setProductQty] = useState<number>(qty);
  const [productType, setProductType] = useState<number>(type);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/productType`,
        {}
      );
      data.map((result: string, index: number) => {
        console.log(index, result);
        TypeList[index] = { value: index, label: result };
      });
    };
    fetchData();
    // console.log(TypeList);
  }, []);

  useEffect(() => {
    productList[index] = {
      name: productName,
      price: parseFloat(productPrice),
      qty: productQty,
      type: productType,
    };
    changeProductList(productList);
  }, [productName, productPrice, productQty, productType]);

  return (
    <div className="flex-none w-64 flex items-center justify-center rounded-md border-black border-solid border-2 flex-col py-4 my-2">
      <TextField
        label="Product Name"
        value={productName}
        onChange={(event) => {
          setProductName(event.target.value);
        }}
        className=" my-4"
      />
      <TextField
        label="Price"
        value={productPrice}
        onChange={(event) => {
          setProductPrice(event.target.value);
        }}
        className="my-4"
      />
      <TextField
        label="Quantity"
        value={productQty || 0}
        onChange={(event) => {
          setProductQty(parseFloat(event.target.value) || 0);
        }}
        className="my-4"
      />
      <TextField
        select
        label=" Product Type"
        value={productType}
        onChange={(event) => {
          setProductType(parseFloat(event.target.value));
        }}
        helperText="Please select product type"
      >
        {TypeList.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Inputbox;

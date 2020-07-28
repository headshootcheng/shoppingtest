import React, { useState, useEffect } from "react";
import "../styles/app.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Inputbox from "./inputbox";
import axios from "axios";
import { connect } from "react-redux";
import { setReceipt, setProductList } from "../actions";

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
interface choice {
  value: number;
  label: string;
}
const Inputform2: React.FC<{
  createReceipt: (input: receipt) => void;
  createProductList: (input: product[]) => void;
}> = ({ createReceipt, createProductList }) => {
  const defaultProduct: product = {
    name: "",
    price: 0,
    qty: 0,
    type: 0,
  };

  const defaultCountryList: choice[] = [
    { value: 0, label: "CA" },
    { value: 1, label: "NY" },
  ];

  const [countryList, setCountryList] = useState<choice[]>(defaultCountryList);
  const [productList, setProductList] = useState<product[]>([defaultProduct]);
  const [countryCode, setCountryCode] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/location`,
        {}
      );
      data.map((result: string, index: number) => {
        //console.log(index, result);
        countryList[index] = { value: index, label: result };
      });
    };
    fetchData();
  }, []);

  const addProduct: () => void = () => {
    setProductList([...productList, defaultProduct]);
  };
  const resetProduct: () => void = () => {
    setProductList([]);
    const defaultReceipt = {
      subtotal: 0,
      total: 0,
      tax: 0,
    };
    createReceipt(defaultReceipt);
    createProductList([]);
  };

  const changeProductList: (productinput: product[]) => void = (
    productinput
  ) => {
    setProductList(productinput);
  };

  const submitForm = async () => {
    //console.log("hi", productList);
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/receipt`,
      {
        productList: productList,
        key: countryCode,
      }
    );
    createReceipt(data);
    createProductList(productList);
  };
  return (
    <div className="flex-1  flex flex-col items-center my-4 ">
      <TextField
        select
        label="Country"
        value={countryCode}
        onChange={(event) => {
          setCountryCode(parseFloat(event.target.value));
        }}
        helperText="Please select your country"
      >
        {countryList.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div className="max-h-screen overflow-scroll">
        {productList.map(({ name, price, qty, type }, index) => {
          return (
            <Inputbox
              index={index}
              name={name}
              price={price.toString()}
              qty={qty}
              type={type}
              productList={productList}
              changeProductList={changeProductList}
            />
          );
        })}
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 5 }}
        onClick={addProduct}
      >
        Add
      </Button>
      <Button
        variant="contained"
        style={{ marginTop: 5 }}
        onClick={resetProduct}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={submitForm}
        style={{ marginTop: 5 }}
      >
        Submit
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createReceipt: (input: receipt) => {
      dispatch(setReceipt(input));
    },
    createProductList: (input: product[]) => {
      dispatch(setProductList(input));
    },
  };
};
const Inputform = connect(null, mapDispatchToProps)(Inputform2);
export default Inputform;

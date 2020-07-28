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

export const setReceipt = (input: receipt) => {
  //console.log(input);
  return {
    type: "SET_RECEIPT",
    content: input,
  };
};

export const setProductList = (input: product[]) => {
  //console.log(input);
  return {
    type: "SET_LIST",
    content: input,
  };
};

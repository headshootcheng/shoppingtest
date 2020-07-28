import { combineReducers } from "redux";
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

const defaultReceipt: receipt = {
  subtotal: 0,
  total: 0,
  tax: 0,
};
interface action {
  type: string;
  content: receipt;
}

const receipt = (state = defaultReceipt, actions: action) => {
  switch (actions.type) {
    case "SET_RECEIPT": {
      return actions.content;
    }
    default:
      return state;
  }
};

const productList = (state = [], actions: action) => {
  switch (actions.type) {
    case "SET_LIST": {
      return actions.content;
    }
    default:
      return state;
  }
};

const ReceiptApp = combineReducers({
  receipt,
  productList,
});

export default ReceiptApp;

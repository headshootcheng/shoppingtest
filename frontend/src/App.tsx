import React from "react";
import logo from "./logo.svg";
import "./styles/app.css";
import Inputform from "./components/inputform";
import Receipt from "./components/receipt";
const App: React.FC<{}> = () => {
  return (
    <div className=" h-screen flex flex-row">
      <Inputform />
      <Receipt
        receiptData={{
          subtotal: 0,
          total: 0,
          tax: 0,
        }}
        productListData={[]}
      />
    </div>
  );
};

export default App;

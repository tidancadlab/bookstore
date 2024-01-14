import React from "react";
import "./input.css";
import { Field } from "./ui/component/index.jsx";

function App() {
  return (
    <div className="bg-orange-50">
      <h1 className="font-normal">This test</h1>
      <Field error={23123} label="username" placeholder="hello" type="checkbox" />
    </div>
  );
}

export default App;

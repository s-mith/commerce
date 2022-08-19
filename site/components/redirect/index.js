import React, { useEffect } from "react";
import Router from "next/router";

const Comp = () => {
  //...
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/you");
    }
  });
  //...
};

export default Comp;
import React from "react";
import classes from "./CssModule.module.scss";
const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CssModuleです</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};

export default CssModule;

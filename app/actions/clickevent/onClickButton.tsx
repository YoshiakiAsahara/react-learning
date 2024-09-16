import React, { useState } from "react";
const onClickButton = () => {
  const [num, setNum] = useState(0);
  setNum(num + 1);
};

export default onClickButton;

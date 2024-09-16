"use client"; // クライアントコンポーネントであることを明示

import { useState } from "react";
import ColoredMessage from "./component/TestFunction/ColoredMessage";

const [num, setNum] = useState(0);
const onClickButton = () => {
  setNum(num + 1);
};

export default function Home() {
  return (
    <div>
      <ColoredMessage color={"pink"} message={"こんばんは"} />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
}

"use client"; // クライアントコンポーネントであることを明示

import { useEffect, useState } from "react";
import ColoredMessage from "./component/TestFunction/ColoredMessage";
import CssModule from "./component/CssModules/CssModule";

export default function Home() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert();
  }, [num]);
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <ColoredMessage color={"pink"} message={"こんばんは"} />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModule />
    </div>
  );
}

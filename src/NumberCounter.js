import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  const noIsEvenDiv = (
    <>
      <hr /> {no % 2 == 0 ? <span>짝수입니다.</span> : <span>홀수입니다.</span>}
    </>
  );

  const noIs8multiple = no % 8 == 0 && (
    <>
      <span>8의 배수입니다.</span>
    </>
  );

  return (
    <>
      숫자:{no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      <hr />
      {noIsEvenDiv}
      <hr />
      {noIs8multiple}
    </>
  );
}

export default NumberCounter;

import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  const noIsEvenDiv =
    no % 2 == 0 ? (
      <>
        <span>짝수입니다.</span>
      </>
    ) : (
      <>
        <span>홀수입니다.</span>
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
      {no % 8 == 0 ? (
        <>
          <span>8의 배수입니다.</span>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default NumberCounter;

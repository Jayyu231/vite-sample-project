// 建立函式
// 箭頭
// function

import { useState } from "react";

function NewApp() {
  //   let drinkItem1 = 20;
  // [value, method]
  const [drinkItem1, setA] = useState(20);
  const [drinkItem2, setB] = useState(18);
  const [drinkItem3, setC] = useState(34);
  const [drinkItem4, setD] = useState(10);
  const [drinkItem5, setE] = useState(25);
  const [drinkItem6, setF] = useState(20);
  const [drinkItem7, setG] = useState(18);
  const [drinkItem8, setH] = useState(20);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>珍珠奶茶</td>
          <td>
            <small>香濃奶茶搭配QQ珍珠</small>
          </td>
          <td>50</td>
          <td>
            <button
              onClick={() => {
                setA(drinkItem1 - 1);
                // console.log(drinkItem1);
                // drinkItem1++;
                // console.log(drinkItem1);
              }}
            >
              -
            </button>
            {drinkItem1}
            <button
              onClick={() => {
                setA(drinkItem1 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>冬瓜檸檬</td>
          <td>
            <small>清新冬瓜配上新鮮檸檬</small>
          </td>
          <td>45</td>
          <td>
            <button
              onClick={() => {
                setB(drinkItem2 - 1);
              }}
            >
              -
            </button>
            {drinkItem2}
            <button
              onClick={() => {
                setB(drinkItem2 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>翡翠檸檬</td>
          <td>
            <small>綠茶與檸檬的完美結合</small>
          </td>
          <td>55</td>
          <td>
            <button
              onClick={() => {
                setC(drinkItem3 - 1);
              }}
            >
              -
            </button>
            {drinkItem3}
            <button
              onClick={() => {
                setC(drinkItem3 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>四季春茶</td>
          <td>
            <small>香醇四季春茶，回甘無比</small>
          </td>
          <td>45</td>
          <td>
            <button
              onClick={() => {
                setD(drinkItem4 - 1);
              }}
            >
              -
            </button>
            {drinkItem4}
            <button
              onClick={() => {
                setD(drinkItem4 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>阿薩姆奶茶</td>
          <td>
            <small>阿薩姆紅茶搭配香醇鮮奶</small>
          </td>
          <td>50</td>
          <td>
            <button
              onClick={() => {
                setE(drinkItem5 - 1);
              }}
            >
              -
            </button>
            {drinkItem5}
            <button
              onClick={() => {
                setE(drinkItem5 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>檸檬冰茶</td>
          <td>
            <small>檸檬與冰茶的清新組合</small>
          </td>
          <td>45</td>
          <td>
            <button
              onClick={() => {
                setF(drinkItem6 - 1);
              }}
            >
              -
            </button>
            {drinkItem6}
            <button
              onClick={() => {
                setF(drinkItem6 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>芒果綠茶</td>
          <td>
            <small>芒果與綠茶的獨特風味</small>
          </td>
          <td>55</td>
          <td>
            <button
              onClick={() => {
                setG(drinkItem7 - 1);
              }}
            >
              -
            </button>
            {drinkItem7}
            <button
              onClick={() => {
                setG(drinkItem7 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>抹茶拿鐵</td>
          <td>
            <small>抹茶與鮮奶的絕配</small>
          </td>
          <td>60</td>
          <td>
            <button
              onClick={() => {
                setH(drinkItem8 - 1);
              }}
            >
              -
            </button>
            {drinkItem8}
            <button
              onClick={() => {
                setH(drinkItem8 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
  // <div>元件
  //   {
  /* {num*2}
    <ul>1</ul>
    <ul>2</ul>
    <ul>3</ul>
{/* 核心：表達事（expression) */
  //   }
  //   {
  /*  alt +/ . */
  //   }
  //   {
  /* {num =2} */
  //   }
  //   {
  //     num === 100 ? "剛好100" : "不是100";
  //   }
  // </div> */}

  //

  //
}
export default NewApp;

//JSX 本質就是ＪＳ//

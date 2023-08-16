// 建立函式
// 箭頭
// function

import { useState } from "react";

function NewApp() {
  //   let drinkItem1 = 20;
  // [value, method]
  // Quantity number variables in Stock
  const [drinkQuantity1, setA] = useState(20);
  const [drinkQuantity2, setB] = useState(18);
  const [drinkQuantity3, setC] = useState(34);
  const [drinkQuantity4, setD] = useState(10);
  const [drinkQuantity5, setE] = useState(25);
  const [drinkQuantity6, setF] = useState(20);
  const [drinkQuantity7, setG] = useState(18);
  const [drinkQuantity8, setH] = useState(20);

  // DrinkItem name variables
  const [drinkItem1, setDrinkItem1] = useState("珍珠奶茶");
  const [drinkItem2, setDrinkItem2] = useState("冬瓜檸檬");
  const [drinkItem3, setDrinkItem3] = useState("冬瓜檸檬");
  const [drinkItem4, setDrinkItem4] = useState("四季春茶");
  const [drinkItem5, setDrinkItem5] = useState("阿薩姆奶茶");
  const [drinkItem6, setDrinkItem6] = useState("檸檬冰茶");
  const [drinkItem7, setDrinkItem7] = useState("芒果綠茶");
  const [drinkItem8, setDrinkItem8] = useState("抹茶拿鐵");

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
          <td
            onClick={() => {
              //   let result = prompt("請輸入想要的飲料名稱");
              setDrinkItem1(prompt("請輸入想要的飲料名稱"));
            }}
          >
            {drinkItem1}
          </td>
          <td>
            <small>香濃奶茶搭配QQ珍珠</small>
          </td>
          <td>50</td>
          <td>
            <button
              onClick={() => {
                setA(drinkQuantity1 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity1}
            <button
              onClick={() => {
                setA(drinkQuantity1 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem2(prompt("請輸入想要的飲料名稱"));
            }}
          >
            {drinkItem2}
          </td>
          <td>
            <small>清新冬瓜配上新鮮檸檬</small>
          </td>
          <td>45</td>
          <td>
            <button
              onClick={() => {
                setB(drinkQuantity2 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity2}
            <button
              onClick={() => {
                setB(drinkQuantity2 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem3(prompt("請輸入想要的飲料名稱"));
            }}
          >
            {drinkItem3}
          </td>
          <td>
            <small>綠茶與檸檬的完美結合</small>
          </td>
          <td>55</td>
          <td>
            <button
              onClick={() => {
                setC(drinkQuantity3 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity3}
            <button
              onClick={() => {
                setC(drinkQuantity3 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem4(prompt("請輸入想要的飲料名稱"));
            }}
          >
            {drinkItem4}
          </td>
          <td>
            <small>香醇四季春茶，回甘無比</small>
          </td>
          <td>45</td>
          <td>
            <button
              onClick={() => {
                setD(drinkQuantity4 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity4}
            <button
              onClick={() => {
                setD(drinkQuantity4 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem5(prompt("請輸入飲品名稱"));
            }}
          >
            {drinkItem5}
          </td>
          <td>
            <small>阿薩姆紅茶搭配香醇鮮奶</small>
          </td>
          <td>50</td>
          <td>
            <button
              onClick={() => {
                setE(drinkQuantity5 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity5}
            <button
              onClick={() => {
                setE(drinkQuantity5 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem6(prompt("請輸入飲品名稱"));
            }}
          >
            {drinkItem6}
          </td>
          <td>
            <small>檸檬與冰茶的清新組合</small>
          </td>
          <td>45</td>
          <td>
            <button
              onClick={() => {
                setF(drinkQuantity6 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity6}
            <button
              onClick={() => {
                setF(drinkQuantity6 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem7(prompt("請輸入飲品名稱"));
            }}
          >
            {drinkItem7}
          </td>
          <td>
            <small>芒果與綠茶的獨特風味</small>
          </td>
          <td>55</td>
          <td>
            <button
              onClick={() => {
                setG(drinkQuantity7 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity7}
            <button
              onClick={() => {
                setG(drinkQuantity7 + 1);
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              setDrinkItem8(prompt("請輸入飲品名稱"));
            }}
          >
            {drinkItem8}
          </td>
          <td>
            <small>抹茶與鮮奶的絕配</small>
          </td>
          <td>60</td>
          <td>
            <button
              onClick={() => {
                setH(drinkQuantity8 - 1);
              }}
            >
              -
            </button>
            {drinkQuantity8}
            <button
              onClick={() => {
                setH(drinkQuantity8 + 1);
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

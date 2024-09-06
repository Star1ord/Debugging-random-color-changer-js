const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",  
    /* SyntaxError: unknown: Unexpected token, expected "," (5:2)

    Syntax errors are thrown when the JavaScript engine encounters something it can't interpret. 
    commas were missing
    "#616A6B" 
    "#4A235A"
    "#2F4F4F",

    */
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    /* 
    1. Uncaught ReferenceError: math is not defined.
        math => Math
      console.log(darkColorsArr.length * math.random())
    
    2.  0.015882899879771095
        2.114596286197641
        6.040964780197666

        RefererenceError. To solve => added Math.floor() to take a least integer value
      */
      const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
//   Uncaught TypeError: document.queryselector is not a function. 
//  queryselector => querySelector
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    
    // const color = darkColorsArr[getRandomIndex];
    // Hex Code: undefined
    // [getRandomIndex] => [getRandomIndex()]
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  

  // btn.onclick = changeBackgroundColor() => btn.onclick = changeBackgroundColor;
  btn.onclick = changeBackgroundColor;
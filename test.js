var result1 ='number' + 3 + 3 //конкатенація строк , результат number33
console.log("result1", result1)

var result2 = null + 3 // result 3 null=0
console.log("result2",result2)

var result3 = 5 && "qwerty" // qwerty бо другу величину показує
console.log("result3",result3)

var result4= +'40' + +'2' + "hillel";//42hillel - конкатенація строк 
console.log("result4",result4)

var result5 = '10' - 5 === 6; // false - 5 не дорівнює 6
console.log("result5",result5)

var result6 = true + false //1 - бо переводяяться у числа 1+0
console.log("result6",result6)

var result7 = '4px' - 3 // NaN - з стрингою не проводяться мат операції
console.log("result7",result7)

var result8 = '4' - 3 //1 - стрінга конвертувалась в число 
console.log("result8",result8)

var result9= '6' + 3 ** 0;// 61 - 3 в ступені 0 =1 +конкатенація
console.log("result9",result9)

var result10= 12 / '6' //2 стрінга конвертувалась в число 
console.log("result10",result10)

var result11= '10' + (5 === 6); // 10false 10 як стринга з додаванням результату порівняння
console.log("result11",result11)

var result12= null == '' //false - порівняння з пустою строкою неможливе
console.log("result12",result12)

var result13= 3 ** (9 / 3); //27 - спочатку 9/3, потім 3в степені3
console.log("result13",result13)

var result14= !!'false' == !!'true' //true бо порівнюється дві строки які перевелись в true при двох !!
console.log("result14",result14)

var result15 = 0 || '0' && 1 // 1 бо вертає останню величину
console.log("result15",result15)

var result16=(+null == false) < 1; //false бо 1 = 1
console.log("result16",result16)

var result17= false && true || true // true бо && повертае false а || повернеtrue 
console.log("result17",result17)

var result18= false && (false || true); //false бо спочатки виконуються дужки де результат false
console.log("result18",result18)

var result19= (+null == false) < 1 ** 5; //false бо 1 = 1
console.log("result19",result19)
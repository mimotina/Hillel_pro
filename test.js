var arr = [
  {
      userName:"Test",
      lastName:"Test",
      email:"test.test@gmail.com>"
  },
  {
      userName:"Dmitro",
      lastName:"Porohov",
      email:"dmitro.porohov@yahoo.com>"
  },
  {
      userName:"Andrii",
      lastName:"",
      email:"andrii@mail.ru>" // Нам такі не підходять
  },
];


var pattern = /[a-zA-Z0-9]+[.]?[a-zA-Z0-9]*@(gmail.com|yahoo.com)/i;
function find(arr, pattern1){
let arrayEmail = [];
arr.forEach(function(currentValue){
  for (const key in currentValue){
    if (key==='email')
      arrayEmail.push(currentValue[key])
  }
})
return arrayEmail.filter(function(email){return pattern1.test(email)})
}
let newArray = find(arr, pattern)
console.log(newArray)

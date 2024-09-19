
function pow(x, y) {
   let stepen = x
for (let i = 0; i < y-1 ; i++) {
    stepen *= x;

  }
  return stepen
} 
let result = pow(3, 3)
console.log("result", result)


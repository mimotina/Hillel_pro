
function checkProbabilityTheory(count) {
  let parni =0
  let neparni=0
  let verojatnost
  const min = 100;
  const max = 1000; 

 let first = count
for (let i = 0; i < first ; i++) {
  const randomInRange = Math.floor((Math.random() * max) + min);

if  ( randomInRange%2 ==0 ) parni=++parni
else neparni = ++neparni

verojatnost=parni/neparni*100
  }
  console.log("parni", parni)
  console.log("neparni", neparni)
  console.log("count", count)
  return verojatnost
} 

let count = Math.floor(Math.random() * 1000)
let Probability = checkProbabilityTheory(count) 
console.log("Probability parno do neparni", Probability)


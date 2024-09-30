
var obj ={
  name:"Jon",
  sName:"Smith",
  age:25, 
    
}
function getInfo(){
for (let key in obj){
  console.log(key +': ' + obj[key])}
}
getInfo()
obj.newProperty='Lviv'
getInfo()




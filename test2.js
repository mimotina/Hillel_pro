var max = Number.MIN_VALUE
var min = Number.MAX_VALUE
var sum =0
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
 

function price(){
    for (let key in services) {
    var key1 = parseFloat(services[key].slice(0, -3).trim())
    sum += key1;
    }return sum
}
        

function minPrice (){
    for (let key in services) {
    var key1 = parseFloat(services[key].slice(0, -3).trim())
    if (min > key1){
        min=key1
        }
    }return min
}

function maxPrice(){
    for (let key in services) {
    var key1 = parseFloat(services[key].slice(0, -3).trim())
    if (max < key1) {
        max = key1;
        }
    }return max
}
    console.log(price())
    console.log(maxPrice())
    console.log(minPrice())
    
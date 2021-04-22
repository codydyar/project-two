

//{VIN: , type: , year: , make: , model: , color: , mileage: , price: , isNew: }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandAlphaNumStr(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);
  
  }

function randomVehicles(){
    let newVehicle = {}
    newVehicle.vin = generateRandAlphaNumStr(17)
    let typeList = ['Sedan','Van','Truck','SUV']
    newVehicle.type = typeList[getRandomInt(0,typeList.length-1)]
    newVehicle.year = getRandomInt(1994, 2021)
    let makeList = ["Audi","Bentley","BMW","Dodge","Ford","GMC","Honda","Jeep","Kia","Volvo"]
    newVehicle.make = makeList[getRandomInt(0,makeList.length-1)]
    newVehicle.model = ''
    let colorList = ['Black','Gray','Blue','Green','Red','Orange','White','Yellow','Silver']
    newVehicle.color = colorList[getRandomInt(0,colorList.length-1)]
    newVehicle.mileage = getRandomInt(0,300000) 
    newVehicle.price = getRandomInt(2000,70000)
    if(getRandomInt(0,1)===1){newVehicle.isNew = true}else{newVehicle.isNew = false}

    return `{VIN: '${newVehicle.vin}', type: '${newVehicle.type}', year: ${newVehicle.year}, make: '${newVehicle.make}', model: '', color: '${newVehicle.color}', mileage: ${newVehicle.mileage}, price: ${newVehicle.price}, isNew: ${newVehicle.isNew}},`

}
let num=50
for(let i = 0; i<num;i++){
console.log(randomVehicles())
}
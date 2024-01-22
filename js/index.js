function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}














function Rent(){

    return{
        array:[],
        numberOfCars:0,
        listAllCars:listAllCars,
        listCarsAv:listCarsAv,
        listCarsNotAv:listCarsNotAv,
        addCars:addCars,
        removeCars:removeCars,
        modifyCars:modifyCars
    }

}

var id=GenerateID()
function Cars(model,type,color,etat,state,price){
    
    return{
        id:id(),      
        model:model,
        type:type,
        color:color,
        etat:etat,
        state:state,
        price:price
    }

}
function addCars(model,type,color,etat,state,price){
    this.array.push(Cars(model,type,color,etat,state,price))
    this.numberOfCars=this.array.length
}
function GenerateID(){
    var count=0
    return function(){
       return count++
    }
}
function listcar(obj){
   
        console.log(' | id= '+obj['id']+' | model= '+obj['model']+' | type= '+obj['type']+
        " | color= "+obj['color']+" | etat"+obj['etat']+
        " | state "+obj['state']+" | price "+obj['price']   )

    

}

function listCars(array){
    each(array,function(element){
        listcar(element)

    })



}

function listAllCars(){
    listCars(this.array)
}
function listCarsAv(){

    arr=filter(this.array,function(
        return  state
    ))



}
function listCarsNotAv(){}
function removeCars(){}
function modifyCars(){}


var garage=Rent()

garage.addCars("model1","type1","red","etat1","AV",100)
garage.addCars("model2","type2","black","etat1","AV",100)
garage.addCars("model3","type3","green","etat1","AV",100)
garage.addCars("model4","type4","blue","etat1","AV",100)
garage.addCars("model5","type5","white","etat1","AV",100)
garage.addCars("model6","type6","gris","etat1","AV",100)
garage.addCars("model7","type7","oronge","etat1","AV",100)
garage.addCars("model8","type8","color1","etat1","AV",100)

garage.array



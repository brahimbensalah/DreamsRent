


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
        listCarsAv:listCarsAvModel,
        listCarsNotAv:listCarsNotAv,
        addCars:addCars,
        removeCars:removeCars,
        modifyCars:modifyCars,
        listCarsByModel:listCarsByModel,
        carRented:carRented,
        getPrice:getPrice
    }

}
var id=GenerateID()
function Cars(model,type,color,location,state,price){
    
    return{
        id:id(),      
        model:model,
        type:type,
        color:color,
        location:location,
        state:state,
        price:price
    }

}
function addCars(model,type,color,location,state,price){
    this.array.push(Cars(model,type,color,location,state,price))
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
        " | color= "+obj['color']+" | location"+obj['location']+
        " | state "+obj['state']+" | price "+obj['price']   )

    

}

function listCars(array){
    each(array,function(element){
        listcar(element)
    })
}

function listAllCars(){
    listCars(this.array)
    return this.array
}

function listCarsAv(){

    var arr=filter(this.array,function(element){
        return  element.state==='AV' 
})

return arr
}
function listCarsAvModel(model){

    var arr=filter(this.array,function(element){
        return  element.state==='AV' || element.model===model
})
 listCars(arr)
 return arr
}
function listCarsNotAv(){
    var arr=filter(this.array,function(element){
        return  element.state==='NAV'
})
return arr
}
function listCarsByModel(model){
    var arr=filter(this.array,function(element){
        return  element.model===model
})
 
 return arr
}
function removeCars(id){
   each(this.array,function(element,i){
    if(element.id===id)
    {
        this.array.splice(i,1)
        return "ur cars has removed"

    }

   })

}
function modifyCars(id,model,type,color,location,state,price){
    each(this.array,function(element,i){
        if(element.id===id)
        {
           element.model=model
           element.type=type
           element.color=color
           element.location=location
           element.state=state
           element.price=price   
        }
    
       })
       return "ur car has changed"



}
function carRented(id){
    each(this.array,function(element){
        if(element.id===id){
            element.state=false
            return listCars(element)
        }
    })

}

function getPrice(model,dateP,dateR){

}

//garage.modifyCars(1,"test","test","test","test","test",100)


var garage=Rent()

garage.addCars("Audi","type1","red","Germany",true,100)
garage.addCars("Mazda","type2","black","Belgium",false,100)
garage.addCars("Mazda","type2","black","Newyork,USA",false,100)

garage.addCars("Mazda","type2","black","Dallas",false,100)

garage.addCars("Honda","type3","green","Spain",true,100)
garage.addCars("Toyota","type4","blue","Newyork",false,100)
garage.addCars("Tesla","type5","white","tunis",true,100)
garage.addCars("Fiat","type6","gris","Dallas",false,100)
garage.addCars("BMW","type7","oronge","Germany",true,100)
garage.addCars("Acura","type8","color1","tunis",false,100)

garage.array

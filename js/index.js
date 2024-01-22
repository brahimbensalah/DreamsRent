$(document).ready(function(){

    $('.button1').click(function(){
        $("#button1").attr("href", "#cars");
        garage.listAllCars()
    })
    $("#botton2").click(function(){
       var model= $("#model").val();       
    garage.listCarsByModel(model) 
    })
    $("#Honda").click(function(){
        var model= $("#Honda").val();       
     garage.listCarsByModel(model) 
     })
     
    $("#Audi").click(function(){
        var model= $("#Audi").val();       
     garage.listCarsByModel(model) 
     })
     $("#Toyota").click(function(){
        var model= $("#Toyota").val();       
     garage.listCarsByModel(model) 
     })
     
     $("#Acura").click(function(){
        var model= $("#Acura").val();       
     garage.listCarsByModel(model) 
     })
     $("#Tesla").click(function(){
        var model= $("#Tesla").val();       
     garage.listCarsByModel(model) 
     })


     $('#rentcars').click(function(){
        var id=  $('#Id').val();
        console.log(id);
        //garage.carRented(id)




     })



    

       
    



});

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}


$(document).ready(function(){
   var array=garage.listAllCars()   
   for(var i=0;i<=array.length-1;i++)
   {
     for(key in array[i])
     {

       $('.car').append(`<div class="item-car">
       <div class="content-car">

           <div class="profile-image-container" >
               <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
           </div>

           <div class="car-name">
               <span class="text-name-car">${array[i].model}</span><hr>
           </div>
           <div class="car-description">
               <div class="item-description" > </div>
               <div class="item-description">text</div>
               <div class="item-description">text</div>
               <div class="item-description">text</div>
               <div class="item-description">text</div>
               <div class="item-description">text</div>
           </div>
           <div class="price" >
               <div style="float: left;position: relative;top:10px;left: 10px;">
               ${array[i].location}
               </div>
               <div style="float:right;position:relative;top:10px;right: 10px;">
               ${array[i].price}
               </div>
           </div>
           <div class="Rent">
               <button class="button Rent-botton" id="rentcars">
                   Rent Now
               </button>

           </div>

       </div>
   </div>`)
     }
   } 
    $('.button1').click(function(){
        $("#button1").attr("href", "#cars");
        $('.car').empty()
        
       var array=garage.listAllCars()
      
       for(var i=0;i<=array.length-1;i++)
       {
         for(key in array[i])
         {

           $('.car').append(`<div class="item-car">
           <div class="content-car">

               <div class="profile-image-container" >
                   <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
               </div>

               <div class="car-name">
                   <span class="text-name-car">${array[i].model}</span><hr>
               </div>
               <div class="car-description">
                   <div class="item-description" > </div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
               </div>
               <div class="price" >
                   <div style="float: left;position: relative;top:10px;left: 10px;">
                   ${array[i].location}
                   </div>
                   <div style="float:right;position:relative;top:10px;right: 10px;">
                   ${array[i].price}
                   </div>
               </div>
               <div class="Rent">
                   <button class="button Rent-botton" id="rentcars">
                       Rent Now
                   </button>
                   <button class="button Rent-botton" id="delete">
                       Rent Now
                   </button>

               </div>

           </div>
       </div>`)
         }
       }

    })
    $(".botton2").click(function(){
      $("#botton2").attr("href", "#cars");
       var model= $("#model").val();  
       $('.car').empty()  
       var array=garage.listCarsByModel(model)   
       console.log(array)
       for(var i=0;i<=array.length-1;i++)
       {
         for(key in array[i])
         {

           $('.car').append(`<div class="item-car">
           <div class="content-car">

               <div class="profile-image-container" >
                   <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
               </div>

               <div class="car-name">
                   <span class="text-name-car">${array[i].model}</span><hr>
               </div>
               <div class="car-description">
                   <div class="item-description" > </div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
                   <div class="item-description">text</div>
               </div>
               <div class="price" >
                   <div style="float: left;position: relative;top:10px;left: 10px;">
                   ${array[i].location}
                   </div>
                   <div style="float:right;position:relative;top:10px;right: 10px;">
                   ${array[i].price}
                   </div>
               </div>
               <div class="Rent">
                   <button class="button Rent-botton" id="rentcars">
                       Rent Now
                   </button>

               </div>

           </div>
       </div>`)
         }
       }

    })
    $("#Honda").click(function(){
        var model= $("#Honda").val(); 
        $('.car').empty()

        var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
          for(key in array[i])
          {
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
                </div>
 
                <div class="car-name">
                    <span class="text-name-car">${array[i].model}</span><hr>
                </div>
                <div class="car-description">
                    <div class="item-description" > </div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                </div>
                <div class="price" >
                    <div style="float: left;position: relative;top:10px;left: 10px;">
                    ${array[i].location}
                    </div>
                    <div style="float:right;position:relative;top:10px;right: 10px;">
                    ${array[i].price}
                    </div>
                </div>
                <div class="Rent">
                    <button class="button Rent-botton" id="rentcars">
                        Rent Now
                    </button>
 
                </div>
 
            </div>
        </div>`)
          }
        }
     })
     
    $("#Audi").click(function(){
        var model= $("#Audi").val();       
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
          for(key in array[i])
          {
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
                </div>
 
                <div class="car-name">
                    <span class="text-name-car">${array[i].model}</span><hr>
                </div>
                <div class="car-description">
                    <div class="item-description" > </div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                </div>
                <div class="price" >
                    <div style="float: left;position: relative;top:10px;left: 10px;">
                    ${array[i].location}
                    </div>
                    <div style="float:right;position:relative;top:10px;right: 10px;">
                    ${array[i].price}
                    </div>
                </div>
                <div class="Rent">
                    <button class="button Rent-botton" id="rentcars">
                        Rent Now
                    </button>
 
                </div>
 
            </div>
        </div>`)
          }
        } 
     })
     $("#Toyota").click(function(){
        var model= $("#Toyota").val();       
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
          for(key in array[i])
          {
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
                </div>
 
                <div class="car-name">
                    <span class="text-name-car">${array[i].model}</span><hr>
                </div>
                <div class="car-description">
                    <div class="item-description" > </div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                </div>
                <div class="price" >
                    <div style="float: left;position: relative;top:10px;left: 10px;">
                    ${array[i].location}
                    </div>
                    <div style="float:right;position:relative;top:10px;right: 10px;">
                    ${array[i].price}
                    </div>
                </div>
                <div class="Rent">
                    <button class="button Rent-botton" id="rentcars">
                        Rent Now
                    </button>
 
                </div>
 
            </div>
        </div>`)
          }
        } 
     })
     
     $("#Acura").click(function(){
        var model= $("#Acura").val();   
        $('.car').empty()    
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
          for(key in array[i])
          {
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
                </div>
 
                <div class="car-name">
                    <span class="text-name-car">${array[i].model}</span><hr>
                </div>
                <div class="car-description">
                    <div class="item-description" > </div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                </div>
                <div class="price" >
                    <div style="float: left;position: relative;top:10px;left: 10px;">
                    ${array[i].location}
                    </div>
                    <div style="float:right;position:relative;top:10px;right: 10px;">
                    ${array[i].price}
                    </div>
                </div>
                <div class="Rent">
                    <button class="button Rent-botton" id="rentcars">
                        Rent Now
                    </button>
 
                </div>
 
            </div>
        </div>`)
          }
        } 
     })
     $("#Tesla").click(function(){
        var model= $("#Tesla").val(); 
        $('.car').empty()      
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
          for(key in array[i])
          {
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car-8.jpg" alt="" style="width: 100%;height: 100%;border-radius:20px;">
                </div>
 
                <div class="car-name">
                    <span class="text-name-car">${array[i].model}</span><hr>
                </div>
                <div class="car-description">
                    <div class="item-description" > </div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                    <div class="item-description">text</div>
                </div>
                <div class="price" >
                    <div style="float: left;position: relative;top:10px;left: 10px;">
                    ${array[i].location}
                    </div>
                    <div style="float:right;position:relative;top:10px;right: 10px;">
                    ${array[i].price}
                    </div>
                </div>
                <div class="Rent">
                    <button class="button Rent-botton" id="rentcars">
                        Rent Now
                    </button>
 
                </div>
 
            </div>
        </div>`)
          }
        } 
     })


     $('#rentcars').click(function(){
        var id=  $('#id-car').val();
        console.log(id);
        //garage.carRented(id)
     })
     
$('#addcars').on('click',function(){
   var model = $("#model").val();
   var color = $("#color").val();
   var type = $("#type").val();
   var state = $("#state").val();
   var price = $("#Price").val();
   var location = $("#location").val();
   garage.addCars(model,type,color,location,state,price)
      alert('your car has aded')   
  })



  $('#deletecar').on('click',function(){
   garage.removeCars()
      alert('your car has removed')   
  })
  
     

  
    


    

       
    



});



function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}


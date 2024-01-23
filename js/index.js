$(document).ready(function(){

   







   var array=garage.listAllCars()   
   for(var i=0;i<=array.length-1;i++)
   {
    

       $('.car').append(`<div class="item-car">
       <div class="content-car">

           <div class="profile-image-container" >
               <img src="./photos/car${i}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
   /*****************************seaarch ********************************************* */ 

    $('.button1').click(function(){
        $("#button1").attr("href", "#cars");
        $('.car').empty()
        
       var array=garage.listAllCars()
      
       for(var i=0;i<=array.length-1;i++)
       {
         

           $('.car').append(`<div class="item-car">
           <div class="content-car">

               <div class="profile-image-container" >
                   <img src="./photos/car${i}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
    })
    $(".botton2").click(function(){
      $("#botton2").attr("href", "#cars");
       var model= $("#model").val();  
       $('.car').empty()  
       var array=garage.listCarsByModel(model)   

       for(var i=0;i<=array.length-1;i++)
       {
         

           $('.car').append(`<div class="item-car">
           <div class="content-car">

               <div class="profile-image-container" >
                   <img src="./photos/car${i}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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

    })
    $("#Honda").click(function(){
        var model= $("#Honda").val(); 
        $('.car').empty()

        var array=garage.listCarsByModel(model)   
        $('.car').empty()
        for(var i=0;i<=array.length-1;i++)
        {
          
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car${i}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
     })
     
    $("#Audi").click(function(){
        var model= $("#Audi").val(); 
        $('.car').empty()       
     var array=garage.listCarsByModel(model)   
     for(var i=0;i<=array.length-1;i++)
     {
       

         $('.car').append(`<div class="item-car">
         <div class="content-car">

             <div class="profile-image-container" >
                 <img src="./photos/car${i+2}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
     })
     $("#Toyota").click(function(){
        var model= $("#Toyota").val();  
        $('.car').empty()      
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car${i+5}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
     })
     
     $("#Acura").click(function(){
        var model= $("#Acura").val();   
        $('.car').empty()    
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
         
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car${i+7}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
     })
     $("#Tesla").click(function(){
        var model= $("#Tesla").val(); 
        $('.car').empty()      
     var array=garage.listCarsByModel(model)   
        for(var i=0;i<=array.length-1;i++)
        {
         
 
            $('.car').append(`<div class="item-car">
            <div class="content-car">
 
                <div class="profile-image-container" >
                    <img src="./photos/car${i}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
     })
   /*****************************Rent caars ********************************************* */ 


     $('#rentcars').click(function(){
        var id=  $('#id-car').val();
        console.log(id);
        alert('your car has rented')
        garage.carRented(id)
     })
   /*****************************Add cars ********************************************* */ 
$('#addcars').on('click',function(){
   var model = $("#model").val();
   var color = $("#color").val();
   var type = $("#type").val();
   var state = $("#state").val();
   var price = $("#Price").val();
   var location = $("#location").val();




   garage.addCars(model,type,color,location,state,price)
   $('.car').empty() 
   console.log(garage.array);
   var array=garage.array
   
   for(var i=0;i<=array.length-1;i++)
   {
    

       $('.car').append(`<div class="item-car">
       <div class="content-car">

           <div class="profile-image-container" >
               <img src="./photos/car${i}.JPEG" alt="" style="width: 100%;height: 100%;border-radius:20px;">
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
   
   alert(`your ${model} with ${color} / type= ${type}/ located in ${location} / state= ${state} `)
})
   /******************************Delete cars************************************************************ */


    
   $('#deletecar').on('click',function(){
      garage.removeCars(id)
         alert('your car has removed')   
     })

     /*****************************Modify car*************************************************** */
   
          
$('#modify').on('click',function(){
   var model = $("#model").val();
   var color = $("#color").val();
   var type = $("#type").val();
   var state = $("#state").val();
   var price = $("#Price").val();
   var location = $("#location").val();
   var id = $("#id").val();


   garage.modifyCars(id,model,type,color,location,state,price)
   console.log(model)
   console.log(color)
   console.log(type)
   console.log(state)
   console.log(price)
   console.log(price)
   console.log(location)
   console.log(id)
   console.log(model)
  

        alert(`your ${model} with ${color} / type= ${type}/ located in ${location} / state= ${state} has modifyed `)

  })
  

     
    


    

       
    



});



function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}


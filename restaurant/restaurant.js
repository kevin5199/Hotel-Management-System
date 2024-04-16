const totalDisplay = document.querySelector('#total');
let total =0.00;
totalDisplay.textContent = `${total}`;
function chekboxUpdatePrice(){
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let totalPrice=0;
checkboxes.forEach(checkbox => {
      
          if (checkbox.checked) {
              if(checkbox.value=='veg.kolhapuri'){
                totalPrice+=260.00;
              } if(checkbox.value=='veg.handi'){
                totalPrice+=250.00;
              }
               if(checkbox.value=='veg.kadai'){
                totalPrice+=260.00;
              }
               if(checkbox.value=='veg.jaipuri'){
                totalPrice+=275.00;
              }
               if(checkbox.value=='veg.makkhanvala'){
                totalPrice+=275.00;
              }
              // paneer
               if(checkbox.value=='paneer Bhuraji'){
                totalPrice+=315.00;
              }
               if(checkbox.value=='paneer Butter masala'){
                totalPrice+=285.00;
              }
               if(checkbox.value=='paneer Cheese masala'){
                totalPrice+=300.00;
              }
               if(checkbox.value=='paneer palak'){
                totalPrice+=250.00;
              }
               if(checkbox.value=='paneer Tikka masala'){
                totalPrice+=260.00;
              }
              // roti
               if(checkbox.value=='Roti'){
                totalPrice+=25.00;
              }
               if(checkbox.value=='Tandorori Roti'){
                totalPrice+=35.00;
              }
               if(checkbox.value=='Tandorori Butter Roti'){
                totalPrice+=40.00;
              }
               if(checkbox.value=='Plain naan'){
                totalPrice+=55.00;
              }
               if(checkbox.value=='Butter naan'){
                totalPrice+=60.00;
              }
              // Rice
               if(checkbox.value=='Plain Rice'){
                totalPrice+=105.00;
              } if(checkbox.value=='jeera Rice'){
                totalPrice+=145.00;
              } if(checkbox.value=='Fry Rice'){
                totalPrice+=155.00;
              }
              // dal
               if(checkbox.value=='veg.Hot and Sour soup'){
                totalPrice+=160.00;
              }
               if(checkbox.value=='Cream Of Tomato Soup'){
                totalPrice+=160.00;
              }
               if(checkbox.value=='veg.Manchow soup'){
                totalPrice+=160.00;
              }
               if(checkbox.value=='veg.Manchurian Dry'){
                totalPrice+=290.00;
              }
               if(checkbox.value=='veg.Hakka Noodles'){
                totalPrice+=240.00;
              }
               if(checkbox.value=='soybean chilli Dry'){
                totalPrice+=260.00;
              }
              // Starter
              if(checkbox.value=='Butter Milk'){
                totalPrice+=40.00;
              }
               if(checkbox.value=='Mirinda'){
                totalPrice+=40.00;
              }
               if(checkbox.value=='Coca Cola'){
                totalPrice+=50.00;
              }
               if(checkbox.value=='Slice'){
                totalPrice+=30.00;
              }
               if(checkbox.value=='Sprite'){
                totalPrice+=25.00;
              }
          }
      });
      total+=totalPrice;
      totalDisplay.textContent =`${total}`;
}

document.getElementById("add").addEventListener('click',function(e){
  e.preventDefault();
  chekboxUpdatePrice();
})

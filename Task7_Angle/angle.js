

let  side1= 0;
let   side2= 0;
let  side3 =0;

if ( side1 === side2 && side2 === side3) 
    { 
      side1= side1 + 3;
      side2=  side2 + 3;
      side3=  side3 + 3;
    console.log('Equilateral triangle');

  } 

  if (side1 === side2 || side2 === side3 || side1 === side3) {
         
    console.log("Isosceles Triangle");
    side1= side1 + 3;
    side2=  side2 + 2;
    side3=  side3 + 2;

  } if (side1 !== side2 || side2 !== side3)
  {
    console.log("Scalene Triangle");

    side1= side1 + 2;
    side2=  side2 + 11;
    side3=  side3 + 5;

  }
    
  
      

    
     
       
      
  
    
    



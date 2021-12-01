
// task 3 ve 5 cem

// let cem=0;
// for(let i=1;i<=1000;i++)
// 	{
// 		if(i%3==0 && i%5==0)
// 			{
// 				cem+=i;
// 			}
// 	}
// console.log(cem)




// task duzbucaq
// let a = Number(prompt("eni daxil edin:"));
// let b = Number(prompt("uzunu daxil edin:"));

// console.log("Duzbucaqlinin sahesi:"+ " " +a*b+ " " + "kv santimetre beraberdir");





// task cemi 3 qat eden

// let num1 = Number(prompt("ededi daxil edin birince:"))
// let num2 = Number(prompt("ededi daxil edin birince 2:"))
// if(num1==num2){
//       console.log(3*(num1+num1))
// }
// else{
//     console.log(num1+num2)
// }




// task muqayise

// let x=Number(prompt("muqayise etmek istediyiniz 1 ededi daxil edin:"));
// let y=Number(prompt("muqayise etmek istediyiniz 2 ededi daxil edin:"));

// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     console.log(true)
//   }
//   else 
//   {
//     console.log (false)
//   }
// }




//task eded ters cevirme

// let n, reverse = 0;    
// n=Number(prompt("Ededi daxil edin:"));
// while(n != 0)
// {
//     reverse = reverse * 10;
//     reverse = reverse + n%10;
//     n = Math.floor(n/10);
// }
// console.log("ededin tersi budur: " + reverse);




//task ulduz olan
let x,y,char;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
       char=char+("*");        
     }
 console.log(char);
 char=' ';    
}
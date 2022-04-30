


// var d = document.getElementById("i");
// console.log(d);

// var non=document.getElementById("i");


// var moahmmed = non.getAttribute("mohammed");
// var res ='';
// for (var i =0; i<moahmmed;i++){
//     res+="<h1>ali</h1> </br>";

// }
// non.innerHTML=res;

// var x = 10;
// var y = 5 ;
//  if(x<y){
//      console.log('yes')
//  }else if(x<y){
//      console.log('no')
//  }

//   "use strict";
//   console.log(x);
//  var x=45;

// function welcome(){
//     var name = "mohammed";
//     let test = " ali";


// }
// console.log(test);
// welcome();

// function mohammed(){
//     let x=5;
//     console.log(x);
// }

// function kamal(){
//     let x = 77;
//     console.log(x);
// }

// function ahmed(){
//     let x = 88;
//     console.log(x);
// }
// mohammed();
// kamal();
// ahmed();


// let arr=["mohammed" , "ali" , "abdo"];
// console.log(arr);
 

// arr.forEach((a,b)=>{
//     console.log(b);
// })
                    //رسمــــة الشطرنج //
// !start//
// document.write("<table border ='1' width='600'>");

// for( let y =0 ; y<=8 ; y++){
//     document.write("tr");

//     for( let x=0; x<=8 ; x++){
//         let total=x+y ;
//         if (total %2==1){
//             document.write("<td style='background:black;width:20px;height:40px'></td>");
//         }else{
//             document.write("<td style='background:black;width:20px;height:20px'></td>");
//         }
//     }
//     document.write("</tr>");
// }
// document.write("</table>")

// end //

// function name(){
//     console.log('welcome y mohammed');
// }

// name();
// name();
window.onscroll = function(){
    if(window.scrollY>100){
        document.getElementById("nav").classList.add("menugreen");
        document.getElementById("nav").classList.remove("menu");
    }else{
        document.getElementById("nav").classList.remove("menugreen");
        document.getElementById("nav").classList.add("menu");
    }
}

var transport = ["bike","car","bus","boat"]
 var result='';
 var result1='';
 var result2='';
console.log(transport.length)



for(var i=0;i< transport.length;i++){
    result += transport[i]+'<br>'
}

// For-of to check the array value
 for(var i of transport){
   result += i+"<br/>"  
 }

 var display = document.querySelector('.forloop')
 display.innerHTML= "For-Loop <br>"+result;
 

var i =0;
while(i<transport.length){
    result1 += transport[i]+"<br/>";
    i++;
}

var display = document.querySelector('.whileloop')
display.innerHTML= "while-Loop <br>"+result1;

do{
    result2 += transport[i]+"<br/>";
     i++;
}
while(i<transport.length)

var display = document.querySelector('.dowhileloop')
display.innerHTML= "do while <br>"+result2;



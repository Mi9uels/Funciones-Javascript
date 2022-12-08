let a=1
let b=2

// Declarativa

function declarativa(){console.log('Declarativa')}

//Expresiva

var expresiva=()=>{console.log('expresiva')}

//testeo

declarativa()
expresiva()

//function example(a, b, c){
//    return a+b+c}


var example = (a,b,c) => a+b+c
{console.log(example(1,2,3))}

example()
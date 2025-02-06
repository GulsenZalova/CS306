// if-else if-else


let num = 41


if (num < 0) {
    console.log(`${num} menfi ededdir!!`)
} else if (num == 0) {
    console.log(`sifirdir`)
} else {
    console.log(`${num} musbet ededdir!!`)
}

//  3e Fizz, 5 Buzz , 15 FizzBuzz


if (num % 15 == 0) {
    console.log("FizzBuzz")
} else if (num % 3 == 0) {
    console.log("Fizz")
} else if (num % 5 == 0) {
    console.log("Buzz")
} else {
    console.log("sert odenmir")
}




//  switch/case
// let day = Number(prompt("bir gun daxil edin"))
// console.log(typeof day)
// switch (day) {
//     case 1:
//         console.log("bazarertesi")
//         break;
//     case 2:
//         console.log("c.a")
//         break;
//     case 3:
//         console.log("Ç")
//         break;
//     case 4:
//         console.log("c.axsami")
//         break;
//     case 5:
//         console.log("cume")
//         break;
//     case 6:
//         console.log("senbe")
//         break;
//     case 7:
//         console.log("bazar")
//         break;
//     default:
//     console.log("bele bir gun yoxdur")
// }



let num1 = Number(prompt("ilk reqemi daxil et"))
let num2 = +(prompt("ilk reqemi daxil et"))
let calc = prompt("emeliyyat daxil edin")
let result


switch (calc) {
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2

        if(result>0){
            console.log("neticemiz musbet alindi")
        }else{
            console.log("neticemiz menfi alindi")
        }
        break;
    case "*":
        result = num1 * num2
        break;
    case "/":
        result = num1 / num2
        break
    case "**":
        result = num1 ** num2
        break;
    default:
        console.log("bele bir emeliyyat yoxdur")
}


console.log(result)




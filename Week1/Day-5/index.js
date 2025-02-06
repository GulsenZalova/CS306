// for while do/while


// 5 defe consoleda salam yazilsin
// for(let i=1;i<=5;i++){
//     console.log(i)
// }


// for(let i=5;i>0;i--){
//     console.log(i)
// }



// let num1=+prompt("ilk reqem")
// let num2=Number(prompt("Ikinci reqem"))
// let count=0


// for(let i=num1;i<=num2;i++){
//     if(i%2!==0){
//         console.log(i)
//         count++
//     }
// }


// console.log(count)




// let str="Hello"
// let newStr=""

// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// for(let i=str.length-1;i>=0;i--){
//    newStr+=str[i]
// }


// console.log(newStr)






// let students=["Huseyn","Duygu","Ali","Elmir","Elnur","Elmar"]
// let newArr=[]
// let count=0

// for(let i=0;i<students.length;i++){
//     if(students[i][0]=="E"){
//          newArr.push( students[i])
//          count++
//     }


// }

// console.log(newArr.length)
// console.log(count)




let num1=+prompt("ilk reqem")
let num2=Number(prompt("Ikinci reqem"))
let newArr=[]

for(let i=num1;i<=num2;i++){
     newArr.push(i)
}

console.log(newArr)
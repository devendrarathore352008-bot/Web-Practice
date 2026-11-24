//                           Conditional Statements { if / else and else if}

//    Method to type

//    if(condition){
//     print/more conditional statements;
//    }

// Use of if and else
console.log("Use of if and else")

let x = 2;

if (x == 0) {
  x = "passed";
  console.log(x);
}
else{
    x = "failed";
    console.log(x);
}


// Use of else if together instead of elif in python
console.log("\nUse of else if")

let age = 18;


if (age<18){
    console.log("Minor");
}
else if (age == 18){
    console.log("18 years old");
}

else{
    console.log("Adult");
}
// function pattern(n) {
//     for (row = 1; row <= n; row += 1) {
//       let star = "";
//       for (col = 1; col <= n; col += 1) {
//         star = star + "*";
//       }
//       console.log(star);
//     }
// }
// pattern(4)
// pattern(5)
// pattern(6)


let n = 10
for (row = 1; row <= n; row += 1){
    
    let str = "";
    for (col = 1; col <= n; col += 1){
        str+="*"
    }
    console.log(str);
}

// function table(num) {
//     for (i = 1; i <= 10; i++) {
      
//       console.log(`${num} * ${i} = `, num * i);
//     }
// }
// table(2)
// table(3)
// table(4)
// table(12)

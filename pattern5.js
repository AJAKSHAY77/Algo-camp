// let n = 5
// for (row = 1; row <= n; row += 1){
//     let str = "";
    
   
//     for (col = 1; col<=(n-row)+1; col += 1){
//         str+="*"
//     }
//     console.log(row,str);
    
// }
let n = 5
for (row = 1; row <= n; row += 1){
    
    let str = "";
    for (col = 1; col <=(n-row)+1; col += 1){
        str+="*"
    }
    console.log(row ,"=",str);
}
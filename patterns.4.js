let n = 5
for (row = 1; row <= n; row += 1){
    let str = ""
    for (i = 1; i <= n - row; i += 1){
        str+=" "
    }
    for (col = 1; col <= (row*2)-1; col += 1){
        
        str+="*"
    }
   
    console.log(str);
}
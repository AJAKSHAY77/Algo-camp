let n = 4
for (row = 1; row <= n; row += 1){
    let str = "";
    for (col = 1; col <= n; col += 1){
        if (col == n - row) {
            str += "*";
       }
    }
    console.log(str);
}
let n=5
function uppertriangle(n) {
    for (row = 1; row <= n; row += 1) {
      let str = "";

      for (col = 1; col <= n - row; col += 1) {
        str += " ";
      }

      for (col = 1; col <= row * 2 - 1; col += 1) {
        str += "*";
      }
      console.log(str);
    }
}

function lowertriangle(n) {
    for (row = 1; row <= n - 1; row += 1){
        let str = ""
        for (i = 1; i <= row; i++){
            str+=" "
        }
        let stars = 2 * (n - row) - 1;
        for (j = 1; j <= stars; j +=1){
            str+="*"
        }
        console.log(str);
    }
   
}
function pattern(n) {
    uppertriangle(n);
    lowertriangle(n)
}

pattern(10)
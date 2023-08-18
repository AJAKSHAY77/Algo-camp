function pattern(n) {
    for (row = 1; row <= n; row += 1) {
      let star = "";
      for (col = 1; col <= n; col += 1) {
        star = star + "*";
      }
      console.log(star);
    }
}
pattern(4)
pattern(5)
pattern(6)

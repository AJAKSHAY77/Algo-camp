// const x = 13

// if (x % 2 == 0) {
//     console.log(`this is a even number ${x}`);
// } else {
//     console.log(`this is a odd number ${x}`);
// }
// let x = 12
// let y = 20
// let z = 19

// if (x > y && x > z) {
//     console.log(`${x} is a greater number`);
// }
// else if (y > x && y > z) {
//      console.log(`${y} is a greater number`);
// }
// else if (z > x && z > y) {
//     console.log(`${z} is a greater number`);
// }

//making triangles
// let a = 1, b = 5, c = 3;
// if (a + b > c && b + c > a && c + a > b) {
   
//     console.log(`triangle is created`);
// }
// else {
//     console.log(`cannot make triangles with given lines`);
// }

// making 3 trinages
let a = 22, b = 10, c = 21

if (a != b && b != c && c != a) {
  console.log(`this is a scalene triangle`);
} else if (a == b && b == c && c == a) {
  console.log(`equilateral triangle`);
} else if (a == b || b == c || c == a) {
  console.log(`this is a isosceles triangle`);
}
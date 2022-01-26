[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// [2, 4, 6]

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
//[1, 2, 0, 1, 2, 3

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
// What is the value of i ? 0-5

const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const arr = array.flat(2)

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const greet = greeting.map(element => element.join(` `))
console.log(greet)
const newgreet = greeting.flat()
const string = newgreet.join(` `)
console.log(string)
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const free3 = trapped.flat(25)
console.log(free3)
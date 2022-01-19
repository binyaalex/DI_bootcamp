let menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]
// debugger
const check = menu.some(elemnt =>elemnt.type === `dessert`)
const check2 = menu.every(elemnt =>elemnt.type === `starter`)
const check3 = menu.some(elemnt =>elemnt.type === `main course`)
check3 ? console.log(`good`) : menu.push({type : "main course", name : "pasta"})
let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
let i
for (i = menu.length - 1; i >= 0; i--) {      const check4 = vegetarian.some(element=>menu[i].name.toLowerCase().includes(element))
      check4 === true ? i = -1 : d = 0
}
i === -2 ? menu.push({vegetarian:true}) : menu.push({vegetarian:false})

let newArr = []
let newArr1 = []
let newArr2 = []
string1 = `asdfghjkl;`
const stringChop = (string, num) => {
  for (let num; num > string.length; num+2) {
    newArr.push(string.slice(string.length - num))
  }
  
  // console.log(newArr)
  // console.log(string.length)
  // console.log(string.length-num)
}
stringChop(string1, 2)
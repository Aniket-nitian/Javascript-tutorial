// map return an array

const age = [1,2,3,4,5,6,7,8,9]

const AGE = age.map((x,index) => {
  console.log(x,index+1);
})

console.log(AGE)

console.log(
  age.map((x) => {
  console.log(x);
})
)

//Filter
console.log("******Filter******")

const Number = age.filter((x,index) => {
  console.log(x,index+1);
})
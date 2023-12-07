let classmates = ["철수", "영희", "훈이"]

console.log(classmates) // "철수", "영희", "훈이"
console.log(classmates[0]) // 철수

console.log(classmates.includes("훈이")) // true
console.log(classmates.includes("맹구")) // false
console.log(classmates.length) // 3

classmates.push("짱구") 
console.log(classmates) // "철수", "영희", "훈이", "짱구"

classmates.pop() 
console.log(classmates) // "철수", "영희", "훈이"

let developer = ["꾸준함", "정신력", "목표", "건강", "영어"]
console.log(developer);

let dream = ["커리어점프", "성공", "할 수 있다"]

let dev_dream = developer.concat(dream)
console.log(dev_dream)

const email = "codecamp@gmail.com"
console.log(email[0]) // c
console.log(email[1]) // o

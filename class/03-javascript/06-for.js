const children = ["철수", "영희", "훈이"]

for (let i = 0; i < children.length; i++) {
    console.log(children[i] + "입니다")
}

let persons = [
    {name: "철수", age: 17},
    {name: "유리", age: 22},
    {name: "훈이", age: 5},
    {name: "맹구", age: 65},
    {name: "짱구", age: 25}
]

for (let count = 0; count < persons.length; count++) {
    if (persons[count].age >= 19) {
        console.log(persons[count].name + "님은 성인입니다")
    } else {
        console.log(persons[count].name +"님은 미성년자입니다")
    }
}

const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스캣"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "청혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"}
]

for (let k = 0; k < fruits.length; k++) {
    console.log(fruits[k].number + " " + fruits[k].title)
    console.log(`${fruits[k].number} ${fruits[k].title}`)
    console.log(`과일차트 ${fruits[k].number}위는 ${fruits[k].title}입니다`)
}
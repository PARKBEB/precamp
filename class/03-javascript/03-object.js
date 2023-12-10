let friend = {
    name: "철수",
    age: 13,
    camp: "코드캠프"
}

console.log(friend)
console.log(friend.name)
console.log(friend["age"])
console.log(friend.camp)

let student = [
    {name: "길동", pet: "강아지", house: "구로구"}, // student[0]
    {name: "철수", pet: "고양이", house: "관악구"}, // student[1]
    {name: "다희", pet: "미어캣", house: "강서구"}  // student[2]
]

student[0].name // 길동
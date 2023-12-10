const email = "codcamp@gmail.com"
console.log(email.includes("@"))
console.log(email.split("@")) // @이를 기준으로 나눔 > 배열로 반환 ['codecamp', 'gmail.com']

email.split("@")[1] // gmail.com

let user = email.split("@")[0] // codecamp
let company = email.split("@")[1] // gmail.com

let maskingMail = []
maskingMail.push(user[0])
maskingMail.push(user[1])
maskingMail.push(user[2])
maskingMail.push(user[3])
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")

let result = maskingMail.join("") + "@" + company // code****@gmail.com

console.log(result)

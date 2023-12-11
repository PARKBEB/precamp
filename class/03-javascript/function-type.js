// 함수 선억식
function hello(name) {
    alert(name + "님 안녕하세요")
}

let friend = "은지"
hello(friend)

// 함수 표현식 (익명 함수)
const hi = function(friend) {
    alert(friend + "님 반갑습니다")
}

hi(friend)

// 화살표 함수
const meet = (friend) => {  // => 가 function이라는 키워드와 동일하게 작동
    alert(friend + "님 만나서 반갑습니다")
}

meet(friend)
interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var minhoo: User = {
    age: 33,
    name: '민후'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const sm = {
    age: 19,
    name: 'ㅅㅁ'
}
getUser(sm)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    // 이 인터페이스는 인자를 아래와 같이 받게하는 인터페이스이다.
    (a: number, b: number): number
}

var sum: SumFunction
sum = function(a, b) {
    return a + b
}

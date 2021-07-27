interface User {
    age: number;
    name: string;
}

// 0. 변수에 인터페이스 활용
var minhoo: User = {
    age: 33,
    name: '민후'
}




// 1. 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const sm = {
    age: 19,
    name: 'ㅅㅁ'
}
getUser(sm)




// 2. 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    // 이 인터페이스는 인자를 아래와 같이 받게하는 인터페이스이다.
    (a: number, b: number): number
}

var sum: SumFunction
sum = function(a, b) {
    return a + b
}



// 3. 인덱싱
interface StringArray {
    [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c']
// arr[0] = 'str'
// var aa: StringArray = {name1: 'string'} <- index가 string이기에 false
// var bb: StringArray = {1: 'string'} <- index가 number이기에 true



// 4. 딕셔너리 패턴
interface StringRegexDictionary {
    // cssFile: /\.css$/,
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // css나 js 파일로 끝나는 것들
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = /abc/   <- true
// obj['jsFile'] = 'abc'    <- false

// Ts가 -> val: string으로 추정 중
Object.keys(obj).forEach((val) => {

})
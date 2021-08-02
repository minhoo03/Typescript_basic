// 타입 추론
let a

function getB(b = 10) { // b는 기본적으로 10
    let c = 'hi'
    return b + c // 결과적으로 string
}

10 + '10' // '1010'
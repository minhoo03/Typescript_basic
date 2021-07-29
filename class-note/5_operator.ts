// 유니온 타입 (하나 이상의 타입을 정할 수 있다.)
function logMessage(value: string | number) {
    console.log(value)
}

logMessage('hello')
logMessage(100)

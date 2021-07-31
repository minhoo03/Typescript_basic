// function logText(text) {
//     console.log(text)
//     return text
// }

// logText(1)
// logText('hello')
// logText(true)

function logText<T>(text: T): T {
    console.log(text)
    return text
}

// <T>에 읽은 파라미터의 타입이 들어감
logText('Hi') // logText<string>('Hi')
logText(10) // logText<number>(10)
// 0. [any]
// function logText(text) {
//     console.log(text)
//     return text
// }

// logText(1)
// logText('hello')
// logText(true)




// 1. 기존 방식 - 코드 중복
// function logText(text:string) {
//     console.log(text)
//     return text
// }

// function logNumber(text:number) {
//     console.log(text)
//     return text
// }

// <T>에 읽은 파라미터의 타입이 들어감
// logText('Hi') // logText<string>('Hi')
// logText(10) // logText<number>(10)




// 2. 유니온 선언 방식의 문제점
// function logText(text: string | number) {
//     console.log(text)
//     return text
// }

// const a = logText('a') // logText는 type이 string이 아닌 string|number 이다.
// a.split('') // error!




// 3. 제네릭의 장점과 타입 추론에서의 이점
// 기존 방식과 다르게 불필요한 코드 중복 제거
function logText<T>(text: T): T {
    console.log(text)
    return text
}

const a = logText<string>('a')
a.split('')

const b = logText<number>(10)
b.toLocaleString()

const c = logText<boolean>(true)
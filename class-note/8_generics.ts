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




// 4. 인터페이스에 제네릭을 선언하는 방법

interface Dropdown1 {
    value: string,
    selected: boolean
}

// const obj1:Dropdown1 = { value: 'hi', selected: false}
// const obj1:Dropdown1 = { value: 10, selected: false} <- Error

interface Dropdown2<T> {    
    value: T,
    selected: boolean
}

const obj2:Dropdown2<number> = { value: 10, selected: false}
const obj3:Dropdown2<string> = { value: '10', selected: false}



// 5-1. 제네릭의 타입 제한
//   <string>을 명시해줘도 함수 자체는 무슨 타입이 올지 모르니
//   length를 사용할 수 없다. 그래서 배열을 이용
function logTextLength1<T>(text: T[]): T[] {
    console.log(text.length)
    text.forEach(text => {
        console.log(text)
    })
    return text
}

logTextLength1<string>(['hi'])

// 5-2. 제네릭 타입 제한 - 정의된 타입 이용하기
interface LengthType {
    length: number
}
// 인터페이스 상속 받음
function logTextLength2<T extends LengthType>(text: T): T {
    text.length
    return text
}

logTextLength2('a')
// logTextLength2(10) <- error (number은 기본적으로 length 제공하지 않음)

// 5-3. 제네릭 타입 제한 - keyof
interface ShoppingItem {
    name: string,
    price: number,
    stock: number
}

// 상속받은 interface 멤버 변수 중 한 가지가 타입이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption
}

// error
// getShoppingItemOption(10)
// getShoppingItemOption<string>('a')
getShoppingItemOption("name")
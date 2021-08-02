// 타입 호환

// *인터페이스
interface Developer {
    name: string,
    skill: string
}

interface Person {
    name: string
}

let developer: Developer
let person: Person

// 기본적으로 타입 호환은 오른쪽에 있는 타입이 더 많은 속성 및 구조적으로 더 크면 왼쪽과 호환이 됩니다. (부분집합이어야 가능)
// developer = person // developer는 skill이 필수지만 person엔 없다
person = developer // developer는 person 타입을 포함함으로 ok



// *함수
let add = function (a: number) {
    
}

let sum = function (a: number, b: number) {
    // 함수 add보다 구조가 크다
}

// add = sum <- Error
sum = add



// *제네릭
interface Empty<T> {
    
}

let empty1: Empty<string>
let empty2: Empty<number>

empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
    data: T
}

let notempty1: NotEmpty<string>
let notempty2: NotEmpty<number>

notempty1 = notempty2
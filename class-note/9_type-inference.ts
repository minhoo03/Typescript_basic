// 타입 추론
let a

function getB(b = 10) { // b는 기본적으로 10
    let c = 'hi'
    return b + c // 결과적으로 string
}

10 + '10' // '1010'



// 인터페이스와 제네릭을 이용한 타입 추론
interface Dropdown<T> {
    value: T,
    title: string
}
  // <string>을 통해 value가 string일 것을 추론
let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

let shoppingPrice: Dropdown<number> = {
    value: 1000,
    title: 'hi'
}



// 복잡한 구조에서 타입 추론
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string,
    tag: K
}
  // Dropdown의 제네릭도 string임을 추론
let detatiledItem: DetailedDropdown<string> = {
    value: 'test',
    title: 'Nice',
    description: 'desc',
    tag: 'tag123'
}




// Best Common Type
let arr1 = [1, 2, 3] // :number[]
let arr2 = [1, 2, true, 'a'] // :(number | boolean | string)[] - union
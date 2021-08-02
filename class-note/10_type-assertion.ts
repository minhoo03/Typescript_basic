// 타입 단언
// 타입 추론을 믿지 않고 내가 직접 추론
// DOM API 조작에 많이 사용

let a // any
a = 10 // any로 계속 추론
let b = a as number // b: number
let c = a // c: any
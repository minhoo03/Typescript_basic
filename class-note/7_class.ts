// [JS] 문법
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }


// [TS] 문법
class Person {
    // 변수의 접근 범위도 정할 수 있다.
    private name: string
    public age: number
    readonly log: string

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
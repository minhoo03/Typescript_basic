// 둘의 코드는 같다.
// 문법만 다르지 취향차이일 뿐
// 하지만 경우에 따라 클래스 문법에서 얻는 이점이 있기에 사용

// 프로토타입 문법
function Person(name, age) {
    this.name = name
    this.age = age
}

let minu = new Person('미누', 19)


// 클래스 문법
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.')
        // Person 내부에 name과 age라는 키 생성 후 값 대입
        this.name = name
        this.age = age
    }
}

let minhoo = new Person('민후', 19) // 인스턴스 생성시 constructor 로직 실행
console.log(minhoo.name)
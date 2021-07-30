// ES2015 (ES6)

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
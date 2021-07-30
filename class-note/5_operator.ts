// 0. 유니온 타입 (하나 이상의 타입을 정할 수 있다.)
function logMessage(value: string | number) {
    // 타입 가드: 아래처럼 특정 타입으로 범위를 좁혀나가는 과정
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    // any와 다르게 각 타입에 맞는 메소드 추천
    if (typeof value === 'string') {
        value.toString()
    }

    throw new TypeError('value must be string or number')
}

logMessage('hello')
logMessage(100)



// 특징: 모든 타입의 공통적인 멤버에만 접근 가능
interface Developer {
    name: string,
    skill: string
}

interface Person {
    name: string,
    age: number
}

function askSomeone1(someone: Developer | Person) {
    // someone.name
}



// 1. 인터섹션 타입
// 유니온과 다르게 두 타입을 모두 적용해야 하기에 모든 멤버 변수 사용 가능
function askSomeone2(someone: Developer & Person) {
    // someone.name
    // someone.age
    // someone.skill
}



// 2. 두 타입의 차이점
    // 둘 중 한 타입의 모습만 갖추면 된다.
askSomeone1({ name: '디벨로퍼', skill: '웹 개발'})
askSomeone1({ name: '미누', age: 19})
    // 모든 타입이 적용되어야 함
askSomeone2({ name: '민후', skill: '웹 개발', age: 19})
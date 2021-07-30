// 유니온 타입 (하나 이상의 타입을 정할 수 있다.)
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

function askSomeone(someone: Developer | Person) {
    someone.name
}
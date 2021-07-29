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

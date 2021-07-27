interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var minhoo: User = {
    age: 33,
    name: '민후'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const sm = {
    age: 19,
    name: 'ㅅㅁ'
}
getUser(sm)
// 타입 가드전 예제

interface Developer {
    name: string,
    skill: string
}

interface Person {
    name: string,
    age: number
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'IronMan'}
}

let tony = introduce()

// 타입들의 공통 속성만 접근 가능
// console.log(tony.skill) <- Error!
        // ▼
// 타입 단언을 이용해 속성 접근 (비추천)
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill
    console.log(skill)
} else if ((tony as Person).age) {
    let age = (tony as Person).age
    console.log(age)
}

// ==========================

// 타입 가드 사용
// *is : 인자로 넘긴 값이 'params is Type' 아닌지 확인 (true / false)
function isDeveloper(target: Developer | Person): target is Developer {
    // params를 Developer로 단언 후 skill이 있는지 없는지 확인
    // return 값을 통해 true / false
    return (target as Developer).skill !== undefined
}

if (isDeveloper(tony)) {
    console.log(tony.skill)
} else {
    console.log(tony.age)
} 
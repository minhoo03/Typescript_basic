// 타입 단언
// 타입 추론을 믿지 않고 내가 직접 추론

let a // a: any
a = 10 // a: any로 계속 추론
let b = a as number // b: number
let c = a // c: any



// DOM API 조작에 많이 사용 (HTML 태그 정보 조작 API)
let div = document.querySelector('div') as HTMLDivElement // div는 Element | null
    // if(div) { // null인 경우를 방지하려고
    //     div.innerHTML
    // }
div.innerHTML // null이 나올 수 없게 타입 단언

// *null인 경우를 배제했는데 개발자의 실수로 null이 할당되면
// 런타임 에러가 나오므로 타입 단언보단 각각의 케이스에서 예외 처리하는 것이 좋다.
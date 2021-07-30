// 숫자형
enum Shoes {
    // 별도의 값을 정하지 않으면 숫자형으로 취급한다
    Nike, // 0
    Adidas, // 1
    Fuma, // 2
}

enum Test {
    T1 = 10,
    T2, // 11
    T3 // 12
}

let myShoes = Shoes.Nike
console.log(myShoes) // 0


// 문자형
enum Brand {
    FCMM = 'FCMM',
    FLION = 'FLION'
}

console.log(Brand.FCMM)


// 활용 사례
enum Answer {
    Yes = 'Y',
    No = 'N'
}

// function askQuestion(answer: string) {
//     if (answer === 'yes') {
//         console.log('정답입니다')
//     }

//     if (answer === 'no') {
//         console.log('오답입니다')
//     }
// }

// askQuestion('예스')
// askQuestion('y')
// askQuestion('yes')

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다')
    }

    if (answer === Answer.No) {
        console.log('오답입니다')
    }
}

askQuestion(Answer.Yes) // enum에서 제공되는 값만 넘길 수 있다.
// askQuestion('Yes') <- Error!
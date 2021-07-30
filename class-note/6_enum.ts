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
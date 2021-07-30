let user = { name: '민후', age: 19 }

let admin = {}

console.log(admin) // {}

admin = admin.__proto__ = user

console.log(admin) // admin.proto == user

admin.role = 'admin'

console.log(admin) // role: 'admin', proto { user }

// 활용 사례
// let arr = []의 경우
// Object.prototype을 상속 받는다
// 최상위 Object 객체의 메소드 사용 가능
// *admin의 경우 그에 맞는 메소드 사용 가능
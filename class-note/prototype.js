let user = { name: '민후', age: 19 }

let admin = {}

console.log(admin) // {}

admin = admin.__proto__ = user

console.log(admin) // admin.proto == user

admin.role = 'admin'

console.log(admin) // role: 'admin', proto { user }
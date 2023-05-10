//v1.0

// const login = (user, password) => {
//     if(!password) return 'No se ha proporcionado password'
//     if(!user) return 'No se ha proporcionado usuario'
//     if(password !== '123') return 'Contraseña Incorrecta'
//     if(user !== 'coderUser') return 'Credenciales Incorrectas'
//     return 'Logueado'
// }

//v2.0()

const login = (user, password) => 
    (!password && 'No se ha proporcionado password') ||
    (!user && 'No se ha proporcionado usuario') ||
    (password !== '123' && 'Contraseña Incorrecta') ||
    (user !== 'coderUser' && 'Credenciales Incorrectas') ||
    'Logueado'

//Escenarios
let testPassed = 0
let testTotal = 5

//Test 1
console.log('Test 1 : Si de pasa un password vacio la función debe consologuear "No se ha proporcionado password"')
const resultTest1 = login('usuario', '')

testPassed += (login('usuario', '') === 'No se ha proporcionado password') ? 1 : 0;
console.log(`Test 1 : ${login('usuario', '') === 'No se ha proporcionado password' ? 'Passed' : 'Failed'}`);

//Test 2
console.log('Test 2 : Si de pasa un usuario vacio la función debe consologuear "No se ha proporcionado usuario"')
const resultTest2 = login('', 'password')

testPassed += (login('', 'password') === 'No se ha proporcionado usuario') ? 1 : 0;
console.log(`Test 2 : ${login('', 'password') === 'No se ha proporcionado usuario' ? 'Passed' : 'Failed'}`);

//Test 3
console.log('Test 3 : Si de pasa un password incorrecto la función debe consologuear "Contraseña Incorrecta"')
const resultTest3 = login('usuario', 'password')

testPassed += (login('usuario', 'password') === 'Contraseña Incorrecta') ? 1 : 0;
console.log(`Test 3 : ${login('usuario', 'password') === 'Contraseña Incorrecta' ? 'Passed' : 'Failed'}`);

//Test 4
console.log('Test 4 : Si de pasa un usuario incorrecto la función debe consologuear "Credenciales Incorrectas"')
const resultTest4 = login('usaurio', '123')

testPassed += (login('usaurio', '123') === 'Credenciales Incorrectas') ? 1 : 0;
console.log(`Test 4 : ${login('usaurio', '123') === 'Credenciales Incorrectas' ? 'Passed' : 'Failed'}`);

//Test 5
console.log('Test 5 : Si el usuario y la contraseña coinciden la función debe consologuear "Logueado"')
const resultTest5 = login('coderUser', '123')

testPassed += (login('coderUser', '123') === 'Logueado') ? 1 : 0;
console.log(`Test 5 : ${login('coderUser', '123') === 'Logueado' ? 'Passed' : 'Failed'}`);

console.log(`Test Passed : ${testPassed}/${testTotal}`)
import { handleStatus } from './utils/promise-helpers.js'

document
    .querySelector('#myButton')
    .onclick = () => 
        fetch('http://localhost:3000/notas')
            .then(handleStatus) //versao simplificade de .then(res => handleStatus(res))
            .then(notas => console.log(notas))
            .catch(console.log); // versao simplificada de .catch(err => console.log(err))


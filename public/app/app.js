import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUtil, debounceTime, pipe, partialize } from './utils/operators.js';

//Para executar esse código é necessário que o pipe seja feito de forma invertida,
// devido ao callback das funçoes

// const operations = pipe(
//     partialize(takeUtil, 3),
//     partialize(debounceTime, 500)
// );

// const action = operations(() =>
//     service
//         .sumItems('2143')
//         .then(notas => console.log(notas))
//         .catch(log) // versao simplificada de .catch(err => console.log(err))
// );

const action = debounceTime(500,
    takeUtil(3, () =>
        service
            .sumItems('2143')
            .then(notas => console.log(notas))
            .catch(log) // versao simplificada de .catch(err => console.log(err))
    )
);


document
    .querySelector('#myButton')
    .onclick = action; // () => action();


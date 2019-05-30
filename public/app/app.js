import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js'
import { takeUtil, debounceTime } from './utils/operators.js'

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


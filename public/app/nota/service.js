import { handleStatus } from '../utils/promise-helpers.js';
import {partialize, compose, pipe } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);


export const notasService = {

    listAll() {
        return fetch(API)
            .then(handleStatus)
            .catch( err => {
                console.log(err);
                return Promise.reject('Não foi possível obter as notas fiscais');
            });
    },

    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        // const sumItems = compose(sumItemsValue, filterItems, getItemsFromNotas);
        const sumItems = pipe( getItemsFromNotas, filterItems, sumItemsValue);
       
        return this.listAll()
             .then(sumItems)   // versao encadeada .then(notas => sumItemsValue(filterItems(getItemsFromNotas(notas))));
             .catch(err => {    // versão com o parametro .then(notas => sumItems(notas))
                console.log(err);
                return Promise.reject('Houve um erro inexperado')
             });               
    }

};
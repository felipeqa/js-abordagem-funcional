export const partialize = (fn, ...args) => {
    console.log(...args, 'ARGS');
    
    console.log(fn.bind(null, ...args), 'Partialize');
    
    return fn.bind(null, ...args);
};

export const compose = (...fns) =>  value => {
    
    return    fns.reduceRight((previousValue, fn) => {
        console.log(value, "VALORES");
        console.log(fn, "FUNCAO");
        console.log(previousValue, 'PREVIOUS VALUE');
        
        return fn(previousValue)
    }, value);
}

export const pipe = (...fns) => value => fns.reduce((previousValue, fn) => fn(previousValue), value);

// const sumItems = compose(sumItems, filterItems, getItemsFromNotas);
// sumItems(notas);

/*
    Algoritmo:
    na arquivo app.js chama a função do serviço

    service.sumItems('2143')

    no arquivo service.js
    faz o partialize da função filterItemsByCode
    faz o compose das funçoes

    função compose:
        recebe o reterno da promisse no caso (notas e executa na primeira função),
        na segunda função, como já foi executado o partial, 
        ela apenas recebe o retorno da primeira função e o code já foi feito o bind
        e na terceira função é executado o reduce com o retorno


*/

export const takeUtil = (times, fn) => () => times-- > 0 && fn();

export const debounceTime = (milliseconds, fn) => {
    let timer = 0;

    return () => {

        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
        
    }

};
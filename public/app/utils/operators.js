export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) =>  value => {
    
    return    fns.reduceRight((previousValue, fn) => {
        console.log(value, "VALORES NO REDUCE");
        console.log(fn, "FUNCAO");
        console.log(previousValue, 'PREVIOUS VALUE');
        
        return fn(previousValue)
    }, value);
}

// const sumItems = compose(sumItems, filterItems, getItemsFromNotas);
// sumItems(notas);
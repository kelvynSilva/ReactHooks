import React from "react";

export const data = {
    number: 123,
    text: 'Context API'
}

export const data2 = {
    nome: 'kelvyn',
    idade: 28
}

const DataContext = React.createContext(null);

export default DataContext
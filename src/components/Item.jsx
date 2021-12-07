import React from 'react';

function Item () {
    return new Promise((resolve, reject) => {
        const object =[
            {
                id: "1",
                name: "Notebook Asus",
                img: "https://http2.mlstatic.com/D_NQ_NP_691014-MLA47861577646_102021-O.webp",
                price: "$100.000",
                description: "Notebook potente",
                stock: "Cantidad disponible en stock: 4",
            },
            {
                id: "2",
                name: "Notebook Lenovo",
                img: "https://http2.mlstatic.com/D_NQ_NP_747566-MLA45104639828_032021-O.webp",
                price: "$135.000",
                description: "Notebook potente",
                stock: "Cantidad disponible en stock: 8",
            },
            {
                id: "3",
                name: "Notebook HP",
                img: "https://http2.mlstatic.com/D_NQ_NP_959745-MLA47932240484_102021-O.webp",
                price: "$95.000",
                description: "Notebook potente",
                stock: "Cantidad disponible en stock: 3",
            },
        ]
        setTimeout(() => resolve(object), 2000)
    }
        
    )
}

export default Item



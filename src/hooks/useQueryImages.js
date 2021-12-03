import React from 'react';

export const useQueryImages = (queryData, productsDB, category = 'all') => {
        let productsData = [];
        queryData.forEach((edge) => {
                productsDB.forEach((product) => {
                    if (product.name === edge.node.name) {
                        product.image = edge.node.childImageSharp;
                        product.count = 1;
                    }

                    category === product.category && !productsData.includes(product) && productsData.push(product);
                    category === product.bestseller && !productsData.includes(product) && productsData.push(product);

                    category === 'all' && !productsData.includes(product) && productsData.push(product);


                    //TODO uwaga !carousel
                })
            }
        )
        return {
            productsData
        }
    }
;


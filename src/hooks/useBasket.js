import React, {useState} from 'react';

const useBasket = () => {
    const [basket, setBasket] = useState([]);
    const [basketPrice, setBasketPrice] = useState(0);
    const addToBasket = (productItem) => {
        let isInBasket = false;
        basket.forEach((element, index) => {

            if (element.name === productItem.name) {
                setBasket([
                    ...basket.slice(0, index),
                    {
                        ...basket[index],
                        count: element.count ? element.count + 1 : 1,
                    },
                    ...basket.slice(index + 1)
                ])

                isInBasket = true;
            }

        })
        !isInBasket && setBasket([...basket, productItem]);
        setBasketPrice(basketPrice + Number(productItem.price));

    }

    const removeFromBasket = (product) => {
        basket.forEach((element, index) => {
            if (element.name === product.name) {
                if (product.count > 1) {
                    setBasket([
                        ...basket.slice(0, index),
                        {
                            ...basket[index],
                            count: element.count - 1,
                        },
                        ...basket.slice(index + 1)
                    ])
                    setBasketPrice(basketPrice - Number(product.price));

                } else {
                    setBasket([
                        ...basket.slice(0, index),
                        ...basket.slice(index + 1)
                    ])
                    setBasketPrice(basketPrice - Number(product.price));
                }


            }

        })
    }
    const clearBasket = () => {
        setBasket([]);
        setBasketPrice(0);

    }
    return {
        basket,
        addToBasket,
        basketPrice,
        removeFromBasket,
        clearBasket
    }

};

export default useBasket;

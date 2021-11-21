import React, {useContext, useState} from "react";
import {MdAddShoppingCart} from 'react-icons/md'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {AppContext} from "../data/AppContext";

const Product3 = ({pageContext: {product}}) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const image = getImage(product.image)
    const {addToBasket} = useContext(AppContext) || {};
    const {setOpen} = useContext(AppContext) || {};

    return (
        <div className="md:flex items-start justify-center py-8 xl:px-20 md:px-3 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <GatsbyImage className={"w-96 h-96"} image={image}/>

            </div>
            <div className="md:hidden">

                <GatsbyImage className={"w-full"} image={image}/>

            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{product.company}</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {product.nameItem}
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Price</p>
                    <div className="flex items-center justify-center">
                        <b className="text-sm leading-none text-gray-600 mr-3">{product.price} $</b>


                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Colour</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mr-3">{product.color}</p>


                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Category</p>

                    <div className="flex items-center justify-center">

                        <p className="text-sm leading-none text-gray-600 mr-3">{product.category}</p>


                    </div>
                </div>
                <button
                    className="
						text-base
						rounded-md
						flex
						items-center
						justify-center
						text-white
						bg-indigo-600
						hover:bg-indigo-700
						w-full
						py-4
						font-medium
						border-transparent
						shadow-sm
						text-base
					"

                    onClick={(e) => {
                        e.preventDefault();
                        addToBasket(product);
                        setOpen(true);
                    }}
                >
                    <MdAddShoppingCart className={"mr-3 text-2xl"}/>
                    add to basket {" "}
                </button>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit sagittis metus tincidunt eget. Morbi nec magna a
                        lorem porta volutpat. Mauris vehicula feugiat tellus in viverra. Proin sagittis f vel eros
                        molestie laoreet egesta, risus turpis hendrerit purus, ut auctor ipsum tortor ac augue. </p>
                    <p className="text-base leading-4 mt-7 text-gray-600">Product Code: {product.id}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Producent Name: {product.name}</p>

                </div>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)}
                             className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6"
                                     viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div
                            className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")}
                            id="sect">
                            You will be responsible for paying for your own shipping costs for returning your item.
                            Shipping costs are nonrefundable
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)}
                             className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Contact us</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10"
                                     height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div
                            className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")}
                            id="sect">
                            If you have any questions on how to return your item to us, contact us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product3;

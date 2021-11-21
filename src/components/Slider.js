import './carusel.css';
import React, {useState} from 'react';
import tw from 'tailwind-styled-components';
import {getImage} from "gatsby-plugin-image";
import {convertToBgImage} from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import {Link} from "gatsby"

export const Slider = ({data}) => {
    const [state, setState] = useState(data[0] || {});
    let image = getImage(state.image)
    let bgImage = convertToBgImage(image)
    console.log(state);

    const IndicatorsArray = data.map((e) => (
            <IndicatorItem
                onClick={() => setState(e)}
                className={`${e.name === state?.name && 'text-gray-900'}`}>•
            </IndicatorItem>
        )
    )

    return (
        <SliderWrapper>
            <Input type="radio"
                   id={state?.name}
                   name="carousel"
                   aria-hidden="true"
                   hidden="true"
                   checked={true}/>

            <Slide Tag="section"{...bgImage}>

                <SlideDescriptionWrapper>
                    <SlideDescription>
                        {state.nameItem}
                    </SlideDescription>
                    <SlideLink to={`product/${state.link}`}>
                        view product
                    </SlideLink>
                </SlideDescriptionWrapper>
                <IndicatorsWrapper>
                    {IndicatorsArray}
                </IndicatorsWrapper>
            </Slide>


        </SliderWrapper>
    );
};

const SliderWrapper = tw.div`carousel relative container mx-auto max-w-screen-2xl carousel-inner relative overflow-hidden w-full`
const Input = tw.input`carousel-open`
const Slide = tw(BackgroundImage)` carousel-item absolute opacity-0 h-96 block w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right container mx-auto`
const SlideDescriptionWrapper = tw.div`container mx-auto flex flex-col w-full lg:w-1/3 md:ml-20 items-start md:items-start px-6 tracking-wide`
const SlideDescription = tw.p`text-black bold text-4xl font-medium my-4`
const SlideLink = tw(Link)`text-2xl font-normal inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black`
const IndicatorItem = tw.div`carousel-bullet cursor-pointer block text-5xl text-gray-400 hover:text-gray-900`
const IndicatorsWrapper = tw.div`carousel-indicators`


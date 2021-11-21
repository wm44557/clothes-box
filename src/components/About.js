import React from 'react';
import tw from 'tailwind-styled-components'
import {Link} from "gatsby"

const About = () => {
    return (
        <AboutWrapper>
            <Title href="#">
                About
            </Title>
            <Description>The best streetwear shop in Poland.
                by:
                <StyledLink to={"/"}>
                    Clothes Box
                </StyledLink>
            </Description>
            <Description className="mb-8">We sell only the 16 best selected products. The offer changes at the beginning
                of each month.
            </Description>
        </AboutWrapper>
    );
};

const AboutWrapper = tw.section`bg-white py-8 container py-8 px-6 mx-auto`
const Title = tw.a`uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8`
const Description = tw.p`mt-8 mb-8`
const StyledLink = tw(Link)`text-gray-800 underline hover:text-gray-900`

export default About;

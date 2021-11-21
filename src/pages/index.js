import React, {useContext} from 'react';
import {Slider} from "../components/Slider";
import ProductsGrid from "../components/ProductsGrid";
import {graphql} from "gatsby";
import {products, carousel} from "../data/data";
import {useQueryImages} from "../hooks/useQueryImages";
import {AppContext} from "../data/AppContext";

const IndexPage = ({data: {gridItems, sliderItems}}) => {
    const {category} = useContext(AppContext) || {};
    const {edges: productsEdges} = gridItems;
    const {edges: sliderEdges} = sliderItems;
    const {productsData: gridData} = useQueryImages(productsEdges, products, category);
    const {productsData: sliderData} = useQueryImages(sliderEdges, carousel);
    console.log(gridData);

    return (
        <>
            <Slider data={sliderData}/>
            <ProductsGrid products={gridData}/>
        </>
    )
}

export const pageQuery = graphql`
    query HomePageQuery{
        gridItems:allFile {
            edges {
                node {
                    name
                    childImageSharp {
                        id
                        gatsbyImageData(
                            width: 350
                            height: 350
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
        sliderItems:allFile {
            edges {
                node {
                    name
                    childImageSharp {
                        id
                        gatsbyImageData(
                            width: 1000
                            height: 1200
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    },
`;

export default IndexPage

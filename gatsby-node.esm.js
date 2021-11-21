import path, {resolve} from 'path';
import {useQueryImages} from "./src/hooks/useQueryImages";
import {products} from "./src/data/data";

async function turnPizzasIntoPages({graphql, actions}) {
    // 1. Get a template for this page
    const pizzaTemplate = path.resolve('./src/templates/ProductTemplate.js');
    // 2. Query all pizzas

    const {data: {gridItems}} = await graphql(`
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
        }
    `);
    const {edges: productsEdges} = gridItems;
    const {productsData: gridData} = useQueryImages(productsEdges, products);

    // 3. Loop over each pizza and create a page for that pizza
    gridData.forEach((product) => {
        console.log(product);
        actions.createPage({
            // What is the URL for this new page??
            path: `product/${product.name}`,
            component: pizzaTemplate,
            context: {
                product: product
            },
        });
    });
}

export async function createPages(params) {
    // Create pages dynamically
    // Wait for all promises to be resolved before finishing this function
    await Promise.all([
        turnPizzasIntoPages(params),
    ]);
    // 1. Pizzas
    // 2. Toppings
    // 3. Slicemasters
}

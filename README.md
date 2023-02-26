## Overview

`fake-store` simulates a simple e-commerce UI, consisted of a home page, detail page and cart page, using data from [`FakeStoreAPI`](https://fakestoreapi.com).

- Home page: consists of products, which clickable on the card to go to detail page, or on the button to add items to cart.

- Detail page: consists of product chosen from home page, which clickable on the button to add items to cart.

- Cart page: consists of products inside the cart. Each product has their own quantity, which can be manipulated by add / subtract button. This function is enabled by state management via application of `useContext`

Overall, `fake-store` purely uses `TailwindCSS` for styling purposes.

## Tech Stack

- Javascript

- React

- NextJS

- TailwindCSS

## Deployment

`fake-store` deployed via vercel [here](https://fake-store-dbpx.vercel.app/)

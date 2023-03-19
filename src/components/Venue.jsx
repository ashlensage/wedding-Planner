import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function Venue() {
  const user = useSelector((store) => store.user);
  const venueReducer = useSelector(
    (store) => store.getReducer.getVenuesReducer
  );


  const history = useHistory();
  const dispatch = useDispatch();

  const products = [
    {
      id: 401,
      name: 'venue',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
      id: 402,
      name: 'venue',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    },
    {
      id: 403,
      name: 'venue',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    },
    {
      id: 404,
      name: 'venue',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    },
    {
      id: 405,
      name: 'venue',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    },
    {
      id: 406,
      name: 'venue',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    },
  ]


  function handleClick() {
    history.push("/flowers");
  }


  function makeSelection(product) {
    dispatch({
      type: "SET_VENUES",
      payload: product,
    });
  }


  return (
    <div className="container">
      <h2 className="text-center">Venues</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                onClick={() => makeSelection(product)}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                {product.id === venueReducer.id && <p>Selected!</p>}
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button 
        className="btn"
        onClick={handleClick}
      >
        Flower Arrangements
      </button>
    </div>
  );
}

export default Venue;

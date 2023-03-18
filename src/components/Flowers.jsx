import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function Flowers() {
  const user = useSelector((store) => store.user);
  const flowersReducer = useSelector(
    (store) => store.getReducer.getFlowersReducer
  );

  const history = useHistory();
  const dispatch = useDispatch();

    const products = [
    {
      id: 101,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 102,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 103,
      name: 'Focus Paper Refill',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 104,
      name: 'Machined Mechanical Pencil',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 105,
      name: 'Focus Paper Refill',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 106,
      name: 'Machined Mechanical Pencil',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ];


  function handleClick() {
    history.push("/hair");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_FLOWERS",
      payload: product,
    });
  }



  return (
    <div className="container">
      <h2 className="text-center">Flower Arrangements</h2>
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
                {/* Condtionally recnder selected item */}
                {product.id === flowersReducer.id && <p>Selected!</p>}
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>
        Hair Styles
      </button>
    </div>
  );
}

export default Flowers;

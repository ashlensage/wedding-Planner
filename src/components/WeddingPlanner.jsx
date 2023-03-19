import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function WeddingPlanner() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const products = [
    {
      id: 1,
      name: 'Color/Themes',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114604/wedding-planner/color-themes/color-theme/blue-pink-colors-gigapixel-standard-scale-4_00x_qclrtx.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      onClick: '/color-themes',
    },
    {
      id: 2,
      name: 'Venues',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      onClick: '/venues',
    },
    {
      id: 3,
      name: 'Flower Arrangements',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168750/wedding-planner/flowers/flowers/cool-toned-blush-gigapixel-hq-scale-6_00x_xa2wqt.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      onClick: '/flowers',
    },
    {
      id: 4,
      name: 'Hair Styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176112/wedding-planner/hair%20styles/hairstyles/loose-curl-bun-gigapixel-standard-scale-6_00x_sghlsq.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      onClick: '/hair',
    },
    {
      id: 5,
      name: 'Makeup Looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190556/wedding-planner/makeup%20looks/makeup/gemstones-hr-gigapixel-hq-scale-4_00x_zm1ki4.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      onClick: '/makeup',
    },
    {
      id: 6,
      name: 'Wedding Dresses',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487596/wedding-planner/wedding-dresses/silk-ivory-bow-back_uhcvws.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      onClick: '/wedding-dresses',
    },
  ]
  

  function handleClick() {
    history.push("/color-themes");
  }

const productsImageClick = (product) => {
  console.log('productsImageClick, product', product);
};

  return (
    <div className="container">
      <h2 className="text">Wedding Planner</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <button onClick={() => productsImageClick(product)} key={product.id} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    onClick={() => history.push(product.onClick)}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <button 
        className="btn"
        onClick={handleClick}
      >
        Color/Themes
      </button>
    </div>
  );
}
export default WeddingPlanner;

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function WeddingDresses() {
  const user = useSelector((store) => store.user);

  const history = useHistory();
  const dispatch = useDispatch();

    const weddingDressesReducer = useSelector(
      (store) => store.getReducer.getWeddingDressesReducer
    );


  const products = [
    {
      id: 501,
      name: 'V-neck',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678488233/wedding-planner/wedding-dresses/v-neck-gown_cpvlgg.jpg',
    },
    {
      id: 502,
      name: 'Sheer ballgown',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487632/wedding-planner/wedding-dresses/ballgown-wedding-dress_dhjdjo.jpg',
    },
    {
      id: 503,
      name: 'Sheer princess dress',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487628/wedding-planner/wedding-dresses/drop-shoulder-gown_it5n4v.jpg',
    },
    {
      id: 504,
      name: 'Lace drop shoulder',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487636/wedding-planner/wedding-dresses/sheer-layered-lace-top_exp6i2.jpg',
    },
    {
      id: 505,
      name: 'Shimmering pearls',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678488232/wedding-planner/wedding-dresses/wedding-dress-shimmering-pearls_ek7sct.jpg',
    },
    {
      id: 506,
      name: 'Ruffle V neckline ballgown',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487580/wedding-planner/wedding-dresses/beading-details-bottom-ruffle_mirdkq.jpg',
    },
    {
      id: 507,
      name: 'Bow shoulders',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487591/wedding-planner/wedding-dresses/white-bow-shoulders_skt24d.jpg',
    },
    {
      id: 508,
      name: 'Sheer flowy lace',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487585/wedding-planner/wedding-dresses/shimmer_enfbn3.jpg',
    },
    {
      id: 509,
      name: 'Mermaid lace flowers',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487611/wedding-planner/wedding-dresses/mermaid-lace-flowers_q9lmht.jpg',
    },
    {
      id: 510,
      name: 'Mermaid lacey',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487617/wedding-planner/wedding-dresses/mermaid-lace-detail_dxhcsj.jpg',
    },
    {
      id: 511,
      name: 'Silk bow back',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487596/wedding-planner/wedding-dresses/silk-ivory-bow-back_uhcvws.jpg',
    },
    {
      id: 512,
      name: 'Ruffled V-neck ballgown',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487577/wedding-planner/wedding-dresses/rooftop-ruffles_gcci5y.jpg',
    },
    {
      id: 513,
      name: 'Flower corset',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487577/wedding-planner/wedding-dresses/off-shoulder-tool_ykwfs0.jpg',
    },
    {
      id: 514,
      name: 'Removable train',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487620/wedding-planner/wedding-dresses/removable-train_qr236e.jpg',
    },
    {
      id: 515,
      name: 'Back cut out',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487573/wedding-planner/wedding-dresses/open-back-lace-side-cut_mtn5bf.jpg',
    },
    {
      id: 516,
      name: 'Long sleeve',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487621/wedding-planner/wedding-dresses/lace-long-sleeve_iragoc.jpg',
    },

  ]


  function handleClick() {
    history.push("/final-page");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_WEDDING_DRESS",
      payload: product,
    });
  }


  return (
    <div className="container">
      <h2 className="text-center">Wedding Dresses</h2>
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
                {product.id === weddingDressesReducer.id && <p>Selected!</p>}
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className='flex justify-between'>
        <button 
        className="btn"
        onClick={handleClick}
      >
        Final Page
      </button>
      </div>
    </div>
  );
}

export default WeddingDresses;

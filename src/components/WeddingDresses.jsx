import React from 'react';
import {useSelector} from 'react-redux';
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
  const products = [
    {
      id: 1,
      name: 'Sheer ballgown ',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487632/wedding-planner/wedding-dresses/ballgown-wedding-dress_dhjdjo.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Removable train',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487620/wedding-planner/wedding-dresses/removable-train_qr236e.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Shimmering pearls',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678488232/wedding-planner/wedding-dresses/wedding-dress-shimmering-pearls_ek7sct.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Sheer flowy lace',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487585/wedding-planner/wedding-dresses/shimmer_enfbn3.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Ruffle V neckline ballgown',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487580/wedding-planner/wedding-dresses/beading-details-bottom-ruffle_mirdkq.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 6,
      name: 'Mermaid lace flowers',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487611/wedding-planner/wedding-dresses/mermaid-lace-flowers_q9lmht.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'V neck',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678488233/wedding-planner/wedding-dresses/v-neck-gown_cpvlgg.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 8,
      name: 'Lace drop shoulder',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487636/wedding-planner/wedding-dresses/sheer-layered-lace-top_exp6i2.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 9,
      name: 'Long sleeve',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487621/wedding-planner/wedding-dresses/lace-long-sleeve_iragoc.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 10,
      name: 'Bow shoulders',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487591/wedding-planner/wedding-dresses/white-bow-shoulders_skt24d.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 11,
      name: 'Silk bow back',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487596/wedding-planner/wedding-dresses/silk-ivory-bow-back_uhcvws.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 12,
      name: 'Mermaid lacey',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487617/wedding-planner/wedding-dresses/mermaid-lace-detail_dxhcsj.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 13,
      name: 'Flower corset',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487577/wedding-planner/wedding-dresses/off-shoulder-tool_ykwfs0.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 14,
      name: 'Back cut out',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487573/wedding-planner/wedding-dresses/open-back-lace-side-cut_mtn5bf.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 15,
      name: '',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487628/wedding-planner/wedding-dresses/drop-shoulder-gown_it5n4v.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 16,
      name: '',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1678487577/wedding-planner/wedding-dresses/rooftop-ruffles_gcci5y.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]


  function handleClick() {
    history.push("/final-page");
  }

  return (
    <div className="container">
      <h2 className="text-center">Wedding Dresses</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <button 
        className="btn"
        onClick={handleClick}
      >
        Final Page
      </button>
    </div>
  );
}

export default WeddingDresses;

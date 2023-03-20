import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function Hair() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const colorThemeReducer = useSelector(
    (store) => store.getReducer.getColorThemesReducer
  );
  const flowersReducer = useSelector(
    (store) => store.getReducer.getFlowersReducer
  );
  const hairReducer = useSelector(
    (store) => store.getReducer.getHairReducer
  );
  const makeupReducer = useSelector(
    (store) => store.getReducer.getMakeupReducer
  );
  const venueReducer = useSelector(
    (store) => store.getReducer.getVenuesReducer
  );
  const weddingDressesReducer = useSelector(
    (store) => store.getReducer.getWeddingDressesReducer
  );

  function selectedProducts() {
    return [
      { ...colorThemeReducer, onClick: "/color-themes" },
      { ...flowersReducer, onClick: "/flowers" },
      { ...hairReducer, onClick: "/hair" },
      { ...makeupReducer, onClick: "/makeup" },
      { ...venueReducer, onClick: "/venues" },
      { ...weddingDressesReducer, onClick: "/wedding-dresses" },
    ];
  }


  const products = [
    {
      id: 201,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176068/wedding-planner/hair%20styles/hairstyles/straight-end-curls-gigapixel-hq-scale-6_00x_ra4r5g.jpg',
    },
    {
      id: 202,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176127/wedding-planner/hair%20styles/hairstyles/tighter-curls-gigapixel-hq-scale-6_00x_y9qras.jpg',
    },
    {
      id: 203,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176132/wedding-planner/hair%20styles/hairstyles/curls-half-up-gigapixel-standard-scale-6_00x_f858va.jpg',
    },
    {
      id: 204,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176154/wedding-planner/hair%20styles/hairstyles/hella-curls-gigapixel-standard-scale-6_00x_yqly2x.jpg',
    },
    {
      id: 205,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176151/wedding-planner/hair%20styles/hairstyles/bridal-pearl-hair-pin-gigapixel-standard-scale-6_00x_gvkmmy.jpg',
    },
    {
      id: 206,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176082/wedding-planner/hair%20styles/hairstyles/hollywood-curls-gigapixel-standard-scale-6_00x_etbmea.jpg',
    },
    {
      id: 207,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176098/wedding-planner/hair%20styles/hairstyles/half-up-braid-gigapixel-standard-scale-6_00x_zp7xqe.jpg',
    },
    {
      id: 208,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176117/wedding-planner/hair%20styles/hairstyles/twists-gigapixel-very_compressed-scale-6_00x_gu75k5.jpg',
    },
    {
      id: 209,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176071/wedding-planner/hair%20styles/hairstyles/classic-half-up-down-gigapixel-standard-scale-6_00x_vkzcor.jpg',
    },
    {
      id: 210,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176088/wedding-planner/hair%20styles/hairstyles/twist-over-flowers-gigapixel-hq-scale-6_00x_nqpbh1.jpg',
    },
    {
      id: 211,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176156/wedding-planner/hair%20styles/hairstyles/flowers-in-twist-gigapixel-standard-scale-6_00x_sbgzt3.jpg',
    },
    {
      id: 212,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176103/wedding-planner/hair%20styles/hairstyles/flower-braid-down-gigapixel-very_compressed-scale-6_00x_mnbwru.jpg',
    },
    {
      id: 213,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176143/wedding-planner/hair%20styles/hairstyles/flowers-gigapixel-standard-scale-6_00x_chkasa.jpg',
    },
    {
      id: 214,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176078/wedding-planner/hair%20styles/hairstyles/twist-curls-gigapixel-hq-scale-6_00x_bbioua.jpg',
    },
    {
      id: 215,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176157/wedding-planner/hair%20styles/hairstyles/flowers-braided-in-gigapixel-standard-scale-6_00x_lvzybw.jpg',
    },
    {
      id: 216,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176137/wedding-planner/hair%20styles/hairstyles/half-up-braids-gigapixel-standard-scale-6_00x-comp_pmf1xj.jpg',
    },
    {
      id: 217,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176129/wedding-planner/hair%20styles/hairstyles/full-braid-gigapixel-standard-scale-6_00x_tpnpyz.jpg',
    },
    {
      id: 218,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176129/wedding-planner/hair%20styles/hairstyles/orange-flower-braid-gigapixel-low_res-scale-6_00x_ebyexr.jpg',
    },
    {
      id: 219,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176106/wedding-planner/hair%20styles/hairstyles/loose-braid-flowers-gigapixel-very_compressed-scale-6_00x_o1qpzq.jpg',
    },
    {
      id: 220,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176120/wedding-planner/hair%20styles/hairstyles/low-pony-gigapixel-low_res-scale-6_00x_ncmvh5.jpg',
    },
    {
      id: 221,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176112/wedding-planner/hair%20styles/hairstyles/loose-curl-bun-gigapixel-standard-scale-6_00x_sghlsq.jpg',
    },
    {
      id: 222,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176123/wedding-planner/hair%20styles/hairstyles/purl-accents-gigapixel-standard-scale-6_00x_qk3jai.jpg',
    },
    {
      id: 223,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176103/wedding-planner/hair%20styles/hairstyles/low-bun-pearls-gigapixel-low_res-scale-6_00x_kxnkbq.jpg',
    },
    {
      id: 224,
      name: 'hair styles',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679176101/wedding-planner/hair%20styles/hairstyles/updo-high-bun-hr-ps-6x_r1swm5.jpg',
    },
  ]


  function handleClick() {
    history.push("/makeup");
  }

  function handleClickFinal() {
    history.push("/final-page");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_HAIR",
      payload: product,
    });
  }


  return (
    <div className="container">
      <h2 className="text-center">Hair Styles</h2>
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
                {product.id === hairReducer.id && <p>Selected!</p>}
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
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
          Makeup Looks
        </button>
        {selectedProducts().every(selectedProduct => selectedProduct.id) ? (
            <button className="btn" onClick={handleClickFinal}>
              Final Page
            </button>
          ) : null
        }
      </div>
    </div>
  );
}

export default Hair;

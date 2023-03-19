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
        id: 108,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168755/wedding-planner/flowers/flowers/white-tulips-gigapixel-standard-scale-6_00x_uf8fsr.jpg',
      },
      {
        id: 106,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168732/wedding-planner/flowers/flowers/white-roses-gigapixel-low_res-scale-6_00x_uwbx3q.jpg',
      },
      {
        id: 105,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168771/wedding-planner/flowers/flowers/white-orchids-gigapixel-standard-scale-6_00x_jzgxhm.jpg',
      },
      {
        id: 111,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168749/wedding-planner/flowers/flowers/prarie-roses-gigapixel-standard-scale-6_00x_lalosp.jpg',
      },

      {
        id: 101,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168797/wedding-planner/flowers/flowers/bridal-bouquet-blush-pink-and-pale-blue-gigapixel-standard-scale-6_00x_rrqkzg.jpg',
      },
      {
        id: 102,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168789/wedding-planner/flowers/flowers/dark-roses-gigapixel-standard-scale-6_00x_u4uips.jpg',
      },
      {
        id: 103,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168772/wedding-planner/flowers/flowers/roses-white-blue-gigapixel-standard-scale-6_00x_unhqi0.jpg',
      },
      {
        id: 104,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168771/wedding-planner/flowers/flowers/pink-blue-purple-gigapixel-standard-scale-6_00x_imfrl6.jpg',
      },
      {
        id: 107,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168730/wedding-planner/flowers/flowers/lavender-blue-gigapixel-standard-scale-6_00x_r5xy3p.jpg',
      },
      {
        id: 109,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168728/wedding-planner/flowers/flowers/pink-purple-gigapixel-standard-scale-6_00x_mnemyq.jpg',
      },
      {
        id: 110,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168729/wedding-planner/flowers/flowers/white-blush-gigapixel-standard-scale-6_00x_vdpb4b.jpg',
      },
      {
        id: 112,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168752/wedding-planner/flowers/flowers/white-roses-blue-accents-gigapixel-standard-scale-6_00x_vupqao.jpg',
      },
      {
        id: 113,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168795/wedding-planner/flowers/flowers/orange-spring-gigapixel-low_res-scale-6_00x_vncbh0.jpg',
      },
      {
        id: 114,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168790/wedding-planner/flowers/flowers/blush-orange-gigapixel-standard-scale-6_00x_zrp8aa.jpg',
      },
      {
        id: 115,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168792/wedding-planner/flowers/flowers/spring-gigapixel-standard-scale-6_00x_z3pvku.jpg',
      },
      {
        id: 116,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168768/wedding-planner/flowers/flowers/lavender-white-gigapixel-standard-scale-6_00x_uvdz0h.jpg',
      },
      {
        id: 117,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168786/wedding-planner/flowers/flowers/pink-white-purple-gigapixel-standard-scale-6_00x_y0hfcn.jpg',
      },
      {
        id: 118,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168770/wedding-planner/flowers/flowers/dark-blush-gigapixel-standard-scale-6_00x_xgkumx.jpg',
      },
      {
        id: 119,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168761/wedding-planner/flowers/flowers/roses-gigapixel-standard-scale-6_00x_hbb82k.jpg',
      },
      {
        id: 120,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168750/wedding-planner/flowers/flowers/cool-toned-blush-gigapixel-hq-scale-6_00x_xa2wqt.jpg',
      },
      {
        id: 121,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168749/wedding-planner/flowers/flowers/pastels-gigapixel-standard-scale-6_00x_sowxho.jpg',
      },
      {
        id: 122,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168736/wedding-planner/flowers/flowers/blush-white-gigapixel-standard-scale-6_00x_zxyigm.jpg',
      },
      {
        id: 123,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168729/wedding-planner/flowers/flowers/pink-blue-gigapixel-standard-scale-6_00x_cota9f.jpg',
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
                {/* Condtionally render selected item */}
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

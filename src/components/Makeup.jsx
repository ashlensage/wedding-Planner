import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function Makeup() {
  const user = useSelector((store) => store.user);
  const makeupReducer = useSelector(
    (store) => store.getReducer.getMakeupReducer
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const products = [
    {
      id: 301,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190528/wedding-planner/makeup%20looks/makeup/golden-godess-mr-gigapixel-standard-scale-6_00x_ekhfdp.jpg',
    },
    {
      id: 302,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190527/wedding-planner/makeup%20looks/makeup/dark-smokey-eye-hr-gigapixel-hq-scale-6_00x_fy5vr7.jpg',
    },
    {
      id: 303,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190519/wedding-planner/makeup%20looks/makeup/full-glam-mr-gigapixel-hq-scale-6_00x_jzyaxv.jpg',
    },
    {
      id: 304,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190518/wedding-planner/makeup%20looks/makeup/blushy-glam-gigapixel-low_res-scale-6_00x_crei7a.jpg',
    },
    {
      id: 305,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190514/wedding-planner/makeup%20looks/makeup/soft-pink-glam-gigapixel-hq-scale-6_00x_llwrbs.jpg',
    },
    {
      id: 306,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190512/wedding-planner/makeup%20looks/makeup/orange-pink-tones-gigapixel-hq-scale-6_00x_oqo5zd.jpg',
    },
    {
      id: 307,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190510/wedding-planner/makeup%20looks/makeup/full-full-glam-mr-gigapixel-standard-scale-6_00x_i7scas.jpg',
    },
    {
      id: 308,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190502/wedding-planner/makeup%20looks/makeup/smokey-eye-makeup-gigapixel-hq-scale-4_00x_aebfzi.jpg',
    },
    {
      id: 309,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190500/wedding-planner/makeup%20looks/makeup/sunkissed-glow-gigapixel-hq-scale-6_00x_vwoahy.jpg',
    },
    {
      id: 310,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190499/wedding-planner/makeup%20looks/makeup/neutrals-gigapixel-standard-scale-6_00x_dvltae.jpg',
    },
    {
      id: 311,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190495/wedding-planner/makeup%20looks/makeup/liner-freckles-gigapixel-hq-scale-6_00x_ednsno.jpg',
    },
    {
      id: 312,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190571/wedding-planner/makeup%20looks/makeup/shimmer-makeup-gigapixel-hq-scale-6_00x_rw8pr5.jpg',
    },
    {
      id: 313,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190568/wedding-planner/makeup%20looks/makeup/medium-glam-gigapixel-hq-scale-6_00x_tvfs2n.jpg',
    },
    {
      id: 314,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190568/wedding-planner/makeup%20looks/makeup/black-smokey-eye-gigapixel-hq-scale-4_00x_xwksed.jpg',
    },
    {
      id: 315,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190567/wedding-planner/makeup%20looks/makeup/eyeliner-hr-gigapixel-hq-scale-6_00x_etobs5.jpg',
    },
    {
      id: 316,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190562/wedding-planner/makeup%20looks/makeup/cut-crease-gigapixel-hq-scale-6_00x_bsyuuw.jpg',
    },
    {
      id: 317,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190559/wedding-planner/makeup%20looks/makeup/complete-look-mr-gigapixel-hq-scale-6_00x_zj6sbh.jpg',
    },
    {
      id: 318,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190556/wedding-planner/makeup%20looks/makeup/gemstones-hr-gigapixel-hq-scale-4_00x_zm1ki4.jpg',
    },
    {
      id: 319,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190555/wedding-planner/makeup%20looks/makeup/bold-makeup-look-hr-gigapixel-standard-scale-6_00x_hm2jum.jpg',
    },
    {
      id: 320,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190545/wedding-planner/makeup%20looks/makeup/blush-makeup-look-gigapixel-hq-scale-6_00x_i5s8iu.jpg',
    },
    {
      id: 321,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190536/wedding-planner/makeup%20looks/makeup/full-warm-glam-mr-gigapixel-hq-scale-6_00x_sgt1um.jpg',
    },
 
    {
      id: 322,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190535/wedding-planner/makeup%20looks/makeup/gold-liner-gigapixel-hq-scale-6_00x_k8lxdt.jpg',
    },
    {
      id: 323,
      name: 'makeup looks',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679190535/wedding-planner/makeup%20looks/makeup/light-glamm-gigapixel-hq-scale-6_00x_jbhg5z.jpg',
    },
  ]


  function handleClick() {
    history.push("/wedding-dresses");
  }


  function makeSelection(product) {
    dispatch({
      type: "SET_MAKEUP",
      payload: product,
    });
  }


  return (
    <div className="container">
      <h2 className="text-center">Makeup Looks</h2>
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
                {product.id === makeupReducer.id && <p>Selected!</p>}
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
        Wedding Dresses
      </button>
    </div>
  );
}

export default Makeup;

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
  const history = useHistory();
  const user = useSelector((store) => store.user);

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

  const dispatch = useDispatch();

    const products = [
      {
        id: 108,
        name: 'White Tulips',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168755/wedding-planner/flowers/flowers/white-tulips-gigapixel-standard-scale-6_00x_uf8fsr.jpg',
      },
      {
        id: 106,
        name: 'White Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168732/wedding-planner/flowers/flowers/white-roses-gigapixel-low_res-scale-6_00x_uwbx3q.jpg',
      },
      {
        id: 105,
        name: 'White Orchids',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168771/wedding-planner/flowers/flowers/white-orchids-gigapixel-standard-scale-6_00x_jzgxhm.jpg',
      },
      {
        id: 111,
        name: 'Prarie Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168749/wedding-planner/flowers/flowers/prarie-roses-gigapixel-standard-scale-6_00x_lalosp.jpg',
      },
      {
        id: 119,
        name: 'Light Toned Blush Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168761/wedding-planner/flowers/flowers/roses-gigapixel-standard-scale-6_00x_hbb82k.jpg',
      },
      {
        id: 120,
        name: 'Blush Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168750/wedding-planner/flowers/flowers/cool-toned-blush-gigapixel-hq-scale-6_00x_xa2wqt.jpg',
      },
      {
        id: 110,
        name: 'White & Pink Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168729/wedding-planner/flowers/flowers/white-blush-gigapixel-standard-scale-6_00x_vdpb4b.jpg',
      },
      {
        id: 118,
        name: 'Pink Peonies & Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168770/wedding-planner/flowers/flowers/dark-blush-gigapixel-standard-scale-6_00x_xgkumx.jpg',
      },
      {
        id: 102,
        name: 'Dark Blush',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168789/wedding-planner/flowers/flowers/dark-roses-gigapixel-standard-scale-6_00x_u4uips.jpg',
      },
      {
        id: 112,
        name: 'White Roses & Blue Gypsophila',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168752/wedding-planner/flowers/flowers/white-roses-blue-accents-gigapixel-standard-scale-6_00x_vupqao.jpg',
      },
      {
        id: 103,
        name: 'Blue & White Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168772/wedding-planner/flowers/flowers/roses-white-blue-gigapixel-standard-scale-6_00x_unhqi0.jpg',
      },
      {
        id: 101,
        name: 'Pastels',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168797/wedding-planner/flowers/flowers/bridal-bouquet-blush-pink-and-pale-blue-gigapixel-standard-scale-6_00x_rrqkzg.jpg',
      },
      {
        id: 123,
        name: 'Pink Roses & Blue Hydrangea',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168729/wedding-planner/flowers/flowers/pink-blue-gigapixel-standard-scale-6_00x_cota9f.jpg',
      },
      {
        id: 104,
        name: '',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168771/wedding-planner/flowers/flowers/pink-blue-purple-gigapixel-standard-scale-6_00x_imfrl6.jpg',
      },
      {
        id: 109,
        name: '',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168728/wedding-planner/flowers/flowers/pink-purple-gigapixel-standard-scale-6_00x_mnemyq.jpg',
      },
      {
        id: 116,
        name: 'Purple & White Roses',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168768/wedding-planner/flowers/flowers/lavender-white-gigapixel-standard-scale-6_00x_uvdz0h.jpg',
      },
      {
        id: 107,
        name: '',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168730/wedding-planner/flowers/flowers/lavender-blue-gigapixel-standard-scale-6_00x_r5xy3p.jpg',
      },
      {
        id: 115,
        name: '',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168792/wedding-planner/flowers/flowers/spring-gigapixel-standard-scale-6_00x_z3pvku.jpg',
      },
      {
        id: 114,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168790/wedding-planner/flowers/flowers/blush-orange-gigapixel-standard-scale-6_00x_zrp8aa.jpg',
      },
      {
        id: 113,
        name: 'flowers',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679168795/wedding-planner/flowers/flowers/orange-spring-gigapixel-low_res-scale-6_00x_vncbh0.jpg',
      },
      ];


  function handleClick() {
    history.push("/hair");
  }

  function handleClickFinal() {
    history.push("/final-page");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_FLOWERS",
      payload: product,
    });
  }

  console.log('selectedProducts', selectedProducts());
  console.log('selectedProducts every', 
    selectedProducts().every(selectedProduct => selectedProduct.id)
  );

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
      <div className='flex justify-between'>
        <button className="btn" onClick={handleClick}>
          Hair Styles
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

export default Flowers;

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
  const history = useHistory();
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
      id: 401,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266048/wedding-planner/venues/venues/flower-tunnel-gigapixel-standard-scale-6_00x_bbogvl.jpg',
    },
    {
      id: 402,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266087/wedding-planner/venues/venues/sparkly-wedding-gigapixel-standard-scale-6_00x_nljvji.jpg',
    },
    {
      id: 403,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266143/wedding-planner/venues/venues/wedding-in-brooklyn-gigapixel-standard-scale-6_00x_fh7mwq.jpg',
    },
    {
      id: 404,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266075/wedding-planner/venues/venues/petals-rooftop-wedding-gigapixel-standard-scale-6_00x_z2dtft.jpg',
    },
    {
      id: 405,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266081/wedding-planner/venues/venues/rooftop-lights-gigapixel-standard-scale-4_00x_nxmd1m.jpg',
    },
    {
      id: 406,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266013/wedding-planner/venues/venues/vinyard-gigapixel-standard-scale-4_00x_bdhpza.jpg',
    },
    {
      id: 407,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266142/wedding-planner/venues/venues/caliornia-vineyard-wedding-gigapixel-standard-scale-4_00x_jhwgsf.jpg',
    },
    {
      id: 408,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266124/wedding-planner/venues/venues/white-walkway-gigapixel-standard-scale-6_00x_cba4yo.jpg',
    },
    {
      id: 409,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266119/wedding-planner/venues/venues/white-blue-outdoor-gigapixel-standard-scale-6_00x_prgldp.jpg',
    },
    {
      id: 410,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266137/wedding-planner/venues/venues/forest-flower-arch-gigapixel-standard-scale-6_00x_i3arj4.jpg',
    },
    {
      id: 411,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266016/wedding-planner/venues/venues/flower-arches-gigapixel-standard-scale-6_00x_f6hyng.jpg',
    },
    {
      id: 412,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266118/wedding-planner/venues/venues/ivory-gold-ballroom-ceremony-gigapixel-standard-scale-2_00x_jqfijj.jpg',
    },
    {
      id: 413,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266092/wedding-planner/venues/venues/wedding-venue-gigapixel-standard-scale-4_00x_khxysd.jpg',
    },
    {
      id: 414,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266048/wedding-planner/venues/venues/white-roses-gigapixel-standard-scale-6_00x_u0ha6i.jpg',
    },
    {
      id: 415,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266105/wedding-planner/venues/venues/casel-monasero-gigapixel-standard-scale-6_00x_b3ve6j.jpg',
    },
    {
      id: 416,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266119/wedding-planner/venues/venues/museum-pink-gigapixel-standard-scale-6_00x_cqpz8a.jpg',
    },
    {
      id: 417,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266057/wedding-planner/venues/venues/pink-venue-gigapixel-standard-scale-4_00x_pjo3vm.jpg',
    },
    {
      id: 418,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266054/wedding-planner/venues/venues/luxury-pink-and-purple-wedding-flowers-gigapixel-standard-scale-4_00x_sccvlz.jpg',
    },
    {
      id: 419,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266052/wedding-planner/venues/venues/greenhouse-lights-gigapixel-standard-scale-4_00x_dq1gis.jpg',
    },
    {
      id: 420,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266121/wedding-planner/venues/venues/ocean-view-gigapixel-standard-scale-6_00x_a5ikxq.jpg',
    },
    {
      id: 421,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266056/wedding-planner/venues/venues/spring-wedding-gigapixel-standard-scale-6_00x_bfgthl.jpg',
    },
    {
      id: 422,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266145/wedding-planner/venues/venues/destination-wedding-gigapixel-standard-scale-4_00x_zjtc0t.jpg',
    },
    {
      id: 423,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266088/wedding-planner/venues/venues/tent-sparkles-pink-gigapixel-hq-scale-4_00x_oht7rp.jpg',
    },
    {
      id: 424,
      name: 'venue',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk8n90n3m/image/upload/v1679266017/wedding-planner/venues/venues/flower-wrapped-arches-gigapixel-standard-scale-6_00x_s637vi.jpg',
    },
  ]


  function handleClick() {
    history.push("/flowers");
  }

  function handleClickFinal() {
    history.push("/final-page");
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
          Flower Arrangements
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

export default Venue;

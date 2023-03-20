import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function ColorThemes() {
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
      id: 1,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114593/wedding-planner/color-themes/color-theme/pink-grey-gigapixel-standard-scale-4_00x_do7ljw.jpg",
    },
    {
      id: 2,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114638/wedding-planner/color-themes/color-theme/warmpalettes-gigapixel-standard-scale-6_00x_tv1fhz.jpg",
    },
    {
      id: 3,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114628/wedding-planner/color-themes/color-theme/sand-dusk-colour-palette-gigapixel-hq-scale-2_00x_ptxrrh.jpg",
    },
    {
      id: 4,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114635/wedding-planner/color-themes/color-theme/sunset-color-palette-gigapixel-low_res-scale-4_00x_tkronj.jpg",
    },
    {
      id: 5,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114611/wedding-planner/color-themes/color-theme/blush-colors-gigapixel-standard-scale-4_00x_yufcsf.jpg",
    },
    {
      id: 6,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114616/wedding-planner/color-themes/color-theme/floral-wedding-colors-gigapixel-standard-scale-4_00x_reo7r7.jpg",
    },
    {
      id: 7,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114625/wedding-planner/color-themes/color-theme/paperflora-gigapixel-standard-scale-4_00x_fcwvgf.jpg",
    },
    {
      id: 8,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114634/wedding-planner/color-themes/color-theme/color-palette-pink-orange-gigapixel-standard-scale-4_00x_lg9zld.jpg",
    },
    {
      id: 9,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114585/wedding-planner/color-themes/color-theme/orange-blue-color-palette-gigapixel-standard-scale-6_00x_cunqxv.jpg",
    },
    {
      id: 10,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114604/wedding-planner/color-themes/color-theme/blue-pink-colors-gigapixel-standard-scale-4_00x_qclrtx.jpg",
    },
    {
      id: 11,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114593/wedding-planner/color-themes/color-theme/wedding-colors-gigapixel-standard-scale-2_00x_d33ksh.jpg",
    },
    {
      id: 12,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114611/wedding-planner/color-themes/color-theme/color_palette-gigapixel-standard-scale-4_00x_gkh2za.jpg",
    },
    {
      id: 13,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114587/wedding-planner/color-themes/color-theme/freshflowersforweddings-gigapixel-low_res-scale-4_00x_dbhf41.jpg",
    },
    {
      id: 14,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114640/wedding-planner/color-themes/color-theme/blue-colors-gigapixel-standard-scale-4_00x_xj1cj3.jpg",
    },
    {
      id: 15,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114587/wedding-planner/color-themes/color-theme/wedding-color-gigapixel-standard-scale-4_00x_o69me2.jpg",
    },
    {
      id: 16,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114604/wedding-planner/color-themes/color-theme/mineralglow-gigapixel-standard-scale-4_00x_gcfqtf.jpg",
    },
    {
      id: 17,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114591/wedding-planner/color-themes/color-theme/spring-color-palette-gigapixel-low_res-scale-4_00x_lpmcgf.jpg",
    },
    {
      id: 18,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114633/wedding-planner/color-themes/color-theme/green-blue-purple-gigapixel-low_res-scale-4_00x_ibvawz.jpg",
    },
    {
      id: 19,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114632/wedding-planner/color-themes/color-theme/wedding-color-palette-gigapixel-standard-scale-2_00x_oemcbt.jpg",
    },
    {
      id: 20,
      name: "color-themes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679114641/wedding-planner/color-themes/color-theme/puple-green-blue-gigapixel-standard-scale-6_00x_lpwwer.jpg",
    },
  ];

  function handleClick() {
    history.push("/venues");
  }

  function handleClickFinal() {
    history.push("/final-page");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_COLOR_THEME",
      payload: product,
    });
  }

  return (
    <div className="container">
      <h2 className="text-center">Color/Themes</h2>
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
                {product.id === colorThemeReducer.id && <p>Selected!</p>}
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
          Venues
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

export default ColorThemes;

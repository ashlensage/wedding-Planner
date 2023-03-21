import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LAZY_LOAD_IDX } from "./consts/consts";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function Makeup() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const colorThemeReducer = useSelector(
    (store) => store.getReducer.getColorThemesReducer
  );
  const flowersReducer = useSelector(
    (store) => store.getReducer.getFlowersReducer
  );
  const hairReducer = useSelector((store) => store.getReducer.getHairReducer);
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
      id: 301,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/light-glamm-gigapixel-hq-scale-6_00x_jbhg5z",
    },
    {
      id: 302,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/blushy-glam-gigapixel-low_res-scale-6_00x_crei7a",
    },
    {
      id: 303,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/sunkissed-glow-gigapixel-hq-scale-6_00x_vwoahy",
    },
    {
      id: 304,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/medium-glam-gigapixel-hq-scale-6_00x_tvfs2n",
    },
    {
      id: 305,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/full-glam-mr-gigapixel-hq-scale-6_00x_jzyaxv",
    },
    {
      id: 306,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/orange-pink-tones-gigapixel-hq-scale-6_00x_oqo5zd",
    },
    {
      id: 307,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/full-full-glam-mr-gigapixel-standard-scale-6_00x_i7scas",
    },
    {
      id: 308,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/dark-smokey-eye-hr-gigapixel-hq-scale-6_00x_fy5vr7",
    },
    {
      id: 309,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/complete-look-mr-gigapixel-hq-scale-6_00x_zj6sbh",
    },
    {
      id: 310,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/full-warm-glam-mr-gigapixel-hq-scale-6_00x_sgt1um",
    },

    {
      id: 311,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/golden-godess-mr-gigapixel-standard-scale-6_00x_ekhfdp",
    },
    {
      id: 312,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/blush-makeup-look-gigapixel-hq-scale-6_00x_i5s8iu",
    },

    {
      id: 313,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/shimmer-makeup-gigapixel-hq-scale-6_00x_rw8pr5",
    },
    {
      id: 314,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/gemstones-hr-gigapixel-hq-scale-4_00x_zm1ki4",
    },

    {
      id: 315,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/neutrals-gigapixel-standard-scale-6_00x_dvltae",
    },
    {
      id: 316,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/liner-freckles-gigapixel-hq-scale-6_00x_ednsno",
    },
    {
      id: 317,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/gold-liner-gigapixel-hq-scale-6_00x_k8lxdt",
    },
    {
      id: 318,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/smokey-eye-makeup-gigapixel-hq-scale-4_00x_aebfzi",
    },
    {
      id: 319,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/black-smokey-eye-gigapixel-hq-scale-4_00x_xwksed",
    },
    {
      id: 320,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/bold-makeup-look-hr-gigapixel-standard-scale-6_00x_hm2jum",
    },
  ];

  function handleClick() {
    history.push("/wedding-dresses");
  }

  function handleClickFinal() {
    history.push("/final-page");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_MAKEUP",
      payload: product,
    });
  }

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Makeup Looks</h1>
      <div className="bg-white">
        <div className="py-16 sm:py-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => makeSelection(product)}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    loading={idx < LAZY_LOAD_IDX ? "eager" : "lazy"}
                    fetchpriority={idx < LAZY_LOAD_IDX ? "high" : "auto"}
                  />
                  {product.id === makeupReducer.id ? (
                    <h3 className="h-auto aspect-[10/1] w-full p-2.5 flex justify-center items-center text-md font-bold text-gray-700 bg-white/50">
                      Selected
                    </h3>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between font-bold">
        <button className="btn" onClick={handleClick}>
          Wedding Dresses
        </button>
        {selectedProducts().every((selectedProduct) => selectedProduct.id) ? (
          <button className="btn" onClick={handleClickFinal}>
            Final Page
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Makeup;

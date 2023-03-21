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

function Flowers() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

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

  const dispatch = useDispatch();

  const products = [
    {
      id: 101,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/white-tulips-gigapixel-standard-scale-6_00x_uf8fsr",
    },
    {
      id: 102,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/white-roses-gigapixel-low_res-scale-6_00x_uwbx3q",
    },
    {
      id: 103,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/white-orchids-gigapixel-standard-scale-6_00x_jzgxhm",
    },
    {
      id: 104,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/prarie-roses-gigapixel-standard-scale-6_00x_lalosp",
    },
    {
      id: 105,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/roses-gigapixel-standard-scale-6_00x_hbb82k",
    },
    {
      id: 106,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/cool-toned-blush-gigapixel-hq-scale-6_00x_xa2wqt",
    },
    {
      id: 107,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/white-blush-gigapixel-standard-scale-6_00x_vdpb4b",
    },
    {
      id: 108,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/dark-blush-gigapixel-standard-scale-6_00x_xgkumx",
    },
    {
      id: 109,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/dark-roses-gigapixel-standard-scale-6_00x_u4uips",
    },
    {
      id: 110,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/white-roses-blue-accents-gigapixel-standard-scale-6_00x_vupqao",
    },
    {
      id: 111,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/roses-white-blue-gigapixel-standard-scale-6_00x_unhqi0",
    },
    {
      id: 112,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/bridal-bouquet-blush-pink-and-pale-blue-gigapixel-standard-scale-6_00x_rrqkzg",
    },
    {
      id: 113,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/pink-blue-gigapixel-standard-scale-6_00x_cota9f",
    },
    {
      id: 114,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/pink-blue-purple-gigapixel-standard-scale-6_00x_imfrl6",
    },
    {
      id: 115,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/pink-purple-gigapixel-standard-scale-6_00x_mnemyq",
    },
    {
      id: 116,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/lavender-white-gigapixel-standard-scale-6_00x_uvdz0h",
    },
    {
      id: 117,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/lavender-blue-gigapixel-standard-scale-6_00x_r5xy3p",
    },
    {
      id: 118,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/spring-gigapixel-standard-scale-6_00x_z3pvku",
    },
    {
      id: 119,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/blush-orange-gigapixel-standard-scale-6_00x_zrp8aa",
    },
    {
      id: 120,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/orange-spring-gigapixel-low_res-scale-6_00x_vncbh0",
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

  console.log("selectedProducts", selectedProducts());
  console.log(
    "selectedProducts every",
    selectedProducts().every((selectedProduct) => selectedProduct.id)
  );

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Flower Arrangements</h1>
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
                  {product.id === flowersReducer.id ? (
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
          Hair Styles
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

export default Flowers;

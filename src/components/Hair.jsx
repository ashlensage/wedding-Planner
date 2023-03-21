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
      id: 201,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/blowout-gigapixel-standard-scale-6_00x_ybskys",
    },
    {
      id: 202,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/curls-half-up-gigapixel-standard-scale-6_00x_efsya0",
    },
    {
      id: 203,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/hella-curls-gigapixel-standard-scale-6_00x_dtjz3i",
    },
    {
      id: 204,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/bridal-pearl-hair-pin-gigapixel-standard-scale-6_00x_qfl2c3",
    },
    {
      id: 205,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/hollywood-curls-gigapixel-standard-scale-6_00x_rr3ixy",
    },
    {
      id: 206,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/half-up-braid-gigapixel-standard-scale-6_00x_y7ncds",
    },
    {
      id: 207,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/twists-gigapixel-very_compressed-scale-6_00x_p3scbg",
    },
    {
      id: 208,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/hair%20styles/hairstyles/classic-half-up-down-gigapixel-standard-scale-6_00x_vkzcor",
    },
    {
      id: 209,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/twist-over-flowers-gigapixel-hq-scale-6_00x_by3ti9",
    },
    {
      id: 210,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/flowers-in-twist-gigapixel-standard-scale-6_00x_siu7lb",
    },
    {
      id: 211,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/flower-braid-down-gigapixel-very_compressed-scale-6_00x_u19ulk",
    },
    {
      id: 212,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/flowers-gigapixel-standard-scale-6_00x_i2jwii",
    },
    {
      id: 213,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/twist-curls-gigapixel-hq-scale-6_00x_lxbtu1",
    },
    {
      id: 214,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/flowers-braided-in-gigapixel-standard-scale-6_00x_bmwpvm",
    },
    {
      id: 215,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/half-up-braids-gigapixel-standard-scale-6_00x-comp_ox30q6",
    },
    {
      id: 216,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/full-braid-gigapixel-standard-scale-6_00x_zxmvui",
    },
    {
      id: 217,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/orange-flower-braid-gigapixel-low_res-scale-6_00x_mt9ydq",
    },
    {
      id: 218,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/loose-braid-flowers-gigapixel-very_compressed-scale-6_00x_jwju9y",
    },
    {
      id: 219,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/low-pony-gigapixel-low_res-scale-6_00x_o66ata",
    },
    {
      id: 220,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/loose-curl-bun-gigapixel-standard-scale-6_00x_fjilde",
    },
    {
      id: 221,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/purl-accents-gigapixel-standard-scale-6_00x_tkt1ew",
    },
    {
      id: 222,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/low-bun-pearls-gigapixel-low_res-scale-6_00x_i4kjhd",
    },
    {
      id: 223,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/curl-bun-gigapixel-standard-scale-6_00x_rv0zfe",
    },
    {
      id: 224,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20hair%20styles/hair-2x3/updo-high-bun-hr-ps-6x_bf1ieo",
    },
  ];

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
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Hair Styles</h1>
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
                <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    loading={idx < LAZY_LOAD_IDX ? "eager" : "lazy"}
                    fetchpriority={idx < LAZY_LOAD_IDX ? "high" : "auto"}
                  />
                  {product.id === hairReducer.id ? (
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
          Makeup Looks
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

export default Hair;

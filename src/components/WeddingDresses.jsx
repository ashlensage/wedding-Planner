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

function WeddingDresses() {
  const user = useSelector((store) => store.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const weddingDressesReducer = useSelector(
    (store) => store.getReducer.getWeddingDressesReducer
  );

  const products = [
    {
      id: 501,
      name: "V-neck",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/v-neck-gown-gigapixel-low_res-scale-4_00x_pzgnqv",
    },
    {
      id: 502,
      name: "Sheer ballgown",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/ballgown-wedding-dress-gigapixel-standard-scale-4_00x_ghc6i2",
    },
    {
      id: 503,
      name: "Sheer princess dress",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/sheer-thin-straps-gigapixel-standard-scale-4_00x_yq8zdt",
    },
    {
      id: 504,
      name: "Lace drop shoulder",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/sheer-layered-lace-top-gigapixel-standard-scale-4_00x_nr2b4p",
    },
    {
      id: 505,
      name: "Shimmering pearls",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/lace-bridal-gigapixel-standard-scale-4_00x_xafc5c",
    },
    {
      id: 506,
      name: "Ruffle V neckline ballgown",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/drop-shoulder-gown-gigapixel-standard-scale-4_00x_ohjqb3",
    },
    {
      id: 507,
      name: "Bow shoulders",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/pearl-detail-gigapixel-standard-scale-4_00x_l9wkf2",
    },
    {
      id: 508,
      name: "Sheer flowy lace",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/beading-details-bottom-ruffle-gigapixel-standard-scale-4_00x_ukqfn7",
    },
    {
      id: 509,
      name: "Mermaid lace flowers",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/sheer-lace-bow-gigapixel-standard-scale-4_00x_pld0bq",
    },
    {
      id: 510,
      name: "Mermaid lacey",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/white-bow-shoulders-gigapixel-standard-scale-4_00x_z57is5",
    },
    {
      id: 511,
      name: "Silk bow back",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/shimmer-gigapixel-standard-scale-4_00x_tzthx9",
    },
    {
      id: 512,
      name: "Ruffled V-neck ballgown",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/off-shoulder-shimmer-gigapixel-standard-scale-4_00x_wcqgrj",
    },
    {
      id: 513,
      name: "Flower corset",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/mermaid-lace-flowers-gigapixel-low_res-scale-4_00x_tsyqew",
    },
    {
      id: 514,
      name: "Removable train",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/mermaid-lace-detail-gigapixel-standard-scale-4_00x_jva0id",
    },
    {
      id: 515,
      name: "Back cut out",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/silk-ivory-bow-back-gigapixel-standard-scale-4_00x_j4e2sk",
    },
    {
      id: 516,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/image/upload/v1679347237/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/bridal-dress-long-train-gigapixel-standard-scale-4_00x_q0ksyl",
    },
    {
      id: 517,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/bridal-dress-from-back-gigapixel-low_res-scale-4_00x_ewtnmm",
    },
    {
      id: 518,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/rooftop-ruffles-gigapixel-standard-scale-4_00x_qnyshy",
    },
    {
      id: 519,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/off-shoulder-tool-gigapixel-standard-scale-4_00x_lzo8p5",
    },
    {
      id: 520,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/floral-lace-wedding-dress-blum-gigapixel-standard-scale-4_00x_q47e5m",
    },
    {
      id: 521,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/removable-train-gigapixel-standard-scale-4_00x_hpvtyi",
    },
    {
      id: 522,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/open-back-lace-side-cut-gigapixel-standard-scale-4_00x_grqron",
    },
    {
      id: 523,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/long-sleeve-classic-gigapixel-standard-scale-4_00x_slcjgh",
    },
    {
      id: 524,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_858,f_auto,q_auto/wedding-planner/updated%20wedding%20dresses/wedding-dresses-2x3/lace-long-sleeve-gigapixel-standard-scale-4_00x_vfqnbn",
    },
  ];

  function handleClick() {
    history.push("/final-page");
  }

  function makeSelection(product) {
    dispatch({
      type: "SET_WEDDING_DRESS",
      payload: product,
    });
  }

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Wedding Dresses</h1>
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
                  {product.id === weddingDressesReducer.id ? (
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
          Final Page
        </button>
      </div>
    </div>
  );
}

export default WeddingDresses;

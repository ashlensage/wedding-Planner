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

function Venue() {
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
      id: 401,
      name: "Pink Flowers & Fairy Light Archway",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/flower-tunnel-gigapixel-standard-scale-6_00x_bbogvl",
    },
    {
      id: 402,
      name: "Fairy Light Pathway & Chandelier Dining",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/sparkly-wedding-gigapixel-standard-scale-6_00x_nljvji",
    },
    {
      id: 403,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/wedding-in-brooklyn-gigapixel-standard-scale-6_00x_fh7mwq",
    },
    {
      id: 404,
      name: "Rooftop With City View",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/petals-rooftop-wedding-gigapixel-standard-scale-6_00x_z2dtft",
    },
    {
      id: 405,
      name: "Rooftop With Lights Hanging Overhead",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/rooftop-lights-gigapixel-standard-scale-4_00x_nxmd1m",
    },
    {
      id: 406,
      name: "Vinyard Views",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/vinyard-gigapixel-standard-scale-4_00x_bdhpza",
    },
    {
      id: 407,
      name: "Mountain Views",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/caliornia-vineyard-wedding-gigapixel-standard-scale-4_00x_jhwgsf",
    },
    {
      id: 408,
      name: "Pathway With White Orchids",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/white-walkway-gigapixel-standard-scale-6_00x_cba4yo",
    },
    {
      id: 409,
      name: " ",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/white-blue-outdoor-gigapixel-standard-scale-6_00x_prgldp",
    },
    {
      id: 410,
      name: "Fairytale Forest",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues%202/venues-02/forest-lights-gigapixel-standard-scale-4_00x_ppvubn",
    },

    {
      id: 411,
      name: "venue",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/forest-flower-arch-gigapixel-standard-scale-6_00x_i3arj4",
    },
    {
      id: 412,
      name: "Flower Arches & Aisle",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/flower-arches-gigapixel-standard-scale-6_00x_f6hyng",
    },
    {
      id: 413,
      name: "Elegant Ivory & Gold Ballroom",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/ivory-gold-ballroom-ceremony-gigapixel-standard-scale-2_00x_jqfijj",
    },
    {
      id: 414,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/wedding-venue-gigapixel-standard-scale-4_00x_khxysd",
    },
    {
      id: 415,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/white-roses-gigapixel-standard-scale-6_00x_u0ha6i",
    },
    {
      id: 416,
      name: "Stunning Ruins",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues%202/venues-02/ruins-gigapixel-standard-scale-4_00x_qbaueh",
    },
    {
      id: 417,
      name: "Castle Ruins",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/casel-monasero-gigapixel-standard-scale-6_00x_b3ve6j",
    },
    {
      id: 418,
      name: "Blue & Gold Museum With Arches",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues%202/venues-02/museum-blue-gold-gigapixel-standard-scale-4_00x_ahhwy5",
    },
    {
      id: 419,
      name: "Pink Museum With Chandeliers",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/museum-pink-gigapixel-standard-scale-6_00x_cqpz8a",
    },
    {
      id: 420,
      name: "Pink & White Rose Decor & Chandeliers",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/pink-venue-gigapixel-standard-scale-4_00x_pjo3vm",
    },
    {
      id: 421,
      name: "Pastel Flowers & Glass Decor",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/luxury-pink-and-purple-wedding-flowers-gigapixel-standard-scale-4_00x_sccvlz",
    },
    {
      id: 422,
      name: "Greenhouse",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/greenhouse-lights-gigapixel-standard-scale-4_00x_dq1gis",
    },
    {
      id: 423,
      name: "White Roses & Orchids On The Beach",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/ocean-view-gigapixel-standard-scale-6_00x_a5ikxq",
    },
    {
      id: 424,
      name: "Destination Wedding On The Ocean Shore",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/spring-wedding-gigapixel-standard-scale-6_00x_bfgthl",
    },
    {
      id: 425,
      name: "Reflective Aisle With White Decor",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/destination-wedding-gigapixel-standard-scale-4_00x_zjtc0t",
    },
    {
      id: 426,
      name: "Shimmering Tent With Pink Decor",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/tent-sparkles-pink-gigapixel-hq-scale-4_00x_oht7rp",
    },
    {
      id: 427,
      name: "Lilac Flower Arches With Oceanview",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues%202/venues-02/venue-among-the-stars-gigapixel-standard-scale-4_00x_uix7nm",
    },
    {
      id: 428,
      name: "Sunset View & Arches With Hanging Flowers",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/flower-wrapped-arches-gigapixel-standard-scale-6_00x_s637vi",
    },
  ];

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
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Venues</h1>
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
                  {product.id === venueReducer.id ? (
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
          Flower Arrangements
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

export default Venue;

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
      id: 1,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/pink-grey-gigapixel-standard-scale-4_00x_mz9zzp",
      availableColors: [
        { name: "Sweet Sherry", colorBg: "#eebcb5" },
        { name: "Satin Pink", colorBg: "#fbe3df" },
        { name: "White Whale", colorBg: "#ecedef" },
        { name: "Mischief Mouse", colorBg: "#b2b4b3" },
        { name: "Argent", colorBg: "#8a8a8a" },
      ],
    },
    {
      id: 2,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/warmpalettes-gigapixel-standard-scale-6_00x_y0f79b",
      availableColors: [
        { name: "Rogue Pink", colorBg: "#f8abbf" },
        { name: "Milkshake Pink", colorBg: "#efccd3" },
        { name: "First Daffodil", colorBg: "#feeb8f" },
        { name: "Placebo Yellow", colorBg: "#fbfcea" },
        { name: "Witty Green", colorBg: "#b6db98" },
      ],
    },
    {
      id: 3,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/sand-dusk-colour-palette-gigapixel-hq-scale-2_00x_t5kc4j",
      availableColors: [
        { name: "Purple Sand", colorBg: "#c1c3f4" },
        { name: "Pussyfoot", colorBg: "#c9b8d8" },
        { name: "Lily Legs", colorBg: "#edc4d6" },
        { name: "Fresh Piglet", colorBg: "#fddce3" },
        { name: "French Manicure", colorBg: "#feebe5" },
      ],
    },
    {
      id: 4,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/sunset-color-palette-gigapixel-low_res-scale-4_00x_xe2byv",
      availableColors: [
        { name: "Crab Bisque", colorBg: "#f0b097" },
        { name: "Jadeite", colorBg: "#eb9188" },
        { name: "Ducal Pink", colorBg: "#cc8e9b" },
        { name: "Night Music", colorBg: "#9e99af" },
        { name: "Forever Blue", colorBg: "#8497b5" },
      ],
    },
    {
      id: 5,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/blush-colors-gigapixel-standard-scale-4_00x_jx5u7a",
      availableColors: [
        { name: "Dusky Rose", colorBg: "#bb687a" },
        { name: "Raspberry Lemonade", colorBg: "#e1aaad" },
        { name: "Rose Melody", colorBg: "#ebc1cb" },
        { name: "Cupcake Pink", colorBg: "#f6d5d0" },
        { name: "Rose Sugar", colorBg: "#fbebeb" },
      ],
    },
    {
      id: 6,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/floral-wedding-colors-gigapixel-standard-scale-4_00x_kp2pcl",
      availableColors: [
        { name: "Angelico", colorBg: "#ebcfc4" },
        { name: "Cozy Cottage", colorBg: "#f2dfd8" },
        { name: "Laundry White", colorBg: "#f7f8f3" },
        { name: "Nearsighted", colorBg: "#c8d5de" },
        { name: "Bananas Foster", colorBg: "#dbbf97" },
      ],
    },
    {
      id: 7,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/paperflora-gigapixel-standard-scale-4_00x_e1vv4x",
      availableColors: [
        { name: "Aloe Vera Tea", colorBg: "#879071" },
        { name: "Siesta Rose", colorBg: "#ea797d" },
        { name: "Honey Baked Ham", colorBg: "#ffa998" },
        { name: "Peach Melba", colorBg: "#fbc1b3" },
        { name: "Light Nougat", colorBg: "#fbe4c5" },
        { name: "Lily Lavender", colorBg: "#e8e8ea" },
      ],
    },
    {
      id: 8,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/color-palette-pink-orange-gigapixel-standard-scale-4_00x_cbprso",
      availableColors: [
        { name: "French Winery", colorBg: "#8c0d2b" },
        { name: "Red Herring", colorBg: "#dd1448" },
        { name: "Kisses & Hugs", colorBg: "#ff6974" },
        { name: "Fruit Red", colorBg: "#fa8571" },
        { name: "Mango Loco", colorBg: "#fdb721" },
        { name: "Habanero Gold", colorBg: "#fdd154" },
      ],
    },
    {
      id: 9,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/orange-blue-color-palette-gigapixel-standard-scale-6_00x_w3mmtj",
      availableColors: [
        { name: "Temptatious Tangerine", colorBg: "#fe7b2d" },
        { name: "Fuzzy Peach", colorBg: "#ffbc8f" },
        { name: "Solar Glow", colorBg: "#faf1b6" },
        { name: "Bitcoin", colorBg: "#ffbb10" },
        { name: "Sweet Dreams", colorBg: "#9dc5e8" },
      ],
    },
    {
      id: 10,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/blue-pink-colors-gigapixel-standard-scale-4_00x_w2aa7f",
      availableColors: [
        { name: "Aquarelle Beige", colorBg: "#e7dfd4" },
        { name: "Petals Unfolding", colorBg: "#f3bcbf" },
        { name: "Flamingo Dream", colorBg: "#ee858a" },
        { name: "Black Velvet", colorBg: "#222433" },
        { name: "Bahama Blue", colorBg: "#255a7c" },
        { name: "Tender Twilight", colorBg: "#b6cce1" },
      ],
    },
    {
      id: 11,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/wedding-colors-gigapixel-standard-scale-2_00x_boai5q",
      availableColors: [
        { name: "Berry Pie", colorBg: "#4f6e8d" },
        { name: "Sea Cliff", colorBg: "#a4c2de" },
        { name: "Blue Gossamer", colorBg: "#d0d7e1" },
        { name: "Lily Lavender", colorBg: "#ebebed" },
        { name: "Pearled Couscous", colorBg: "#f3ead8" },
      ],
    },
    {
      id: 12,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/color_palette-gigapixel-standard-scale-4_00x_heju83",
      availableColors: [
        { name: "Scenario", colorBg: "#81a59b" },
        { name: "Graceful Green", colorBg: "#adb9ab" },
        { name: "Simplicity", colorBg: "#cbccd8" },
        { name: "Eggnog", colorBg: "#fdeca0" },
        { name: "Cultured", colorBg: "#f5f3f4" },
      ],
    },
    {
      id: 13,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/freshflowersforweddings-gigapixel-low_res-scale-4_00x_j9k4nf",
      availableColors: [
        { name: "Ice Floe", colorBg: "#d8e7e2" },
        { name: "Morning Dew White", colorBg: "#c0d8d2" },
        { name: "Light Ridge Light", colorBg: "#c0d6e4" },
        { name: "Blue Parlor", colorBg: "#7fa7d8" },
        { name: "Mariner", colorBg: "#41659d" },
      ],
    },
    {
      id: 14,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/blue-colors-gigapixel-standard-scale-4_00x_lvssjf",
      availableColors: [
        { name: "Funnel Cloud", colorBg: "#10356b" },
        { name: "Carol", colorBg: "#2e87ab" },
        { name: "Bonnie Blue", colorBg: "#91bcd2" },
        { name: "Frost Wind", colorBg: "#ddebf0" },
        { name: "Icy Lilac", colorBg: "#fbfcfe" },
      ],
    },
    {
      id: 15,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/wedding-color-gigapixel-standard-scale-4_00x_lsjkaq",
      availableColors: [
        { name: "Berry Pie", colorBg: "#506e8d" },
        { name: "Sea Cliff", colorBg: "#a4c2de" },
        { name: "Skyscraper", colorBg: "#d1d8e2" },
        { name: "Lily Lavender", colorBg: "#ebebed" },
        { name: "Satin Weave", colorBg: "#f3ecd9" },
      ],
    },
    {
      id: 16,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/mineralglow-gigapixel-standard-scale-4_00x_qbqaxp",
      availableColors: [
        { name: "Coconut White", colorBg: "#ededf8" },
        { name: "Mid Spring Morning", colorBg: "#d8f8f3" },
        { name: "Spearmint Water", colorBg: "#ade6e8" },
        { name: "Mandrake", colorBg: "#8887a3" },
        { name: "Berry Popsicle", colorBg: "#d6a7d0" },
        { name: "Cherry Flower", colorBg: "#fcdfe8" },
      ],
    },
    {
      id: 17,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/spring-color-palette-gigapixel-low_res-scale-4_00x_pibbl1",
      availableColors: [
        { name: "Jordy Blue", colorBg: "#789fde" },
        { name: "Lavender Princess", colorBg: "#e9c2ee" },
        { name: "Blair", colorBg: "#a3bce0" },
        { name: "Tree Frog Green", colorBg: "#87a752" },
        { name: "Aged Purple", colorBg: "#a1439f" },
      ],
    },
    {
      id: 18,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/green-blue-purple-gigapixel-low_res-scale-4_00x_yy778t",
      availableColors: [
        { name: "Mint Fizz", colorBg: "#e9f4e8" },
        { name: "Blue Phlox", colorBg: "#d2e3e7" },
        { name: "Boot Cut", colorBg: "#b0bfcf" },
        { name: "Larkspur Violet", colorBg: "#8f89ac" },
        { name: "Plum Wine", colorBg: "#674851" },
        { name: "Foggy Love", colorBg: "#decae9" },
      ],
    },
    {
      id: 19,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/wedding-color-palette-gigapixel-standard-scale-2_00x_rlwhl9",
      availableColors: [
        { name: "Brunneous", colorBg: "#5d4461" },
        { name: "Noble Lilac", colorBg: "#af8090" },
        { name: "Confectionary", colorBg: "#d5b8d7" },
        { name: "Sonora Rose", colorBg: "#e9d7e5" },
        { name: "Glaze White", colorBg: "#eadfde" },
      ],
    },
    {
      id: 20,
      name: "",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/puple-green-blue-gigapixel-standard-scale-6_00x_ntmzlg",
      availableColors: [
        { name: "Fuschia Flair", colorBg: "#a04a6d" },
        { name: "Taste of Berry", colorBg: "#caa4b7" },
        { name: "Valley of Tears", colorBg: "#d1e1e4" },
        { name: "Yucca", colorBg: "#759892" },
        { name: "Martina Olive", colorBg: "#8f9643" },
      ],
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
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Color Palettes</h1>
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

                  {product.id === colorThemeReducer.id ? (
                    <h3 className="h-auto aspect-[10/1] w-full p-2.5 flex justify-center items-center text-md font-bold text-gray-700 bg-white/50">
                      Selected
                    </h3>
                  ) : null}
                  <div className="flex flex-col">
                    <h4 className="sr-only">Available colors</h4>
                    <ul
                      role="list"
                      className="mt-auto flex items-center justify-center justify-items-center space-x-3 pb-3.5"
                    >
                      {product.availableColors.map((color) => (
                        <li
                          key={color.name}
                          className="h-4 w-4 rounded-full border border-black border-opacity-30 drop-shadow"
                          style={{ backgroundColor: color.colorBg }}
                        >
                          <span className="sr-only"> {color.name} </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between font-bold">
        <button className="btn" onClick={handleClick}>
          Venues
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

export default ColorThemes;

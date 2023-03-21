import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function WeddingPlanner() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const products = [
    {
      id: 1,
      name: "Color Palettes",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/colors%20cropped/color-theme-cropped/blue-pink-colors-gigapixel-standard-scale-4_00x_w2aa7f",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      onClick: "/color-themes",
    },
    {
      id: 2,
      name: "Venues",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/venues/venues/spring-wedding-gigapixel-standard-scale-6_00x_bfgthl",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      onClick: "/venues",
    },
    {
      id: 3,
      name: "Flower Arrangements",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/flowers/flowers/cool-toned-blush-gigapixel-hq-scale-6_00x_xa2wqt",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      onClick: "/flowers",
    },
    {
      id: 4,
      name: "Hair Styles",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/main%20page/loose-curl-bun-sq-main-gigapixel-standard-scale-6_00x_jwyrv1",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      onClick: "/hair",
    },
    {
      id: 5,
      name: "Makeup Looks",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/makeup%20looks/makeup/gemstones-hr-gigapixel-hq-scale-4_00x_zm1ki4",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      onClick: "/makeup",
    },
    {
      id: 6,
      name: "Wedding Dresses",
      href: "#",
      imageSrc:
        "https://res.cloudinary.com/dk8n90n3m/w_572,h_572,f_auto,q_auto/wedding-planner/main%20page/bridal-sq-main-gigapixel-standard-scale-4_00x_bsjjno",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      onClick: "/wedding-dresses",
    },
  ];

  function handleClick() {
    history.push("/color-themes");
  }

  const productsImageClick = (product) => {
    console.log("productsImageClick, product", product);
    history.push(product.onClick);
  };

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Wedding Planner</h1>
      <div className="bg-white">
        <div className="py-16 sm:py-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <button
                onClick={() => productsImageClick(product)}
                key={product.id}
                className="group"
              >
                <div className="grid aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <h3 className="h-auto aspect-[10/1] w-full p-2.5 flex justify-center items-center text-md font-bold text-gray-700 bg-white/50">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <button className="btn font-bold" onClick={handleClick}>
        Color Palettes
      </button>
    </div>
  );
}
export default WeddingPlanner;

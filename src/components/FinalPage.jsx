import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

// YOU CANNOT USE HOOKS IN CLASS COMPONENTS -- usually Higher Order Components are used instead
// Class Components have different syntax, including `this`

function FinalPage() {
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
      {
        ...colorThemeReducer,
        onClick: "/color-themes",
        label: "Color Palette",
      },
      { ...flowersReducer, onClick: "/flowers", label: "Flower Arrangement" },
      { ...hairReducer, onClick: "/hair", label: "Hair Style" },
      { ...makeupReducer, onClick: "/makeup", label: "Makeup" },
      { ...venueReducer, onClick: "/venues", label: "Venue" },
      {
        ...weddingDressesReducer,
        onClick: "/wedding-dresses",
        label: "Wedding Dress",
      },
    ];
  }

  function handleClick() {
    // TODO: POST to the database
    const dataForServer = {
      color_theme_selection: colorThemeReducer.id,
      flower_arrangement_selection: flowersReducer.id,
      hair_selection: hairReducer.id,
      makeup_selection: makeupReducer.id,
      venue_selection: venueReducer.id,
      wedding_dress_selection: weddingDressesReducer.id,
      // etc.
    };
    // axios.post or saga
    history.push("/main-page");
  }

  const productsImageClick = (product) => {
    console.log("productsImageClick, product", product);
  };

  console.log("selectedProducts", selectedProducts());

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl container">
      <h1 className="font-display text-4xl">Final Page</h1>
      <div className="bg-white">
        <div className="py-16 sm:py-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {selectedProducts().map((product) => (
              <div key={product.id || product.onClick} className="group">
                <button
                  className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200"
                  onClick={() => productsImageClick(product)}
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    onClick={() => history.push(product.onClick)}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <h3 className="h-auto aspect-[10/1] w-full p-2.5 flex justify-center items-center text-md font-bold text-gray-700 bg-white/50">
                    {product.label}
                  </h3>
                </button>
                <div className="flex place-content-center gap-4 mt-4 font-bold">
                  <button
                    className="btn"
                    onClick={() => {
                      history.push(`${product.onClick}`);
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn" onClick={handleClick}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="btn font-bold" onClick={handleClick}>
        Main Page
      </button>
    </div>
  );
}
// Delete button
// => this.props.onDelete(this.props.id)
export default FinalPage;

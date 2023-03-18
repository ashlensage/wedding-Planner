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
  const user = useSelector((store) => store.user);
  const colorThemeReducer = useSelector(
    (store) => store.getReducer.getColorThemesReducer
  );
  const flowersReducer = useSelector(
    (store) => store.getReducer.getFlowersReducer
  );

  // Select remaining reducers here

  const history = useHistory();
  function getProducts() {
    return [
      { ...colorThemeReducer, onClick: "/color-themes" },
      { ...flowersReducer, onClick: "/flowers" },
      // { ...makeupReducer, onClick: "/color-themes" },
      // Other reducers go here
    ];
  }

  function handleClick() {
    // TODO: POST to the database
    const dataForServer = {
      color_theme_selection: colorThemeReducer.id,
      flower_arrangement_selection: flowersReducer.id,
      // etc.
    };
    // axios.post or saga
    history.push("/main-page");
  }

  const productsImageClick = (product) => {
    console.log("productsImageClick, product", product);
  };

  console.log('getProducts', getProducts());

  return (
    <div className="container">
      <h2 className="text-center">Final Page</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {getProducts().map((product) => (
              <div key={product.id}>
                <button
                  onClick={() => productsImageClick(product)}
                  key={product.id}
                  className="group"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      onClick={() => history.push(product.onClick)}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                </button>
                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      history.push(`${product.onClick}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
                <button className="btn" onClick={handleClick}>
                  Delete
                </button>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>
        Main Page
      </button>
    </div>
  );
}
// Delete button
// => this.props.onDelete(this.props.id)
export default FinalPage;

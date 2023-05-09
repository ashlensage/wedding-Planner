import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const deleteMap = {
  'Color Palette': 'DELETE_COLOR_PALETTE',
  'Flower Arrangement': 'DELETE_FLOWER_ARRANGEMENT',
  'Hair Style': 'DELETE_HAIR_STYLE',
  'Makeup': 'DELETE_MAKEUP',
  'Venue': 'DELETE_VENUE',
  'Wedding Dress': 'DELETE_WEDDING_DRESS',
};

function FinalPage() {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const handleDelete = ({label}) => {
    console.log("delete this item!", label);
    console.log("issue this command!", deleteMap[label]);
    dispatch({
      type: deleteMap[label],
    });
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
                  {product.imageSrc ? (
                    <>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        onClick={() => history.push(product.onClick)}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                      {product.availableColors?.length ? (
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
                      ) : null}
                    </>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <svg
                        className="h-auto w-2/5 flex fill-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                      </svg>
                    </div>
                  )}
                  <h3 className="h-auto aspect-[10/1] w-full p-2.5 flex justify-center items-center text-md font-bold text-gray-700 bg-white/50">
                    {product.label}
                  </h3>
                </button>
                <div className="flex place-content-center gap-2.5 mt-4 font-bold">
                  <button
                    className="btn"
                    onClick={() => {
                      history.push(`${product.onClick}`);
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn" onClick={() => handleDelete(product)}>
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

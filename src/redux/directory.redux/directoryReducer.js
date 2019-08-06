import hats from "../../image/hats.jpg";
import sneakers from "../../image/sneakers.jpg";
import womens from "../../image/womens.jpg";
import mens from "../../image/mens.jpg";
import jackets from "../../image/jackets.jpg";
const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: hats,
      id: 1,
      urlLink: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: jackets,
      id: 2,
      urlLink: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: sneakers,
      id: 3,
      urlLink: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: womens,
      size: "large",
      id: 4,
      urlLink: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: mens,
      size: "large",
      id: 5,
      urlLink: "shop/mens"
    }
  ]
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;

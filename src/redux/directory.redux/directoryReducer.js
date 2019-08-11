import hats from "../../image/hats.jpg";
import sneakers from "../../image/sneakers.jpg";
import womens from "../../image/womens.jpg";
import mens from "../../image/mens.jpg";
import jackets from "../../image/jackets.jpg";
import beauty from "../../image/beauty.jpg";

const initialState = {
  sections: [
    {
      title: "womens",
      imageUrl: womens,

      id: 1,
      urlLink: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: mens,

      id: 2,
      urlLink: "shop/mens"
    },
    {
      title: "hats",
      imageUrl: hats,
      id: 3,
      urlLink: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: jackets,
      id: 4,
      urlLink: "shop/jackets"
    },

    {
      title: "sneakers",
      imageUrl: sneakers,
      id: 5,
      urlLink: "shop/sneakers"
    },
    {
      title: "beauty",
      imageUrl: beauty,
      id: 6,
      urlLink: "shop/beauty"
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

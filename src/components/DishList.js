import DishCard from "./DishCard";
import DishSelectionMenu from "./DishSelectionMenu";
import { useState } from "react";

import burger_1 from "../assets/foodmenu/burgers/burger_1.png";
import burger_2 from "../assets/foodmenu/burgers/burger_2.png";
import burger_3 from "../assets/foodmenu/burgers/burger_3.png";
import burger_4 from "../assets/foodmenu/burgers/burger_4.png";
import burger_5 from "../assets/foodmenu/burgers/burger_5.png";
import burger_6 from "../assets/foodmenu/burgers/burger_6.png";
import burger_7 from "../assets/foodmenu/burgers/burger_7.png";
import burger_8 from "../assets/foodmenu/burgers/burger_8.png";
import burger_9 from "../assets/foodmenu/burgers/burger_9.png";

import pizza_1 from "../assets/foodmenu/pizzas/pizza_1.png";
import pizza_2 from "../assets/foodmenu/pizzas/pizza_2.png";
import pizza_3 from "../assets/foodmenu/pizzas/pizza_3.png";
import pizza_4 from "../assets/foodmenu/pizzas/pizza_4.png";
import pizza_5 from "../assets/foodmenu/pizzas/pizza_5.png";
import pizza_6 from "../assets/foodmenu/pizzas/pizza_6.png";
import pizza_7 from "../assets/foodmenu/pizzas/pizza_7.png";
import pizza_8 from "../assets/foodmenu/pizzas/pizza_8.png";

import salad_1 from "../assets/foodmenu/salads/salad_1.png";
import salad_2 from "../assets/foodmenu/salads/salad_2.png";
import salad_3 from "../assets/foodmenu/salads/salad_3.png";
import salad_4 from "../assets/foodmenu/salads/salad_4.png";
import salad_5 from "../assets/foodmenu/salads/salad_5.png";
import salad_6 from "../assets/foodmenu/salads/salad_6.png";

import donut_1 from "../assets/foodmenu/donuts/donut_1.png";
import donut_2 from "../assets/foodmenu/donuts/donut_2.png";
import donut_3 from "../assets/foodmenu/donuts/donut_3.png";
import donut_4 from "../assets/foodmenu/donuts/donut_4.png";
import donut_5 from "../assets/foodmenu/donuts/donut_5.png";
import donut_6 from "../assets/foodmenu/donuts/donut_6.png";

import cocktail_1 from "../assets/foodmenu/drinks/cocktail_1.png";
import cocktail_2 from "../assets/foodmenu/drinks/cocktail_2.png";
import cocktail_3 from "../assets/foodmenu/drinks/cocktail_3.png";
import cocktail_4 from "../assets/foodmenu/drinks/cocktail_4.png";
import cocktail_5 from "../assets/foodmenu/drinks/cocktail_5.png";
import cocktail_6 from "../assets/foodmenu/drinks/cocktail_6.png";
import { type } from "@testing-library/user-event/dist/type";

const dishlist = [
  {
    id: 1,
    title: "Burger 1",
    image: burger_1,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "29",
    type: "burger",
  },
  {
    id: 2,
    title: "Burger 2",
    image: burger_2,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "30",
    type: "burger",
  },
  {
    id: 3,
    title: "Burger 3",
    image: burger_3,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "31",
    type: "burger",
  },
  {
    id: 4,
    title: "Burger 4",
    image: burger_4,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    type: "burger",
    price: "32",
  },
  {
    id: 5,
    title: "Burger 5",
    image: burger_5,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "33",
    type: "burger",
  },
  {
    id: 6,
    title: "Burger 6",
    image: burger_6,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "34",
    type: "burger",
  },
  {
    id: 7,
    title: "Burger 7",
    image: burger_7,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "35",
    type: "burger",
  },
  {
    id: 8,
    title: "Burger 8",
    image: burger_8,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "36",
    type: "burger",
  },
  {
    id: 9,
    title: "Burger 9",
    image: burger_9,
    composition: "Oгірок, листя салата, ікра масаго, спайсі соус",
    price: "37",
    type: "burger",
  },
  {
    id: 10,
    title: "Pizza 1",
    image: pizza_1,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "38",
    type: "pizza",
  },
  {
    id: 11,
    title: "Pizza 2",
    image: pizza_2,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "39",
    type: "pizza",
  },
  {
    id: 12,
    title: "Pizza 3",
    image: pizza_3,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "40",
    type: "pizza",
  },
  {
    id: 13,
    title: "Pizza 4",
    image: pizza_4,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "41",
    type: "pizza",
  },
  {
    id: 14,
    title: "Pizza 5",
    image: pizza_5,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "42",
    type: "pizza",
  },
  {
    id: 15,
    title: "Pizza 6",
    image: pizza_6,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "43",
    type: "pizza",
  },
  {
    id: 16,
    title: "Pizza 7",
    image: pizza_7,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "44",
    type: "pizza",
  },
  {
    id: 17,
    title: "Pizza 8",
    image: pizza_8,
    composition: "Лосось, огірок, авокадо, японський майонез, кунжут",
    price: "45",
    type: "pizza",
  },
  {
    id: 18,
    title: "Salad 1",
    image: salad_1,
    composition: "Cалат чука, кунжут, лимон, горіховий соус",
    price: "16",
    type: "salad",
  },
  {
    id: 19,
    title: "Salad 2",
    image: salad_2,
    composition: "Cалат чука, кунжут, лимон, горіховий соус",
    price: "17",
    type: "salad",
  },
  {
    id: 20,
    title: "Salad 3",
    image: salad_3,
    composition: "Cалат чука, кунжут, лимон, горіховий соус",
    price: "18",
    type: "salad",
  },
  {
    id: 21,
    title: "Salad 4",
    image: salad_4,
    composition: "Cалат чука, кунжут, лимон, горіховий соус",
    price: "19",
    type: "salad",
  },
  {
    id: 22,
    title: "Salad 5",
    image: salad_5,
    composition: "Cалат чука, кунжут, лимон, горіховий соус",
    price: "20",
    type: "salad",
  },
  {
    id: 23,
    title: "Salad 6",
    image: salad_6,
    composition: "Cалат чука, кунжут, лимон, горіховий соус",
    price: "22",
    type: "salad",
  },
  {
    id: 24,
    title: "Donut 1",
    image: donut_1,
    composition: "Тигрова креветка, спайсі соус",
    price: "5",
    type: "donut",
  },
  {
    id: 25,
    title: "Donut 2",
    image: donut_2,
    composition: "Тигрова креветка, спайсі соус",
    price: "6",
    type: "donut",
  },
  {
    id: 26,
    title: "Donut 3",
    image: donut_3,
    composition: "Тигрова креветка, спайсі соус",
    price: "7",
    type: "donut",
  },
  {
    id: 27,
    title: "Donut 4",
    image: donut_4,
    composition: "Тигрова креветка, спайсі соус",
    price: "8",
    type: "donut",
  },
  {
    id: 28,
    title: "Donut 5",
    image: donut_5,
    composition: "Тигрова креветка, спайсі соус",
    price: "9",
    type: "donut",
  },
  {
    id: 29,
    title: "Donut 6",
    image: donut_6,
    composition: "Тигрова креветка, спайсі соус",
    price: "10",
    type: "donut",
  },
  {
    id: 30,
    title: "Cocktail 1",
    image: cocktail_1,
    composition: "Водка, сок, коньяк",
    price: "50",
    type: "drink",
  },
  {
    id: 31,
    title: "Cocktail 2",
    image: cocktail_2,
    composition: "Водка, сок, коньяк",
    price: "51",
    type: "drink",
  },
  {
    id: 32,
    title: "Cocktail 3",
    image: cocktail_3,
    composition: "Водка, сок, коньяк",
    price: "52",
    type: "drink",
  },
  {
    id: 33,
    title: "Cocktail 4",
    image: cocktail_4,
    composition: "Водка, сок, коньяк",
    price: "53",
    type: "drink",
  },
  {
    id: 34,
    title: "Cocktail 5",
    image: cocktail_5,
    composition: "Водка, сок, коньяк",
    price: "54",
    type: "drink",
  },
  {
    id: 35,
    title: "Cocktail 6",
    image: cocktail_6,
    composition: "Водка, сок, коньяк",
    price: "55",
    type: "drink",
  },
];

// const FilterDishes = (dishlist, type) => {
//   const seen = {};
//   const result = dishlist.filter(item => {
//     if (seen[item[type]] === type) {
//       return false;
//     } else {
//       seen[item[type]] = true;
//       return true;
//     }
//   });
//   console.log(result);
//   return result;
// }

// const FilterDishes = (dishlist, type) => {
//   const [filtered, setFiltered] = useState([]);

//   // const result = (type) => {
//   //   setFiltered(dishlist.filter((x) => x.type === type));
//   // };
//   // console.log(type);
//   // return result;
// };


const Dishlist = () => {
  const [active, setActive] = useState(dishlist[0]);
  const [filtered, setFiltered] = useState([]);

  const click = (image) => {
    setActive(dishlist.find((x) => x.image === image));
  };
  
  const handleFilterChange = () => {
    setFiltered(dishlist.filter((x) => type === x.type));
    console.log(type);

    for (let item of dishlist) {
      console.log(item.type);
    }    
  };


  return (
    <div>
      <p className="dish_list-title">All Items</p>
      <div className="dish_list">
        {dishlist.map(({ image, title, composition, price, type }) => (
          <div
            key={image}
            className={
              active.image === image
                ? "dish_card dish_card-active"
                : "dish_card"
            }
            onClick={() => click(image)}
          >
            <DishCard
              title={title}
              composition={composition}
              image={image}
              price={price}
              type={type}
              handleFilterChange={handleFilterChange}
            />
            {/* <DishSelectionMenu type={type}/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishlist;

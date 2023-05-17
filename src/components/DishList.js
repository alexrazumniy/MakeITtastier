import { useState, useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import DishCard from "./DishCard";
import filter from "../assets/foodmenu/filter.svg"

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

const dishlist = [
  {
    id: 1,
    title: "Classic Burger",
    image: burger_1,
    composition: "Beef patty, bun, cheese, lettuce, tomatoes, onions",
    price: "29",
    type: "burger",
  },
  {
    id: 2,
    title: "Cheeseburger",
    image: burger_2,
    composition: "Beef patty, bun, cheese, lettuce, tomatoes, onions",
    price: "30",
    type: "burger",
  },
  {
    id: 3,
    title: "Bacon Cheeseburger",
    image: burger_3,
    composition: "Beef patty, bun, cheese, bacon, lettuce, tomatoes, onions",
    price: "31",
    type: "burger",
  },
  {
    id: 4,
    title: "Chicken Burger",
    image: burger_4,
    composition: "Chicken patty, bun, cheese, lettuce, tomatoes, onions",
    type: "burger",
    price: "32",
  },
  {
    id: 5,
    title: "Vegetarian Burger",
    image: burger_5,
    composition: "Veggie patty, bun, cheese, lettuce, tomatoes, onions",
    price: "33",
    type: "burger",
  },
  {
    id: 6,
    title: "Fish Burger",
    image: burger_6,
    composition: "Fish fillet, bun, cheese, lettuce, tomatoes, onions",
    price: "34",
    type: "burger",
  },
  {
    id: 7,
    title: "Grilled Burger",
    image: burger_7,
    composition:
      "Beef patty, bun, mushrooms, cheese, lettuce, tomatoes, onions",
    price: "35",
    type: "burger",
  },
  {
    id: 8,
    title: "Cheese Lovers Burger",
    image: burger_8,
    composition:
      "Beef patty, multiple types of cheese, lettuce, tomatoes, onions",
    price: "36",
    type: "burger",
  },
  {
    id: 9,
    title: "BBQ Burger",
    image: burger_9,
    composition:
      "Beef patty, bun, BBQ sauce, cheese, lettuce, tomatoes, onions",
    price: "37",
    type: "burger",
  },
  {
    id: 10,
    title: "Margherita Pizza",
    image: pizza_1,
    composition: "Tomato sauce, mozzarella cheese, fresh basil leaves",
    price: "38",
    type: "pizza",
  },
  {
    id: 11,
    title: "Pepperoni Pizza",
    image: pizza_2,
    composition: "Tomato sauce, mozzarella cheese, pepperoni slices",
    price: "39",
    type: "pizza",
  },
  {
    id: 12,
    title: "Hawaiian Pizza",
    image: pizza_3,
    composition: "Tomato sauce, mozzarella cheese, ham, pineapple chunks",
    price: "40",
    type: "pizza",
  },
  {
    id: 13,
    title: "BBQ Chicken Pizza",
    image: pizza_4,
    composition: "BBQ sauce, mozzarella cheese, grilled chicken, red onions",
    price: "41",
    type: "pizza",
  },
  {
    id: 14,
    title: "Veggie Supreme Pizza",
    image: pizza_5,
    composition:
      "Tomato sauce, mozzarella cheese, bell peppers, mushrooms, olives",
    price: "42",
    type: "pizza",
  },
  {
    id: 15,
    title: "Meat Lovers Pizza",
    image: pizza_6,
    composition:
      "Tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, ground beef",
    price: "43",
    type: "pizza",
  },
  {
    id: 16,
    title: "Mediterranean Pizza",
    image: pizza_7,
    composition:
      "Pesto sauce, mozzarella cheese, feta cheese, black olives, red onions",
    price: "44",
    type: "pizza",
  },
  {
    id: 17,
    title: "Four Cheese Pizza",
    image: pizza_8,
    composition:
      "Tomato sauce, mozzarella cheese, parmesan cheese, gorgonzola cheese",
    price: "45",
    type: "pizza",
  },
  {
    id: 18,
    title: "Caesar Salad",
    image: salad_1,
    composition: "Romaine lettuce, croutons, Parmesan cheese, Caesar dressing",
    price: "16",
    type: "salad",
  },
  {
    id: 19,
    title: "Greek Salad",
    image: salad_2,
    composition:
      "Romaine lettuce, tomatoes, red onions, feta cheese, Greek dressing",
    price: "17",
    type: "salad",
  },
  {
    id: 20,
    title: "Caprese Salad",
    image: salad_3,
    composition: "Fresh mozzarella cheese, tomatoes, balsamic glaze, olive oil",
    price: "18",
    type: "salad",
  },
  {
    id: 21,
    title: "Cobb Salad",
    image: salad_4,
    composition:
      "Mixed greens, grilled chicken, avocado, bacon, hard-boiled eggs, tomatoes",
    price: "19",
    type: "salad",
  },
  {
    id: 22,
    title: "Spinach Salad",
    image: salad_5,
    composition:
      "Baby spinach leaves, strawberries, candied pecans, balsamic vinaigrette",
    price: "20",
    type: "salad",
  },
  {
    id: 23,
    title: "Quinoa Salad",
    image: salad_6,
    composition: "Quinoa, mixed vegetables, feta cheese, lemon vinaigrette",
    price: "22",
    type: "salad",
  },
  {
    id: 24,
    title: "Glazed Donut",
    image: donut_1,
    composition: "Classic donut with a sweet, shiny glaze on top",
    price: "5",
    type: "donut",
  },
  {
    id: 25,
    title: "Chocolate Donut",
    image: donut_2,
    composition: "Chocolate-flavored donut with a rich chocolate glaze",
    price: "6",
    type: "donut",
  },
  {
    id: 26,
    title: "Jelly-Filled Donut",
    image: donut_3,
    composition: "Soft donut filled with your choice of fruit jelly or jam",
    price: "7",
    type: "donut",
  },
  {
    id: 27,
    title: "Sprinkle Donut",
    image: donut_4,
    composition:
      "Donut coated in colorful sprinkles for a fun and festive look",
    price: "8",
    type: "donut",
  },
  {
    id: 28,
    title: "Boston Cream Donut",
    image: donut_5,
    composition:
      "Donut filled with creamy vanilla custard and topped with chocolate glaze",
    price: "9",
    type: "donut",
  },
  {
    id: 29,
    title: "Maple Bacon Donut",
    image: donut_6,
    composition: "Donut topped with a sweet maple glaze and crispy bacon bits",
    price: "10",
    type: "donut",
  },
  {
    id: 30,
    title: "Mojito",
    image: cocktail_1,
    composition: "Rum, lime juice, sugar, mint leaves, and soda water",
    price: "50",
    type: "drink",
  },
  {
    id: 31,
    title: "Margarita",
    image: cocktail_2,
    composition:
      "Tequila, lime juice, and orange liqueur, served with a salted rim",
    price: "51",
    type: "drink",
  },
  {
    id: 32,
    title: "Piña Colada",
    image: cocktail_3,
    composition:
      "Rum, coconut cream, and pineapple juice, pineapple wedge and cherry",
    price: "52",
    type: "drink",
  },
  {
    id: 33,
    title: "Old Fashioned",
    image: cocktail_4,
    composition: "Whiskey, sugar, bitters, and a twist of citrus peel",
    price: "53",
    type: "drink",
  },
  {
    id: 34,
    title: "Cosmopolitan",
    image: cocktail_5,
    composition:
      "Vodka, cranberry juice, triple sec, and lime juice, lime wheel",
    price: "54",
    type: "drink",
  },
  {
    id: 35,
    title: "Espresso Martini",
    image: cocktail_6,
    composition: "Vodka, coffee liqueur, and a shot of espresso, coffee beans",
    price: "55",
    type: "drink",
  },
];

const Dishlist = () => {
  const [active, setActive] = useState("");

  const { filterKey } = useContext(MenuContext);

  const click = (image) => {
    setActive(dishlist.find((x) => x.image === image));
    console.log(image);
  };

  let filteredData = dishlist.filter((dish) => dish.type === filterKey);
  if (filterKey === "all") {
    filteredData = dishlist;
  }

  return (
    <div className="dish_items">
      <p className="dish_items-title">All Items</p>
      <img className="dish_items-filter-icon" src={filter} alt="food_group" />
      <div className="dish_list">
        {/* {dishlist.map(({ image, title, composition, price, type }) => (
          <DishCard
            key={image}
            className={
              active.image === image
                ? "dish_card dish_card-active"
                : "dish_card"
            }
            onClick={() => click(image)}
            title={title}
            composition={composition}
            image={image}
            price={price}
            type={type}
          />
        ))} */}
        {filteredData.map(({ image, title, composition, price, type }) => (
          <DishCard
            className={
              active.image === image
                ? "dish_card dish_card-active"
                : "dish_card"
            }
            onClick={() => click(image)}
            key={image}
            title={title}
            composition={composition}
            image={image}
            price={price}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default Dishlist;

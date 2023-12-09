import Card from "./components/Card";
import Header from "./components/Header";
import Slider from "./components/slider";
const buttons = [
  { id: "1", text: "Lunch" },
  { id: "2", text: "Mains" },
  { id: "3", text: "Desserts" },
  { id: "4", text: "A La Carte" },
  { id: "5", text: "Specials" },
  { id: "6", text: "Meat" },
  { id: "7", text: "Fruits" },
  { id: "8", text: "Desserts" },
  { id: "9", text: "Vegetables" },
  { id: "10", text: "Dairy" },
];

const meals = [
  {
    name: "Greek Salad",
    route:"greeksalad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
    photo:
      "/greeksalad.png",
  },
  {
    name: "Brushetta",
    route:"brushta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    price: "7.99",
    photo:
      "/brushta.png",
  },
  {
    name: "Grilled Fish",
    route:"grilledfish",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    price: "20.00",
    photo:
      "/grilledfish.png",
  },
  {
    name: "Pasta",
    route:"pasta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    price: "18.99",
    photo:
      "/pasta.png",
  },
  {
    name: "Lemon Dessert",
    route:"lemondessert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    price: "6.99",
    photo:
      "/lemondessert.png",
  },
];

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <main>
        <Slider buttons={buttons} />
        <Card meals={meals} />
      </main>
    </div>
  );
}

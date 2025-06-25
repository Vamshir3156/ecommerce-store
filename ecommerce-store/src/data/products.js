import headphonesImg from "../assets/headphones.jpg";
import speakerImg from "../assets/speaker.jpg";
import keyboardImg from "../assets/keyboard.jpg";
import monitorImg from "../assets/monitor.jpg";
import trackerImg from "../assets/tracker.jpg";
import jacketImg from "../assets/jacket.jpg";
import watchImg from "../assets/watch.jpg";
import shoesImg from "../assets/shoes.jpg";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    category: "Footwear",
    price: 59.99,
    image: shoesImg,
    description: "Comfortable and stylish sneakers for everyday wear.",
  },
  {
    id: 2,
    name: "Leather Jacket",
    category: "Clothes",
    price: 120.0,
    image: jacketImg,
    description: "Premium leather jacket, perfect for cold weather.",
  },
  {
    id: 3,
    name: "Analog Watch",
    category: "Electronics",
    price: 89.99,
    image: watchImg,
    description: "Elegant wristwatch with leather strap.",
  },
  {
    id: 4,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 199.99,
    image: headphonesImg,
    description: "Experience immersive sound with active noise cancellation.",
  },
  {
    id: 5,
    name: "Smart Fitness Tracker",
    category: "Electronics",
    price: 79.99,
    image: trackerImg,
    description: "Track your steps, heart rate, and sleep patterns with ease.",
  },
  {
    id: 6,
    name: "4K Ultra HD Monitor",
    category: "Electronics",
    price: 349.99,
    image: monitorImg,
    description: "Enjoy stunning visuals on this 27-inch 4K UHD monitor.",
  },
  {
    id: 7,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 129.99,
    image: keyboardImg,
    description: "Responsive mechanical keys with customizable RGB lighting.",
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    image: speakerImg,
    description: "Take your music anywhere with this compact speaker.",
  },
];

export default products;

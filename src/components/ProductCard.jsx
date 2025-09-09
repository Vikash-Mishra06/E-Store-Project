import React, { useRef } from "react";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger here too
gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const container = useRef();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Added to Cart");
  };

  useGSAP(() => {
    gsap.fromTo(
      container.current, // animate this specific card
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current, // trigger on this card
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div
      ref={container}
      className="relative p-4 border-3 border-gray-500 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 my-5 cursor-pointer bg-gray-100"
    >
      <img
        loading="lazy"
        className="w-full h-48 object-contain mb-4"
        src={product.image}
        alt=""
      />
      <h2 className="text-xl font-semibold">{product.title.slice(0, 20)}..</h2>
      <h3 className="text-lg">{product.category}</h3>
      <p className="text-green-500 text-xl font-semibold">
        Price: ${product.price}
      </p>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center text-center w-8 h-8 bg-red-500 group text-white text-sm rounded-full hover:w-25 hover:bg-red-600 transition-all"
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden text-center pb-1 text-xl font-semibold">
          +
        </span>
        <span className="hidden group-hover:block text-center font-semibold pb-1">
          Add to Cart
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

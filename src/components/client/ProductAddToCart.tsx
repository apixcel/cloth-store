"use client";

import { addCart } from "@/redux/features/cart/cart.slice";
import { addWishlist } from "@/redux/features/wishlist/wishlist.slice";
import { useAppDispatch } from "@/redux/hook";
import { IProduct } from "@/types/product";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Modal from "../shared/ModalCompo";
import Image from "next/image";

const ProductAddToCart = ({ data }: { data: IProduct }) => {
  const [currentSize, setCurrentSize] = useState<string>("50g");
  const [currentColor, setCurrentColor] = useState<string>("Black");
  const [quantity, setQuantity] = useState<string>("1");
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [allPoint, setAllPoint] = useState<string[]>([]);
  const [inputValues, setInputValues] = useState<
    Array<{ key: string; value: string }>
  >([]);

  const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow"];

  const addToCart = () => {
    const body = {
      productId: data._id!,
      photo: data.photo,
      name: data.name,
      rating: data.averageRating,
      price: data.discountPrice,
      quantity: quantity,
      size: currentSize,
      color: currentColor,
    };

    dispatch(addCart(body));
    toast.success("Cart added successfully!");
  };

  const addToCartCustom = () => {
    const body = {
      productId: data._id!,
      photo: data.photo,
      name: data.name,
      rating: data.averageRating,
      price: data.discountPrice,
      quantity: quantity,
      size: currentSize,
      color: currentColor,
    };

    if (allPoint.length === 15) {
      dispatch(addCart(body));
      setIsModalOpen(false);
      toast.success("Cart added successfully!");
    } else {
      toast.warning("Please Fill All The Size");
    }
  };

  const handleWishlist = () => {
    const body = {
      id: data._id!,
      photo: data.photo,
      name: data.name,
      rating: data.averageRating,
      price: data.discountPrice,
      quantity: quantity,
      size: currentSize,
      color: currentColor,
    };

    dispatch(addWishlist(body));
    toast.success("Wishlist added successfully!");
  };

  const handlePointClick = (point: string) => {
    setActivePoint(point);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    point: string
  ) => {
    const newValue = e.target.value;

    const updatedValues = inputValues.filter((item) => item.key !== point);
    if (newValue) {
      setInputValues([...updatedValues, { key: point, value: newValue }]);
    } else {
      setInputValues(updatedValues);
    }

    if (newValue) {
      setAllPoint((prevPoints) => {
        if (!prevPoints.includes(point)) {
          return [...prevPoints, point];
        }
        return prevPoints;
      });
    } else {
      setAllPoint((prevPoints) => prevPoints.filter((p) => p !== point));
    }
  };

  // console.log("aaaaaaaaaa", inputValues);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col">
            <div className="flex">
              <div className="relative bg-red-400">
                <Image src="/img/final.png" width={554} height={498} alt="" />

                {/* ========= custom points ======== */}
                {/* ========= custom points front ======== */}

                <div
                  onClick={() => handlePointClick("Shoulder Opening")}
                  className={`absolute top-[30px] left-[35%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Shoulder Opening") && "text-red-400"
                  }`}
                >
                  N
                </div>
                <div
                  onClick={() => handlePointClick("Across front")}
                  className={`absolute top-[12%] left-[30%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Across front") && "text-red-400"
                  }`}
                >
                  F
                </div>
                <div
                  onClick={() => handlePointClick("Chest 1/2")}
                  className={`absolute top-[18%] left-[30%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Chest 1/2") && "text-red-400"
                  }`}
                >
                  A
                </div>
                <div
                  onClick={() => handlePointClick("Armhole Strait")}
                  className={`absolute top-[16%] left-[10%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Armhole Strait") && "text-red-400"
                  }`}
                >
                  J
                </div>
                <div
                  onClick={() => handlePointClick("Sleeves Length")}
                  className={`absolute top-[17%] left-[5%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Sleeves Length") && "text-red-400"
                  }`}
                >
                  K
                </div>
                <div
                  onClick={() => handlePointClick("Bicep")}
                  className={`absolute top-[26%] left-[10%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Bicep") && "text-red-400"
                  }`}
                >
                  M
                </div>
                <div
                  onClick={() => handlePointClick("Waist 1/2")}
                  className={`absolute top-[34%] left-[30%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Waist 1/2") && "text-red-400"
                  }`}
                >
                  B
                </div>
                <div
                  onClick={() => handlePointClick("Hip")}
                  className={`absolute top-[46%] left-[30%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Hip") && "text-red-400"
                  }`}
                >
                  C
                </div>
                <div
                  onClick={() => handlePointClick("Length From HPS")}
                  className={`absolute top-[44%] left-[18%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Length From HPS") && "text-red-400"
                  }`}
                >
                  H
                </div>
                <div
                  onClick={() => handlePointClick("Sleeves Opening")}
                  className={`absolute top-[46%] left-[42%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Sleeves Opening") && "text-red-400"
                  }`}
                >
                  L
                </div>
                <div
                  onClick={() => handlePointClick("Bottom Hem")}
                  className={`absolute bottom-[-1%] left-[32%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Bottom Hem") && "text-red-400"
                  }`}
                >
                  D
                </div>

                {/* ========= custom points front ======== */}
                <div
                  onClick={() => handlePointClick("Shoulder")}
                  className={`absolute top-[10%] right-[12%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Shoulder") && "text-red-400"
                  }`}
                >
                  E
                </div>
                <div
                  onClick={() => handlePointClick("Across Back")}
                  className={`absolute top-[20%] right-[26%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Across Back") && "text-red-400"
                  }`}
                >
                  G
                </div>
                <div
                  onClick={() => handlePointClick("Center Back Length")}
                  className={`absolute top-[38%] right-[19%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Center Back Length") && "text-red-400"
                  }`}
                >
                  I
                </div>
                <div
                  onClick={() => handlePointClick("Bottom Hem Rib Height")}
                  className={`absolute bottom-[5%] right-[42%] font-bold text-[20px] cursor-pointer ${
                    allPoint.includes("Bottom Hem Rib Height") && "text-red-400"
                  }`}
                >
                  O
                </div>
              </div>
              <div className="w-[400px] border-2 p-[20px] roundedCustom">
                {/* <p className="text-[24px] font-bold">Info</p> */}
                {activePoint && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      {activePoint}
                    </label>
                    <input
                      type="text"
                      placeholder="value"
                      value={
                        inputValues.find((pair) => pair.key === activePoint)
                          ?.value || ""
                      }
                      onChange={(e) => handleInputChange(e, activePoint)}
                      style={{
                        border: "1px solid gray",
                        borderRadius: "6px",
                      }}
                      className="mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md focus:outline-primaryMat"
                    />
                  </div>
                )}

                <p className="mt-[20px] text-[24px] font-bold text-secondaryTxt">
                  Dress Data
                </p>
                <div className="h-[350px] overflow-y-auto smoothBar">
                  {allPoint.length > 0 ? (
                    inputValues.map((pair) => {
                      return (
                        <div
                          key={pair.key}
                          className="mt-2 text-sm text-gray-500"
                        >
                          {pair.key}: {pair.value}
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center text-borderDark mt-[20px]">
                      Input Your Dress Size
                    </p>
                  )}
                </div>
                <p className="text-center text-borderDark mt-[10px] text-small">
                  **Click on Alphabet and input values**
                </p>
              </div>
            </div>
            <button
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium p-3 rounded-md"
              onClick={addToCartCustom}
            >
              Confirm Size and Add to Cart
            </button>
          </div>
        </Modal>
      )}
      <div className="flex items-center gap-2">
        <span className="font-semibold">Size:</span>
        <span className="flex items-center gap-2">
          <button
            className="bg-primaryMat text-white font-medium p-1 roundedCustom px-[20px]"
            onClick={() => setIsModalOpen(true)}
          >
            Customize Size
          </button>
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="font-semibold">Color:</span>
        <span className="flex items-center gap-2">
          {colors.map((color, i) => (
            <button
              key={i}
              className={`${
                color === currentColor
                  ? "bg-primaryMat text-white font-medium"
                  : "text-light border"
              } hover:bg-primaryMat px-[20px] hover:text-white p-1 roundedCustom`}
              onClick={() => setCurrentColor(color)}
            >
              {color}
            </button>
          ))}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 mt-4">
        <input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue="1"
          className="w-16 p-3 border"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium p-3 rounded-md"
          onClick={() => addToCart}
        >
          Add to Cart
        </button>
        <button
          className="p-3 rounded-md border bg-white group hover:text-white hover:bg-green-500"
          onClick={handleWishlist}
        >
          <Heart className="text-green-500 group-hover:text-white" />
        </button>
      </div>
    </>
  );
};

export default ProductAddToCart;

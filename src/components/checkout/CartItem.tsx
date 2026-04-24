import { productList } from "@/src/api/productsApi";
import Quantity from "@/src/shared/Quantity";
import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div>
      <div className="bg-white py-6 shadow-xs rounded">
        <div className="border-b pb-4 px-6">
          <h2 className="text-xl font-medium">My Cart (3)</h2>
        </div>

        <div className="lg:px-6 px-4 mt-6 flex flex-col gap-4">
          {productList?.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="flex md:flex-row flex-col justify-between border-b last:border-b-0 pb-4"
            >
              <div className="flex gap-4">
                <Image
                  className="border rounded p-2"
                  src={product.thumbelImage}
                  alt="thumbelImage"
                  width={120}
                  height={120}
                />

                <div className="lg:mt-4">
                  <h2 className="font-medium">{product.title}</h2>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">Sold by:</span> Philips
                    Official
                  </p>

                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-base font-semibold text-[#1B5DD5]">
                      ৳ 1,792
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-500 line-through">৳ 2,850</p>
                      <p className="text-xs bg-[#F15A22] text-white rounded py-1 px-2">
                        -37%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col items-center md:gap-0 gap-4 -ml-8.5 lg:mt-0 mt-4">
                <Quantity />
                <div className="flex lg:mt-4 -mt-1  items-center gap-4  cursor-pointer">
                  <p className="md:text-sm text-xs font-medium hover:text-[#1B5DD5] duration-300">
                    Save for later
                  </p>
                  <p className="text-[#1B5DD5] border border-[#1B5DD5] rounded py-2 px-4 text-sm font-medium">
                    Remove
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 md:static border-t z-20 fixed bottom-0 right-0 left-0 w-full bg-white rounded py-6 shadow px-4 flex items-center justify-between md:justify-end">
          <p className="md:hidden text-lg font-semibold">৳ 253,838</p>
          <button className="bg-[#002F67] border border-[#002F67] hover:text-[#002F67] hover:bg-transparent duration-300  text-white font-medium px-6 py-3 rounded cursor-pointer" >Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

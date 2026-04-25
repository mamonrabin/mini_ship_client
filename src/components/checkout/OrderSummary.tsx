import React from "react";
import DiscountCode from "./DiscountCode";
import DropCartItems from "./DropCartItems";

const OrderSummary = () => {
  return (
    <div className="bg-white py-6 shadow-xs rounded">
      <div className="border-b pb-4 px-6">
        <h2 className="text-xl font-medium">Order Summary</h2>
      </div>
      <div className="border-b py-4">
        <DiscountCode />
      </div>
      <div className="border-b py-4">
        <DropCartItems/>
      </div>

      <div className="px-4">
        <h2 className="py-4 font-medium">Cart Subtotal</h2>
        <div className="flex flex-col gap-2">
          <p className="flex items-center justify-between text-sm">
            <span>Subtotal (3 items)</span> <span>৳ 5,233</span>
          </p>
       <p className="flex items-center justify-between text-sm">
            <span>Shipping</span> <span>৳ 0</span>
          </p>
         <p className="flex items-center justify-between text-base font-semibold text-[#1B5DD5]">
            <span>Total</span> <span>৳ 5,233</span>
          </p>
          <p className="text-sm mt-4 text-gray-500">
            Checkout now and earn 102 Points for this order Applies only to
            registered customers, may vary when logged in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

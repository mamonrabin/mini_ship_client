"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { districtList } from "@/src/api/allDistictApi";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import cod from "@/src/assets/payment/cod.svg";
import card from "@/src/assets/payment/online-payment.svg";
import bkash from "@/src/assets/payment/bkash.png";
const CheckoutForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<any>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    console.log(data);
  };
  return (
    <div className="bg-white py-6 shadow-xs rounded">
      <div className="border-b pb-4 px-6">
        <h2 className="text-xl font-medium">Shipping Address</h2>
      </div>

      <div className="px-6 py-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-3 flex flex-col gap-2"
        >
          <div className="">
            <div className="flex gap-2 mt-2">
              <input
                {...register("name")}
                className="px-2 py-2 rounded border border-[#002F67]/20 text-sm w-full outline-none"
                type="text"
                placeholder="Your Full Name*"
              />
              <input
                {...register("numbar")}
                className="px-2 py-2 rounded border border-[#002F67]/20 text-sm w-full outline-none"
                type="text"
                placeholder="Mobile Number*"
              />
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="w-full">
                <select
                  {...register("city", { required: true })}
                  className="px-2 py-2 rounded border border-[#002F67]/20 text-sm w-full outline-none"
                  // onChange={(e) => onCityChange(e.target.value)}
                >
                  <option value="">Select District</option>
                  {districtList.map((district) => (
                    <option key={district} value={district.toLowerCase()}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className="text-xs text-red-500">
                    Please select a city
                  </span>
                )}
              </div>

             <div className="flex flex-col w-full">
                 <select
                {...register("thana", { required: true })}
                className="px-2 py-2  rounded border border-[#002F67]/20 text-sm w-full outline-none"
                // onChange={(e) => onCityChange(e.target.value)}
              >
                <option value="">Select Thana</option>
                {districtList.map((district) => (
                  <option key={district} value={district.toLowerCase()}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.city && (
                <span className="text-xs text-red-500">
                  Please select a thana
                </span>
              )}
             </div>
            </div>

            <div className="mt-2">
              <input
                {...register("address", { required: true })}
                className="px-2 py-2 rounded border border-[#002F67]/20 text-sm w-full outline-none"
                type="text"
                placeholder="House no / building / street / area"
              />
              {errors.address && (
                <span className="text-xs text-red-500">
                  Address is required
                </span>
              )}
            </div>

            <div className="mt-2">
              <textarea
                {...register("message")}
                className="px-2 py-2 rounded border border-[#002F67]/20 text-sm w-full outline-none"
                placeholder="Special Note(Optional)..."
                cols={30}
                rows={6}
              ></textarea>
            </div>
          </div>

          <div>
            <h2 className="font-medium text-sm text-[#002F67]">Payment Method</h2>

            <div className="flex md:flex-row flex-col md:items-center gap-2 mt-2 w-full">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="CashOnDelivery"
                  {...register("paymentMethod", { required: true })}
                  className="hidden peer"
                />
                <div className="border border-[#002F67]/40 peer-checked:border-[#002F67] hover:border-[#002F67] duration-300 p-4 rounded w-full h-full flex items-center justify-center gap-2">
                  <div className="w-6.25 h-6.25">
                    <Image
                      src={cod}
                      alt="CashOnDelivery"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-sm font-medium">Cash On Delivery</p>
                </div>
              </label>

              <label className=" cursor-pointer">
                <input
                  type="radio"
                  value="bkash"
                  {...register("paymentMethod", { required: true })}
                  className="hidden peer"
                />
                <div className="border border-[#002F67]/40 peer-checked:border-[#002F67] hover:border-[#002F67] duration-300 p-4 rounded w-full h-full flex items-center justify-center gap-2">
                  <div className="w-6.25 h-6.25">
                  <Image src={bkash} alt="Bkash" width={40} height={40} />
                  </div>
                  <p className="text-sm font-medium">Bkash</p>
                </div>
              </label>

              <label className=" cursor-pointer">
                <input
                  type="radio"
                  value="card"
                  {...register("paymentMethod", { required: true })}
                  className="hidden peer"
                />
                <div className="border border-[#002F67]/40 peer-checked:border-[#002F67] hover:border-[#002F67] duration-300 p-4 rounded w-full h-full flex items-center justify-center gap-2">
                   <div className="w-6.25 h-6.25">
                  <Image src={card} alt="Card" width={40} height={40} />
                  </div>
                  <p className="text-sm font-medium">Online Payment</p>
                </div>
              </label>
            </div>

            {errors.paymentMethod && (
              <span className="text-xs text-red-500">
                Please select a payment method
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <input
                {...register("condition", { required: true })}
                type="checkbox"
                id="condition"
              />
              <label htmlFor="condition" className="md:text-sm text-[12px]">
                I agree to{" "}
                <span className="text-[#002F67] hover:underline duration-300 cursor-pointer">
                  Terms & Conditions
                </span>
                , and{" "}
                <span className="text-[#002F67] hover:underline duration-300 cursor-pointer">
                  Privacy Policy
                </span>{" "}
                of mixtax.
              </label>
            </div>
            {errors.condition && (
              <span className="text-xs text-red-500 ml-5">Check the box</span>
            )}
          </div>

          <div className="py-4 md:static md:border-0 border-t z-20 fixed bottom-0 right-0 left-0 w-full bg-white rounded  shadow px-4 flex items-center justify-between">
           <p className="md:hidden text-lg font-semibold">৳ 253,838</p>
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 font-medium md:text-base hover:bg-[#1B5DD5] duration-300 cursor-pointer rounded bg-[#002F67] text-sm md:w-full text-white outline-none flex justify-center items-center gap-2"
            >
              {loading && (
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
              )}
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

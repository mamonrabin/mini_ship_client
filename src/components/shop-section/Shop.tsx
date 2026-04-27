"use client";
import React, { useState } from "react";
import ShopCategory from "./ShopCategory";
import SortShop from "./SortShop";
import ShopResponsiveBar from "./ShopResponsiveBar";
import { productList } from "@/src/api/productsApi";
import ProductCard from "@/src/card/ProductCard";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);
  return (
    <div>
      <ShopCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex items-center justify-between my-4 Container">
        <SortShop />
        <ShopResponsiveBar />
      </div>

      {/* Product Grid */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 Container pb-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard item={product} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500 text-lg">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

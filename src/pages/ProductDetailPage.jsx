// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  // ------------------------------------------------------------------
  // 1️⃣ Helper – a fallback image URL (you can replace it with a real API)
  // ------------------------------------------------------------------
  const imgUrl =
    "https://www.honor.com/content/dam/honor/common/product-list/laptops/plp-banner/global/magicbook-x16-2025-pc.png";

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      {/* --------------------------------------------------------------
          2️⃣ Card wrapper – centers the card and limits max width
          -------------------------------------------------------------- */}
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* --------------------------------------------------------------
              3️⃣ Main grid – image | details
              -------------------------------------------------------------- */}
          <div className="grid md:grid-cols-2">
            {/* ---------- Image column ---------- */}
            <div className="group relative">
              {/* Keep the picture perfectly square on all screens */}
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={imgUrl}
                  alt={`Product ${id}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Optional: a small “New / Sale” ribbon */}
              {/* <span className="absolute top-3 left-3 bg-primary-blue text-white text-xs px-2 py-0.5 rounded">
                New
              </span> */}
            </div>

            {/* ---------- Details column ---------- */}
            <div className="p-8 flex flex-col">
              {/* Product title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Product {id}
              </h1>

              {/* Short description */}
              <p className="text-gray-600 mb-6 line-clamp-3">
                Detailed product description goes here. It can be up to a few
                sentences long, highlighting the most important features and
                why the shopper should buy it.
              </p>

              {/* Price badge */}
              <div className="mb-8">
                <span className="inline-block bg-primary-blue/10 text-primary-blue text-xl font-semibold px-4 py-2 rounded-md">
                  $199.99
                </span>
              </div>

              {/* Add‑to‑cart button – fills the rest of the column */}
              <button
                type="button"
                id="add-to-cart-btn"
                className="mt-auto w-full bg-primary-blue text-white font-medium py-3 rounded-lg hover:bg-primary-blue-hover transition-colors focus:outline-none focus:ring-4 focus:ring-primary-blue/30"
              >
                Add to Cart
              </button>

              {/* Optional: small separator + extra actions */}
              {/* <div className="border-t border-gray-200 mt-6 pt-4 flex justify-between text-sm">
                <button className="text-primary-blue hover:underline">
                  Add to Wishlist
                </button>
                <button className="text-primary-blue hover:underline">
                  Share
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;



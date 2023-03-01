import React, { MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { ProductType } from "../../types";

export type ProductCardProps = {
  data: ProductType;
  withCartButton?: boolean;
  onButtonClick: (e: MouseEvent<HTMLInputElement>) => void;
};

const ProductCard = ({
  data,
  withCartButton = true,
  onButtonClick,
}: ProductCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${data.id}`)}
      key={data.id}
      className="p-3 h-80 w-52 mx-auto grid grid-rows-2 border hover:border-2 rounded"
    >
      <div className="flex justify-center">
        <Image src={data.image} width={100} height={100} alt={""} />
      </div>

      <div>
        <div className="h-2/5 w-full font-sans text-sm overflow-hidden">
          {data.title}{" "}
        </div>
        <label className="px-2 rounded-full font-mono text-sm bg-red-300 inline-block mb-5">
          {data.category}
        </label>
        <div className="flex justify-between items-end">
          <div className="block">
            <div className="font-sans">${data.price}</div>
            <div className="font-sans text-xs">
              {data.rating.rate} ({data.rating.count} reviews)
            </div>
          </div>
          {withCartButton && (
            <div className="flex justify-end">
              <button
                className="px-3.5 py-1.5 bg-purple-300 flex justify-center rounded-full hover:bg-purple-400"
                onClick={onButtonClick}
              >
                <Image src={"/cart.svg"} width={24} height={24} alt={""} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

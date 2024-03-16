import Image from "next/image";
import { Product } from "../../type";

const Products = ({ productsData }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {productsData?.data?.map((item: Product) => (
        <div
          key={item?._id}
          className="border-[1px] border-gray-500 rounded-md p-5"
        >
          <Image
            src={item?.image}
            width={500}
            height={500}
            alt="product-image"
            className="w-full h-60 object-cover"
          />
          <p>{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

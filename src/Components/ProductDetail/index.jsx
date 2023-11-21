import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <div>
          <XMarkIcon className="h-6 w-6t text-dark cursor-pointer" onClick={() => context.closeProductDetail()}></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;

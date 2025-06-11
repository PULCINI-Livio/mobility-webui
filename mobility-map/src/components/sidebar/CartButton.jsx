import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function CartButton({ onButtonClick, active }) {
  return (
    <button
      onClick={onButtonClick}
      className={`flex items-center w-full border-[#009bda] my-[2vh] ${
        active ? 'bg-white text-[#009bda]' : 'bg-[#009bda] text-[#ffffff]'
      }`}
    >
      <ShoppingCartIcon className="max-h-[5vh] mx-[1vw]" /> 
      Cart Comparison
    </button>
  );
}
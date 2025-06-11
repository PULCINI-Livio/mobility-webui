import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Button from '@mui/material/Button';

export default function MapButton({ onButtonClick, active }) {
  return (
    <button
      onClick={onButtonClick}
      className={`flex items-center w-full border-[#009bda] my-[2vh] ${
        active ? 'bg-white text-[#009bda]' : 'bg-[#009bda] text-[#ffffff]'
      }`}
    >
      <GlobeAltIcon className="max-h-[5vh] mx-[1vw]" /> 
      Map
    </button>
  );
}

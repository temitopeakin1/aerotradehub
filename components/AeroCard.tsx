"use client";

import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { AeroProps } from "@/types";
import AeroDetails from "./AeroDetails";
import { calculateAeroRent} from "@/utils";

interface AeroCardProps { 
  aero: AeroProps;
}

const AeroCard = ({ aero }: AeroCardProps) => {
  const { manufacturer, model, range_nautical_miles, engine_type, cruise_speed_knots} = aero;

  const [isOpen, setIsOpen] = useState(false);

  const aeroRent = calculateAeroRent(range_nautical_miles, cruise_speed_knots);

  return (
    <div className="aero-card group">
      <div className="aero-card__content">
        <h2 className="aero-card__content-title">
          {manufacturer} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {aeroRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
            <Image src="/hero.svg" alt='aero model' fill priority className='object-contain' /> 
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/control-yoke.svg' width={20} height={20} alt='ctrl-yoke' />
            <p className='text-[12px] leading-[17px]'>
              {engine_type === "Jet" ? "Jet" : "Piston"}
            </p>
          </div>
          <div className='aero-card__icon'>
            <Image src='/tire.svg' width={20} height={20} alt='tire.svg' />
            <p className='aero-card__icon-text'>{cruise_speed_knots.toUpperCase()}
            </p>
          </div>
          <div className='aero-card__icon'>
            <Image src='/tire.svg' width={20} height={20} alt='tire.svg' />
            <p className='aero-card__icon-text'>{model.toUpperCase()}
            </p>
          </div>
          </div>

        <div className="aero-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <AeroDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} aero={aero} />
    </div>
  );
};

export default AeroCard;

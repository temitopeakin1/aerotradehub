'use client';

import { MouseEventHandler } from "react";

export interface AeroProps {
  manufacturer: string;
  model: string;
  engine_type: string;
  engine_thrust_lb_ft: string;
  max_speed_knots: string;
  cruise_speed_knots: string;
  ceiling_ft: string;
  takeoff_ground_run_ft: string;
  landing_ground_roll_ft: string;
  gross_weight_lbs: string;
  empty_weight_lbs: string;
  length_ft: string;
  height_ft: string;
  wing_span_ft: string;
  range_nautical_miles: string;
}

export interface FilterProps {
  manufacturer?: string;
  model?: string;
  limit?: number;
  engine: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface AeroCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

//? means optional in typescript
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface LoginModalProps {
  isOpen: boolean;
  onClose : () => void;
}

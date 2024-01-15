

import { FilterProps, AeroProps } from "@/types";


//develop a function
export const calculateAeroRent = (
  range_nautical_miles: string,
  cruise_speed_knots: string
) => {
  const basePricePerDay = 3000; // Base rental price of helicopter per day in dollars
  const mileageFactor = 0.1; // Additional rate per gallon of fuel capacity
  const ageFactor = 0.05; // Additional rate per year of helicopter age

  // Convert input strings to numbers
  const rangeNauticalMiles = parseFloat(range_nautical_miles);
  const age = parseFloat(cruise_speed_knots);

  // Calculate additional rate based on mileage and age
  const mileageRate = rangeNauticalMiles * mileageFactor;
  const ageRate = (new Date().getFullYear() - age) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

//create a function to use the api
export async function fetchAeros(filters: FilterProps) {
  const { manufacturer, model, limit, engine } = filters;

  const headers ={
    "X-RapidAPI-Key": 'd848779bffmsh430402c5c271017p1c13a0jsnf66376cf4333',
    'X-RapidAPI-Host': 'aircraft-by-api-ninjas.p.rapidapi.com'
  };
  const response = await fetch(
    // `https://aircraft-by-api-ninjas.p.rapidapi.com/v1/aircraft?manufacturer=${manufacturer}&model=${model}&limit=${limit}&engine=${engine}`, 
     `https://aircraft-by-api-ninjas.p.rapidapi.com/v1/aircraft?manufacturer=Gulfstream&model=G550`,  

    {
      headers: headers,
    }
  );
// parse the response as JSON
  const result = await response.json();
  return result;
}

export const generateCarImageUrl = (aero: AeroProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { manufacturer, model } = aero;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("manufacturer", manufacturer);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

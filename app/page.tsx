'use client';

import { Hero } from "@/components";
import AeroCard from "@/components/AeroCard";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { engine } from "@/constants";
import { HomeProps } from "@/types";
import { fetchAeros } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const allAeros = await fetchAeros({
      manufacturer: searchParams.manufacturer,
      model: searchParams.model || "",
      limit: searchParams.limit || 10,
      engine: searchParams.engine || "",
  });
  
  const isDataEmpty =
    !Array.isArray(allAeros) || allAeros.length < 1 || !allAeros;
  console.log(allAeros)
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className="home__text-container">
          
          <h1 className="text-3xl font-extrabold">Gallery: Luxury Jets</h1>
          <p>Take a sneak peak into our Showroom</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="engine" options={engine} />
          </div>
        </div>
        {!allAeros ? (
        <p>Loading...</p>
      ) : !isDataEmpty ? (
        <section>
          <div className='home__aeros-wrapper'>
            {allAeros.map((aero, index) => (
              <AeroCard key={aero.id || index} aero={aero} />
            ))}
          </div>

          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allAeros.length}
          />
        </section>
        ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>No matching results</h2>
              <p>{allAeros?.message}</p>
            </div>
          )}
      </div>
    </main>
  );
}

import { useState } from "react";
import CaretUp from "../Icons/CaretUp";
import LocationCard from "./LocationCard";
import { LOCATION_CARDS_SHOWN } from "../../utils/constans";
import useQueryLocations from "../../Hooks/useQueryLocations";
import Error from "../Error";
import Loader from "../Loader";

function ExploreMore() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const renderLocations = locations.slice(0, 6); //always first 6 elements will be render (hardcore code)
  // make it dynamic
  const { error, isLoading, locations } = useQueryLocations();
  const renderLocations = locations?.slice(
    currentIndex,
    currentIndex + LOCATION_CARDS_SHOWN,
  );
  const totalLocations = locations?.length ?? 0; // set default value to 0 to avoid being undefined

  function handleRightClick() {
    setCurrentIndex((prevIndex) => prevIndex + LOCATION_CARDS_SHOWN);
  }

  function handleLeftClick() {
    // if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - LOCATION_CARDS_SHOWN);
  }

  return (
    <section id="ExploreMore" className="px-24">
      <div className="mx-auto max-w-389 space-y-33 py-26">
        <div className="flex items-end justify-between">
          <div className="tracking-6">
            <h2 className="mb-4 text-[3.25rem] font-semibold">Explore more</h2>
            <p className="text-grey-700 text-[1.75rem] font-light">
              Let’s go on an adventure
            </p>
          </div>
          <div className="mb-2 flex gap-x-6">
            <button
              aria-label="left arrow"
              disabled={currentIndex === 0}
              onClick={handleLeftClick}
              className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <CaretUp className="w-6 -rotate-90 fill-white" />
            </button>
            <button
              aria-label="right arrow"
              disabled={currentIndex >= totalLocations - LOCATION_CARDS_SHOWN}
              onClick={handleRightClick}
              className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <CaretUp className="w-6 rotate-90 fill-white" />
            </button>
          </div>
        </div>
        {/* success state */}
        {!error && !isLoading && (
          <ul className="grid grid-cols-3 gap-x-29 gap-y-24">
            {renderLocations?.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </ul>
        )}

        {/* error state */}
        {error && !isLoading && (
          <Error>Something went wrong while loading locations!</Error>
        )}

        {/* loading state */}
        {isLoading && !error && <Loader />}
      </div>
    </section>
  );
}

export default ExploreMore;

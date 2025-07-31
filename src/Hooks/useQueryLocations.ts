import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../api/api";

function useQueryLocations() {
  const {
    data: locations = [], // possibily undefined for avoid this set [] default value (before react query doing its job, locations is undefined)
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Locations"],
    queryFn: getLocations,
  });

  return { locations, error, isLoading };
}

export default useQueryLocations;

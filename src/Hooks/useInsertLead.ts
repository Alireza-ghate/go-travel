import { useMutation } from "@tanstack/react-query";
import { insertLead } from "../api/api";
import { Lead } from "../utils/contentTypes";

interface useInsertLeadProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

function useInsertLead(props: useInsertLeadProps) {
  const mutation = useMutation({
    mutationFn: async (lead: Lead) => insertLead(lead),
    mutationKey: ["Lead"],
    onSuccess: props.onSuccess,
    onError: props.onError,
  });

  return mutation;
}

export default useInsertLead;

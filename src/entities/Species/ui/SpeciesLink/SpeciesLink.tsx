import { useOneSpeciesQuery } from "../../api/speciesApi";
import { CardLink } from "@/shared/ui";

interface Props {
  id: string;
}

export function SpeciesLink({ id }: Props) {
  const { data: race, isLoading, isError } = useOneSpeciesQuery({ id });

  return (
    <CardLink
      name={race?.name}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
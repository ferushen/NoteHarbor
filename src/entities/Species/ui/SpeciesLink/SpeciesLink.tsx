import { useRaceQuery } from "../../api/speciesApi";
import { CardLink } from "@/shared/ui";

interface Props {
  id: string;
}

export function SpeciesLink({ id }: Props) {
  const { data: race, isLoading, isError } = useRaceQuery({ id });

  return (
    <CardLink
      to={`/species/${race?.id}`}
      name={race?.name}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
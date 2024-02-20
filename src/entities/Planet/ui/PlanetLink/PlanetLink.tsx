import { usePlanetQuery } from "../../api/planetApi";
import { CardLink } from "@/shared/ui";

interface Props {
  id: string;
}

export function PlanetLink({ id }: Props) {
  const { data: planet, isLoading, isError } = usePlanetQuery({ id });

  return (
    <CardLink
      to={`/planets/${id}`}
      name={planet?.name}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
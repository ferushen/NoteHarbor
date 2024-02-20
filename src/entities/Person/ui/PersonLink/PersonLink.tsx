import { usePersonQuery } from "../../api/personApi";
import { CardLink } from "@/shared/ui";

interface Props {
  id: string;
}

export function PersonLink({ id }: Props) {
  const { data: person, isLoading, isError } = usePersonQuery({ id });

  return (
    <CardLink
      to={`/persons/${id}`}
      name={person?.name}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
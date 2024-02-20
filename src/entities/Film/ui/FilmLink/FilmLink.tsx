import { useFilmQuery } from "../../api/filmsApi";
import { CardLink } from "@/shared/ui";

interface Props {
  id: string;
}

export function FilmLink({ id }: Props) {
  const { data: film, isLoading, isError } = useFilmQuery({ id });

  return (
    <CardLink
      to={`/films/${id}`}
      name={film?.title}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
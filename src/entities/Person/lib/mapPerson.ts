import type { PersonFromApi } from '../api/types';
import type { Person } from '../model/types';
import { createMappedEntity, getIdFromUrl } from '@/shared/lib/helpers';

export function mapPerson(person: PersonFromApi): Person {
	const films = createMappedEntity(person.films);
	const species = createMappedEntity(person.species);

	const mappedPerson = {
		id: getIdFromUrl(person.url),
		name: person.name,
		birthYear: person.birth_year,
		eyeColor: person.eye_color,
		gender: person.gender,
		hairColor: person.hair_color,
		height: person.height,
		mass: person.mass,
		skinColor: person.skin_color,
		homeWorld: person.homeworld,
		films,
		species,
	};

	return mappedPerson;
}

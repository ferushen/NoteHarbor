import type { PersonFromApi } from '../api/types';
import type { Person } from '../model/types';
import { createMappedEntity, getIdFromUrl } from '@/shared/lib/helpers';

export function mapPersons(persons: PersonFromApi[]): Person[] {
	const mappedPersons = persons.reduce<Person[]>((acc, person) => {
		const films = createMappedEntity(person.films);
		const species = createMappedEntity(person.species);

		const mappedPerson = {
			id: getIdFromUrl(person.url),
			name: person.name,
			info: {
				birthYear: person.birth_year,
				eyeColor: person.eye_color,
				gender: person.gender,
				hairColor: person.hair_color,
				height: person.height,
				mass: person.mass,
				skinColor: person.skin_color,
				homeWorld: person.homeworld,
				species,
			},
			films,
		};
		return [...acc, mappedPerson];
	}, []);

	return mappedPersons;
}

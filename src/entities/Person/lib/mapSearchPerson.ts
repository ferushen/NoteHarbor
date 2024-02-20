import type { PersonFromApi } from '../api/types';
import type { PersonForSearch } from '../model/types';
import { getIdFromUrl } from '@/shared/lib/helpers';

export function mapSearchPerson(persons: PersonFromApi[]): PersonForSearch[] {
	if (Array.isArray(persons)) {
		const mappedPersons = persons.reduce<PersonForSearch[]>((acc, person) => {
			const mappedPerson = {
				id: getIdFromUrl(person.url),
				name: person.name,
				category: 'persons',
			};
			return [...acc, mappedPerson];
		}, []);

		return mappedPersons;
	}

	return [];
}

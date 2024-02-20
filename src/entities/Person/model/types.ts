import type { MappedEntity } from '@/shared/types/common';

export interface Person {
	id: string;
	name: string;
	info: {
		birthYear: string;
		eyeColor: string;
		gender: string;
		hairColor: string;
		height: string;
		mass: string;
		skinColor: string;
		homeWorld: string;
		species: MappedEntity;
	};
	films: MappedEntity;
}

export type PersonForSearch = Pick<Person, 'id' | 'name'> & { category: string };

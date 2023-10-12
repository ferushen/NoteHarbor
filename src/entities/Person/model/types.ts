import type { MappedEntity } from '@/shared/types/common';

export interface Person {
	id: string;
	name: string;
	birthYear: string;
	eyeColor: string;
	gender: string;
	hairColor: string;
	height: string;
	mass: string;
	skinColor: string;
	homeWorld: string;
	films: MappedEntity;
	species: MappedEntity;
}

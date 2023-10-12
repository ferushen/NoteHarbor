import type { MappedEntity } from '@/shared/types/common';

export interface Species {
	id: string;
	name: string;
	classification: string;
	designation: string;
	averageHeight: string;
	averageLifespan: string;
	eyeColors: string;
	hairColors: string;
	skinColors: string;
	language: string;
	homeWorld: string;
	persons: MappedEntity;
	films: MappedEntity;
}

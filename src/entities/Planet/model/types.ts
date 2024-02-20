import type { MappedEntity } from '@/shared/types/common';

export interface Planet {
	id: string;
	name: string;
	info: {
		diameter: string;
		rotationPeriod: string;
		orbitalPeriod: string;
		gravity: string;
		population: string;
		climate: string;
		terrain: string;
		surfaceWater: string;
	};
	persons: MappedEntity;
	films: MappedEntity;
}

export type PlanetForSearch = Pick<Planet, 'id' | 'name'> & { category: string };

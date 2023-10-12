import type { MappedEntity } from '@/shared/types/common';

export interface Planet {
	id: string;
	name: string;
	diameter: string;
	rotationPeriod: string;
	orbitalPeriod: string;
	gravity: string;
	population: string;
	climate: string;
	terrain: string;
	surfaceWater: string;
	persons: MappedEntity;
	films: MappedEntity;
}

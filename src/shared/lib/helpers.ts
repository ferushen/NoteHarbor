import { MappedEntity } from '../types/common';

export function getIdFromUrl(url: string) {
	const arr = url.split('/');
	return arr[arr.length - 2];
}

export function createMappedEntity(items: any[]) {
	return items.reduce<MappedEntity>((acc, item) => {
		return { ...acc, [getIdFromUrl(item)]: item };
	}, {});
}

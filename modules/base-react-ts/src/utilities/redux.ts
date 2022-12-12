export const createStoreActionType = (path: string, namespace: string = ''): any =>
	namespace !== '' ? `${namespace}/${path}` : path;

export const storeActionTypeCreator =
	(namespace: string = '') =>
	(path: string) =>
		createStoreActionType(path, namespace);

export const withPayloadType =
	<T>() =>
	(t: T) => ({ payload: t });

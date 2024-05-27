const BASE_URL = "https://frontend-test-assignment-api.abz.agency";

export const queryAPI = async <T>(
	url: string,
	init?: RequestInit,
): Promise<T> => {
	return fetch(BASE_URL + url, init)
		.then((res) => res.json())
		.catch((e) => console.log(e));
};

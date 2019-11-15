import apiKey from '../key/api-key';

export async function fetchJSON(url, body = {}, method = 'GET') {
	const headers = new Headers({
		'X-Auth-Token': apiKey,
	});

	const options = {
		headers,
		method,
	};
	if (method === 'POST') {
		options.body = body;
	} else if (method === 'GET') {
		let params = '';
		Object.entries(body).forEach(([ key, value ]) => {
			params += `&${key}=${value}`;
		});
		params.substring(1);
		url += `?${params}`;
	}

	const myRequest = new Request(url, options);
	let res;
	try {
		res = await fetch(myRequest);
	} catch (error) {
		alert('An error occurred');
		console.log(`Failed fetch ${url}\n${error}`);
		return null;
	}

	return await res.json();
}

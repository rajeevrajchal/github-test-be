import axios, { AxiosRequestConfig, Method } from "axios";

interface CallAxios {
	url: string;
	method: Method;
	data?: any;
	headers?: any;
	params?: any;
}

const baseUrl = "https://api.github.com/";
export const callAxios = ({
	url,
	method,
	data,
	headers,
	params,
}: CallAxios) => {
	const config: AxiosRequestConfig<any> = {
		method: method || "GET",
		url: baseUrl + url,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		data,
		params,
	};
	return axios(config)
		.then((response) => response.data)
		.catch((error) => {
			console.log("error", {
				error,
			});
			return {
				status: "error",
				message: "Something went wrong",
			};
		});
};

import { callAxios } from "../plugins/axios.plugin";
import { Request, Response } from "express";
import { map } from "lodash";

export const fetchUsers = async (req: Request, res: Response) => {
	try {
		const { page, searchQuery, perPage } = req.query;
		const repositories = await callAxios({
			url: `search/repositories?q=${searchQuery}&per_page=${perPage}&page=${page}`,
			method: "GET",
		});
		if (repositories.items.length) {
			const repoSimple = map(repositories.items, (repo) => {
				return {
					name: repo.name,
					full_name: repo.full_name,
					repo_url: repo.html_url,
					owner: repo.owner.login,
					avatar: repo.owner.avatar_url,
					owner_url: repo.owner.html_url,
					has_issues: repo.has_issues,
					forks: repo.forks,
					issues: repo.open_issues,
					default_branch: repo.default_branch,
					readme: repo.readme_url,
				};
			});
			res.status(200).json({
				status: "success",
				repositories: repoSimple,
			});
		} else {
			res.status(200).json({
				status: "success",
				repositories: [],
				code: "no-data",
			});
		}
	} catch (err) {
		res.status(500).json({
			status: "error",
			repositories: [],
			code: "server-error",
		});
	}
};

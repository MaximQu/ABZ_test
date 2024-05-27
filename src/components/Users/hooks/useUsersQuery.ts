import { UserAllData } from "@/types/getUserRes";
import { useInfiniteQuery } from "react-query";

const useUsersQuery = () => {
	return useInfiniteQuery<UserAllData, Error>({
		queryKey: "users",
		queryFn: ({ pageParam = 0 }) =>
			fetch(
				`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6&offset=${pageParam}`,
			).then((res) => {
				return res.json();
			}),
		getNextPageParam(lastPage, allPages) {
			return allPages.length * 6 < lastPage.total_users
				? allPages.length * 6
				: undefined;
		},
	});
};

export default useUsersQuery;

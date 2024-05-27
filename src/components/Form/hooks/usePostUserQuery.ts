import { PostUserRes } from "@/types/postUserRes";
import { queryAPI } from "@/utils/apiUtils";
import { useQuery } from "react-query";

export const usePostUserQuery = (formData: FormData, token: string) =>
	useQuery("user", () =>
		queryAPI<PostUserRes>("/api/v1/users", {
			method: "POST",
			body: formData,
			headers: {
				Token: token,
			},
		}),
	);

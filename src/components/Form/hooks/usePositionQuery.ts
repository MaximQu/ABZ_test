import { PositionQueryRes } from "@/types/positions";
import { queryAPI } from "@/utils/apiUtils";
import { useQuery } from "react-query";

export const usePositionQuery = () =>
	useQuery("positions", () =>
		queryAPI<PositionQueryRes>("/api/v1/positions"),
	);

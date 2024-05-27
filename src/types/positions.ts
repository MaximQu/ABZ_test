export type PositionQueryRes = {
	success: boolean;
	positions: Position[];
};

export type Position = {
	id: number;
	name: string;
};

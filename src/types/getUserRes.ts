export type UserAllData = {
	success: boolean;
	page: number;
	total_pages: number;
	total_users: number;
	count: number;
	links: {
		next_url?: string;
		prev_url?: string;
	};
	users: User[];
};

export type User = {
	id: string;
	name: string;
	phone: string;
	email: string;
	position: string;
	position_id: string;
	photo: string;
};

import { User } from "@/types/getUserRes";
import { FC, Fragment } from "react";
import { UserCard } from "..";
import st from "./style.module.scss";

type UserListProps = {
	users?: User[];
};

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<ul className={st.list}>
			{users?.map((user: User) => (
				<Fragment key={user.id}>
					<UserCard data={user} />
				</Fragment>
			))}
		</ul>
	);
};

export default UserList;

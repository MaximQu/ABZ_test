import { ButtonOrLink, Loading, Title } from "@/ui";
import { FC } from "react";
import UserList from "../UserList/UserList";
import useUsersQuery from "./hooks/useUsersQuery";
import st from "./style.module.scss";

const Users: FC = () => {
	const { isLoading, error, data, fetchNextPage, hasNextPage } =
		useUsersQuery();

	if (error) return <p>An error has occurred: {error.message}</p>;

	return (
		<section className={st.userList} id="users">
			<div className={`${st.wrapper} container`}>
				<Title title="Working with GET request" />
				{!isLoading ? (
					<UserList users={data?.pages.flatMap((item) => item.users)} />
				) : (
					<Loading />
				)}
				{hasNextPage && (
					<ButtonOrLink onClick={() => fetchNextPage()} className={st.btn}>
						Show more
					</ButtonOrLink>
				)}
			</div>
		</section>
	);
};

export default Users;

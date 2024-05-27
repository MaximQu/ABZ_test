import { User } from "@/types/getUserRes";
import { FC } from "react";
import st from "./style.module.scss";

type UserCardProps = {
	data: User;
};

const UserCard: FC<UserCardProps> = ({ data }) => {
	return (
		<li className={st.userCard}>
			<img className={st.photo} src={data.photo} alt={data.name} />
			<h3 className={st.name}>{data.name}</h3>
			<span className={st.position}>{data.position}</span>
			<a href={`mailto:${data.email}`} className={st.email} title={data.email}>
				{data.email}
			</a>
			<a href={`tel:${data.phone}`} className={st.phone}>
				{data.phone}
			</a>
		</li>
	);
};

export default UserCard;

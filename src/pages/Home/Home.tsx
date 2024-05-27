import { Hero, PostUser, Users } from "@/components";
import { FC } from "react";
const Home: FC = () => {
	return (
		<>
			<Hero />
			<Users />
			<PostUser />
		</>
	);
};

export default Home;

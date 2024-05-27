import { ButtonOrLink } from "@/ui";
import { FC } from "react";
import { Link } from "react-router-dom";
import st from "./style.module.scss";
import logo from "../../assets/images/logo.svg";

const Header: FC = () => {
	return (
		<header className={st.header}>
			<div className={`${st.wrapper} container`}>
				<Link to={"/ABZ_test"}>
					<img src={logo} alt="TESTTASK" />
				</Link>
				<div className={st.block}>
					<ButtonOrLink as="a" to={'/#users'} className={st.btn}>Users</ButtonOrLink>
					<ButtonOrLink as="a" to={'/#form'} className={st.btn}>Sign up</ButtonOrLink>
				</div>
			</div>
		</header>
	);
};

export default Header;

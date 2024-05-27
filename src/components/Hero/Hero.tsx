import { ButtonOrLink } from "@/ui";
import { FC } from "react";
import st from "./style.module.scss";

const Header: FC = () => {
	return (
		<section className={`${st.hero} container container-paddingLess`}>
			<div className={st.wrapper}>
				<h1 className={st.title}>Test assignment for front-end developer</h1>
				<p className={st.text}>
					What defines a good front-end developer is one that has skilled
					knowledge of HTML, CSS, JS with a vast understanding of User design
					thinking as they'll be building web interfaces with accessibility in
					mind. They should also be excited to learn, as the world of Front-End
					Development keeps evolving.
				</p>
				<ButtonOrLink as="a" to={'/#form'} className={st.btn}>Sign up</ButtonOrLink>
			</div>
		</section>
	);
};

export default Header;

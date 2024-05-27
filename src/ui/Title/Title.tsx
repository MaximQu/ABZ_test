import { FC } from "react";
import st from "./style.module.scss";

type TitleProps = {
	title: string;
	className?: string;
};

const Title: FC<TitleProps> = ({ title, className }) => {
	return <h2 className={`${st.title} ${className}`}>{title}</h2>;
};

export default Title;

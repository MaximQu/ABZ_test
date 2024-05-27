import { FC, ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import st from "./styles.module.scss";

type ButtonOrLinkProps = (
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
			as?: "button";
	})
	| (LinkProps & {
			as: "a";
	})
) & {
	className?: string;
	children?: ReactNode;
	styleType?: "fill" | "dark";
};

const styleTypes = {
	fill: st.fill,
	dark: st.dark,
};

const ButtonOrLink: FC<ButtonOrLinkProps> = ({
	styleType = "fill",
	className = "",
	children,
	...props
}) => {
	const styles = `${st.btn} ${styleTypes[styleType]} ${className}`;

	if (props.as === "a") {
		return (
			<Link {...props} className={styles}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} type={props.type ?? "button"} className={styles}>
			{children}
		</button>
	);
};
export default ButtonOrLink;

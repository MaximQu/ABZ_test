import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";

const NotFound = () => {
	return (
		<section className={`${st.notFound} container`}>
			<div className={st.content}>
				<h1 className={st.title}>
					<span>404</span>
					Сторінка не знайдена
				</h1>
				<p className={st.text}>Щось пішло не так, спробуйте пізніше.</p>
				<div className={st.wrapper}>
					<ButtonOrLink as="a" to="/" className={st.btn}>
						Повернутися на головну
					</ButtonOrLink>
				</div>
			</div>
		</section>
	);
};

export default NotFound;

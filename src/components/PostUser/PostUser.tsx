import { PostUserRes } from "@/types/postUserRes";
import { Title } from "@/ui";
import { queryAPI } from "@/utils/apiUtils";
import { FC, FormEvent, useState } from "react";
import { Form } from "..";
import st from "./style.module.scss";
import success from "/success.svg";

const PostUser: FC = () => {
	const [postUserRes, setPostUserRes] = useState<PostUserRes>();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const { token } = await queryAPI<{ token: string }>("/api/v1/token");

		const sendUser = await queryAPI<PostUserRes>("/api/v1/users", {
			method: "POST",
			body: formData,
			headers: {
				Token: token,
			},
		});

		setPostUserRes(sendUser);
	};
	return (
		<section className={`${st.postUser} container`} id="form">
			{postUserRes?.success ? (
				<>
					<Title title="User successfully registered" />
					<img className={st.img} src={success} alt="Success" />
				</>
			) : (
				<>
					<Title title="Working with POST request" />
					<Form handleSubmit={handleSubmit} postUserRes={postUserRes} />
				</>
			)}
		</section>
	);
};

export default PostUser;

import { PostUserRes } from "@/types/postUserRes";
import { ButtonOrLink } from "@/ui";
import { FC, FormEvent,  useState } from "react";
import { usePositionQuery } from "./hooks";
import st from "./style.module.scss";

const emailRegEx = new RegExp(
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
);

type FormProps = {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
	postUserRes?: PostUserRes;
};

const Form: FC<FormProps> = ({ handleSubmit, postUserRes }) => {
	const [formInputs, setFormInputs] = useState({
		name: "",
		email: "",
		phone: "",
		position_id: "",
		photo: "",
	});

	const handleInputChange = (value: string, name: string) => {
		setFormInputs((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	const { data } = usePositionQuery();

	return (
		<form onSubmit={handleSubmit} className={st.form}>
			<label className={`${st.label} ${!formInputs.name && st.isEmpty}`}>
				<span>Your name</span>
				<input
					type="text"
					className={st.input}
					name="name"
					minLength={2}
					maxLength={60}
					onChange={(e) => handleInputChange(e.target.value, e.target.name)}
					required
				/>
				{postUserRes?.fails?.name?.map((item) => (
					<p className={st.errorText}>{item}</p>
				))}
			</label>
			<label className={`${st.label} ${!formInputs.email && st.isEmpty}`}>
				<span>Email</span>
				<input
					type="text"
					className={st.input}
					name="email"
					pattern={`${emailRegEx}`}
					onChange={(e) => handleInputChange(e.target.value, e.target.name)}
					required
				/>
				{postUserRes?.fails?.email?.map((item) => (
					<p className={st.errorText}>{item}</p>
				))}
			</label>
			<label className={`${st.label} ${!formInputs.phone && st.isEmpty}`}>
				<span>Phone</span>
				<input
					type="text"
					className={st.input}
					name="phone"
					pattern="^[\+]{0,1}380([0-9]{9})$"
					onChange={(e) => handleInputChange(e.target.value, e.target.name)}
					required
				/>
				<p>+38 (XXX) XXX - XX - XX</p>
				{postUserRes?.fails?.phone?.map((item) => (
					<p className={st.errorText}>{item}</p>
				))}
			</label>
			<div className={st.wrapper}>
				<p className={st.text}>Select your position:</p>
				{data?.positions.map((item) => (
					<label key={item.id} className={st.block}>
						<input
							type="radio"
							className={st.inputRadio}
							name="position_id"
							value={item.id}
							onChange={(e) => handleInputChange(e.target.value, e.target.name)}
							required
						/>
						<span>{item.name}</span>
					</label>
				))}
				{postUserRes?.fails?.position_id?.map((item) => (
					<p className={st.errorText}>{item}</p>
				))}
			</div>
			<div className={st.uploadPhotoWrapper}>
				<div className={st.inputFileWrapper}>
					<label htmlFor="file-upload" className={st.labelFile}>
						Upload
					</label>
					<input
						id="file-upload"
						className={`${st.inputFile} hide`}
						onChange={(e) =>
							handleInputChange(
								e.currentTarget.files ? e.currentTarget.files[0].name : "",
								e.currentTarget.name,
							)
						}
						type="file"
						name="photo"
						required
					/>
					<div className={st.fileName}>
						{formInputs.photo ? formInputs.photo : "File name"}
					</div>
				</div>
				{postUserRes?.fails?.photo?.map((item) => (
					<p className={st.errorText}>{item}</p>
				))}
				{!postUserRes?.success && (
					<p className={st.responseText}>{postUserRes?.message}</p>
				)}
			</div>
			<ButtonOrLink
				styleType={
					Object.values(formInputs).some((item) => Boolean(item) === false)
						? "dark"
						: undefined
				}
				disabled={Object.values(formInputs).some(
					(item) => Boolean(item) === false,
				)}
				type="submit"
				className={st.btn}
			>
				Sign up
			</ButtonOrLink>
		</form>
	);
};

export default Form;

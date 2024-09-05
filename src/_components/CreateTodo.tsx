import { Button, Input, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import CalenderModal from "./CalenderModal";
import { SetStateAction, useState } from "react";
import useModal from "../Hooks/useModal";
export default function CreateTodo({ onCreate }: any) {
	const { isModalOpen, showModal, handleOk, handleCancel } = useModal();
	const [date, setDate] = useState(new Date().toJSON());

	const [content, setContent] = useState("");
	const onChangeContent = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setContent(e.target.value);
		console.log(content);
	};
	const onKeydown = (e: { keyCode: number }) => {
		if (e.keyCode === 13) {
			onSubmit();
		}
	};

	const changeDate = (cDate: SetStateAction<string>) => {
		setDate(cDate);
	};
	const onSubmit = () => {
		if (content === "") {
			return;
		}
		onCreate({ content, date });
		setContent("");
	};
	return (
		<>
			<Space.Compact style={{ width: "100%", padding: "10px " }}>
				<Button
					value="default"
					style={{ padding: "20px " }}
					onClick={showModal}
				>
					{<CalendarOutlined />}
				</Button>
				<Input disabled style={{ width: "20%" }} value={date} />
				<Input
					placeholder="일정 추가..."
					value={content}
					onKeyDown={onKeydown}
					onChange={onChangeContent}
				/>
				<Button value="default" style={{ padding: "20px " }} onClick={onSubmit}>
					Submit
				</Button>
			</Space.Compact>
			<CalenderModal
				isModalOpen={isModalOpen}
				handleOk={handleOk}
				handleCancel={handleCancel}
				changeDate={changeDate}
			/>
		</>
	);
}

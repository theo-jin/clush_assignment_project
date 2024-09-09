import { Button, Checkbox, Space } from "antd";
import dayjs from "dayjs";
import type { Todo } from "../hooks/useTodos";

import { memo, SetStateAction, useContext, useState } from "react";
import { TodoDispatchContext } from "../App";

function TodoItem({ id, isDone, content, date }: Todo) {
	const { updateTodo, deleteTodo } = useContext(TodoDispatchContext);
	const [newContent, setNewContent] = useState(content);
	const [onEdit, setOnEdit] = useState(false);
	const onChangeCheckbox = () => {
		updateTodo(id);
	};

	const onClickDeleteButton = () => {
		deleteTodo(id);
	};
	const onStartEditButton = () => {
		setOnEdit(!onEdit);
	};
	const onChangeContent = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setNewContent(e.target.value);
	};
	const onSubmitEditButton = () => {
		updateTodo(id, newContent);
		setOnEdit(!onEdit);
	};
	const textStyle = {
		width: "80%",
		textDecoration: isDone ? "line-through" : "none",
	};
	return (
		<Space.Compact style={{ width: "100%" }}>
			{onEdit ?
				<div style={{ width: "80%" }}>
					<Checkbox
						style={{ margin: "10px" }}
						onChange={onChangeCheckbox}
						defaultChecked={isDone}
						type="checkbox"
					/>
					<input
						style={{ width: "80%" }}
						value={newContent}
						onChange={onChangeContent}
					/>
				</div>
			:	<div style={textStyle}>
					<Checkbox
						style={{ margin: "10px" }}
						onChange={onChangeCheckbox}
						defaultChecked={isDone}
						type="checkbox"
					/>
					{content}
				</div>
			}
			<div
				style={{
					width: "10%",
					margin: "0px",
				}}
			>
				{dayjs(date).format("YYYY-MM-DD")}
			</div>
			{onEdit ?
				<>
					<Button style={{ marginRight: "5px" }} onClick={onSubmitEditButton}>
						완료
					</Button>
					<Button onClick={onStartEditButton}>취소</Button>
				</>
			:	<>
					<Button style={{ marginRight: "5px" }} onClick={onStartEditButton}>
						수정
					</Button>
					<Button onClick={onClickDeleteButton}>삭제</Button>
				</>
			}
		</Space.Compact>
	);
}

export default memo(TodoItem);

import { Button, Input, Space } from "antd";
import dayjs from "dayjs";
import type { Todo } from "../hooks/useTodos";
import type { UseTodo } from "../hooks/useTodos";
import { SetStateAction, useState } from "react";

type TodoItemProps = {
	todo: Todo;
	updateTodo: UseTodo["updateTodo"];
	deleteTodo: UseTodo["deleteTodo"];
};

function TodoItem({ todo, updateTodo, deleteTodo }: TodoItemProps) {
	const [newContent, setNewContent] = useState(todo.content);
	const [onEdit, setOnEdit] = useState(false);
	const onChangeCheckbox = () => {
		updateTodo(todo.id);
	};

	const onClickDeleteButton = () => {
		deleteTodo(todo.id);
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
		updateTodo(todo.id, newContent);
		setOnEdit(!onEdit);
	};
	const textStyle = {
		width: "80%",
		textDecoration: todo.isDone ? "line-through" : "none",
	};
	return (
		<Space.Compact style={{ width: "100%" }}>
			{onEdit ?
				<div style={{ width: "80%" }}>
					<input
						style={{ margin: "10px" }}
						onChange={onChangeCheckbox}
						defaultChecked={todo.isDone}
						type="checkbox"
					/>
					<input
						style={{ width: "80%" }}
						value={newContent}
						onChange={onChangeContent}
					/>
				</div>
			:	<div style={textStyle}>
					<input
						style={{ margin: "10px" }}
						onChange={onChangeCheckbox}
						defaultChecked={todo.isDone}
						type="checkbox"
					/>
					{todo.content}
				</div>
			}
			<div
				style={{
					width: "10%",
					margin: "0px",
				}}
			>
				{dayjs(todo.date).format("YYYY-MM-DD")}
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

export default TodoItem;

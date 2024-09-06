import { Button } from "antd";
import dayjs from "dayjs";
import type { Todo } from "../hooks/useTodos";
import type { UseTodo } from "../hooks/useTodos";

type TodoItemProps = {
	todo: Todo;
	updateTodo: UseTodo["updateTodo"];
	deleteTodo: UseTodo["deleteTodo"];
};

function TodoItem({ todo, updateTodo, deleteTodo }: TodoItemProps) {
	const onChangeCheckbox = () => {
		updateTodo(todo.id);
	};

	const onClickDeleteButton = () => {
		deleteTodo(todo.id);
	};
	const textStyle = {
		padding: "10px",
		textDecoration: todo.isDone ? "line-through" : "none",
	};
	return (
		<div style={textStyle}>
			<input
				onChange={onChangeCheckbox}
				defaultChecked={todo.isDone}
				type="checkbox"
			/>
			{todo.content}
			{dayjs(todo.date).format("YYYY-MM-DD")}
			<Button>수정</Button>
			<Button onClick={onClickDeleteButton}>삭제</Button>
		</div>
	);
}

export default TodoItem;

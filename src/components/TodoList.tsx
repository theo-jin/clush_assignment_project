import { Divider, List } from "antd";
import TodoItem from "./TodoItem";

import { useStateTodo } from "../hooks/useTodos";

function TodoList() {
	const todos = useStateTodo();

	return (
		<>
			<Divider orientation="left">Todo List</Divider>
			<List
				style={{ height: "700px", overflowY: "scroll" }}
				bordered
				dataSource={todos}
				renderItem={(todo) => (
					<List.Item>
						<div style={{ width: "100%", margin: "0px" }}>
							<TodoItem key={todo.id} {...todo} />
						</div>
					</List.Item>
				)}
			/>
		</>
	);
}

export default TodoList;

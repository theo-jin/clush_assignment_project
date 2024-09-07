import { Divider, List } from "antd";
import TodoItem from "./TodoItem";
import type { Todo } from "../hooks/useTodos";
import type { UseTodo } from "../hooks/useTodos";

type TodoListProps = {
	todos: Todo[];
	updateTodo: UseTodo["updateTodo"];
	deleteTodo: UseTodo["deleteTodo"];
};

function TodoList({ todos, updateTodo, deleteTodo }: TodoListProps) {
	return (
		<>
			<Divider orientation="left">Todo List</Divider>
			<List
				style={{ height: "700px", overflowY: "scroll" }}
				bordered
				dataSource={todos}
				renderItem={(todo: Todo) => (
					<List.Item>
						<div style={{ width: "100%", margin: "0px" }}>
							<TodoItem
								key={todo.id}
								todo={todo}
								updateTodo={updateTodo}
								deleteTodo={deleteTodo}
							/>
						</div>
					</List.Item>
				)}
			/>
		</>
	);
}

export default TodoList;

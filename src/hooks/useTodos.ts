import { useContext	 } from "react";
import {
	TodoDispatchContext,
	TodoStateContext,
} from "../providers/TodoProvider";

export type Todo = {
	id: string;
	isDone: boolean;
	content: string;
	date: Date;
};

export const useStateTodo = () => {
	const todos = useContext(TodoStateContext);

	if (!todos) {
		throw new Error("todos Error");
	}
	return todos;
};

export const useDispatchTodo = () => {
	const dispatch = useContext(TodoDispatchContext);
	if (!dispatch) {
		throw new Error("dispatch Error");
	}

	const createTodo = ({
		content,
		date,
	}: {
		content: string;
		date: Date;
	}): void => {
		dispatch({
			type: "CREATE",
			payload: {
				content: content,
				date: date,
			},
		});
	};

	const updateTodo = (id: string, content?: string) => {
		dispatch({
			type: "UPDATE",
			payload: { id, content },
		});
	};

	const deleteTodo = (payload: string) => {
		dispatch({
			type: "DELETE",
			payload: payload,
		});
	};

	return { createTodo, deleteTodo, updateTodo };
};

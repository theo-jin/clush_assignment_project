import { nanoid } from "nanoid";
import type { Todo } from "../hooks/useTodos";

export type Action =
	| { type: "CREATE"; payload: { content: string; date: Date } }
	| { type: "UPDATE"; payload: string }
	| { type: "DELETE"; payload: string };

export function todoReducer(state: Todo[], action: Action): Todo[] {
	switch (action.type) {
		case "CREATE":
			return [{ id: nanoid(8), isDone: false, ...action.payload }, ...state];
		case "UPDATE":
			return state.map((item) =>
				item.id === action.payload ? { ...item, isDone: !item.isDone } : item,
			);
		case "DELETE":
			return state.filter((item) => item.id !== action.payload);

		default:
			return state;
	}
}

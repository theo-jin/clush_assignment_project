import { faker } from "@faker-js/faker";
import type { Todo } from "../hooks/useTodos";

export default function seedTodos(): Array<Todo> {
	return Array.from({ length: 30 }).map(() => ({
		id: faker.string.nanoid(8),
		isDone: faker.datatype.boolean(),
		content: faker.word.sample(),
		date: faker.date.future(),
	}));
}

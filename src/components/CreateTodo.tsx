import { Button, DatePicker, Form, FormProps, Input, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";

import type { UseTodo } from "../hooks/useTodos";
import { memo } from "react";

type FieldType = {
	date: Dayjs;
	content: string;
};
type CreateTodoProps = {
	createTodo: UseTodo["createTodo"];
};
function CreateTodo({ createTodo }: CreateTodoProps) {
	const [form] = Form.useForm();

	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		createTodo({ content: values.content, date: values.date.toDate() });
		form.resetFields();
	};

	return (
		<Form form={form} onFinish={onFinish} initialValues={{ date: dayjs() }}>
			<Space.Compact style={{ width: "100%", padding: "10px" }}>
				<Form.Item name="date" style={{ width: "20%" }}>
					<DatePicker style={{ width: "100%" }} />
				</Form.Item>

				<Form.Item
					name="content"
					rules={[{ required: true, message: "할 일을 입력해 주세요." }]}
					style={{ width: "100%" }}
				>
					<Input placeholder="할 일 입력..." />
				</Form.Item>

				<Form.Item>
					<Button type="primary" style={{ width: "100%" }} htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Space.Compact>
		</Form>
	);
}

export default memo(CreateTodo);

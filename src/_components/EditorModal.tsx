import { Modal } from "antd";

export default function EditorModal({
	open,
	onCancel,
	clickData,
	handleOk,
}: any) {
	const textStyle = {
		padding: "10px",
		textDecoration: clickData.clickIsDone ? "line-through" : "none",
	};

	return (
		<Modal open={open} onCancel={onCancel} onOk={handleOk}>
			<div style={textStyle}>{clickData.clickTitle}</div>
		</Modal>
	);
}

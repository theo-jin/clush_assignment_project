import React, { useState } from "react";
import { Calendar, Modal, theme } from "antd";

import dayjs, { Dayjs } from "dayjs";

export default function CalenderModal({
	isModalOpen,
	handleOk,
	handleCancel,
	changeDate,
}: any) {
	const [value, setValue] = useState(() => dayjs(new Date().toJSON()));
	const [selectedValue, setSelectedValue] = useState(() =>
		dayjs(new Date().toJSON()),
	);

	const onSelect = (newValue: Dayjs) => {
		setValue(newValue);
		setSelectedValue(newValue);
		changeDate(newValue.format("YYYY-MM-DD"));
	};

	const onPanelChange = (newValue: Dayjs) => {
		setValue(newValue);
	};

	return (
		<Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
			<div style={{ padding: "10px " }}>
				<Calendar
					fullscreen={false}
					value={value}
					onSelect={onSelect}
					onPanelChange={onPanelChange}
				/>
			</div>
		</Modal>
	);
}

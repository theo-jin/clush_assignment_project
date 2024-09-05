import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "../Hooks/useMediaQuery";

import EditorModal from "./EditorModal";
import useModal from "../Hooks/useModal";

function TodoCalender({ mockData }: any) {
	let clickId, clickTitle, clickIsDone, clickStart;
	const { isModalOpen, showModal, handleOk, handleCancel } = useModal();
	const [clickData, setClickData] = useState({
		clickId,
		clickTitle,
		clickIsDone,
		clickStart,
	});

	function handleEventClick(e: { event: any }) {
		setClickData({
			clickId: e.event._def.publicId,
			clickTitle: e.event._def.title,
			clickIsDone: e.event._def.extendedProps.isDone,
			clickStart: e.event._instance.range.start,
		});
		showModal();
	}
	const calenderMediaQuery = useMediaQuery("(min-width: 768px)");
	const calendarRef = useRef<FullCalendar>(null);

	useLayoutEffect(() => {
		const calendarApi = calendarRef!.current!.getApi();
		calendarApi.changeView(calenderMediaQuery ? "dayGridMonth" : "listMonth");
	}, [calenderMediaQuery]);
	console.log(clickData);

	return (
		<div>
			<FullCalendar
				plugins={[listPlugin, dayGridPlugin, interactionPlugin]}
				ref={calendarRef}
				initialView={calenderMediaQuery ? "dayGridMonth" : "listMonth"}
				headerToolbar={{
					left: "dayGridMonth,listMonth",
					center: "title",
					right: "prev,next today",
				}}
				dayMaxEvents={true}
				events={mockData}
				height={"600px"}
				eventClick={handleEventClick}
				eventDisplay={"auto"}
			/>

			<EditorModal
				open={isModalOpen}
				onCancel={handleCancel}
				clickData={clickData}
				handleOk={handleOk}
			/>
		</div>
	);
}

export default TodoCalender;

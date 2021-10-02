import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePickerEndDate({
	onChange,
	selected,
	minDate,
	startDate,
	endDate,
}) {
	return (
		<DatePicker
			className="text-center outline-none"
			selected={selected}
			onChange={onChange}
			startDate={startDate}
			endDate={endDate}
			selectsEnd
			placeholderText="Add dates"
			minDate={startDate}
		/>
	);
}

export default DateRangePickerEndDate;

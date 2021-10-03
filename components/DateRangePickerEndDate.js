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
			className="text-center outline-none group-hover:bg-gray-50"
			selected={selected}
			onChange={onChange}
			startDate={startDate}
			endDate={endDate}
			selectsEnd
			placeholderText="Add dates"
			minDate={minDate}
		/>
	);
}

export default DateRangePickerEndDate;

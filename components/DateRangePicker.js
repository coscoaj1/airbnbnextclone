import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker({ startDate, selected, onChange }) {
	return (
		<DatePicker
			className="text-center outline-none group-hover:bg-gray-50"
			selected={selected}
			onChange={onChange}
			placeholderText="Enter dates"
			startDate={startDate}
			selectsStart
			shouldCloseOnSelect={false}
			minDate={new Date()}
		/>
	);
}

export default DateRangePicker;

import React, { useState, useEffect } from 'react';
import { useDayzed } from 'dayzed';
import {
	monthNamesFull,
	weekdayNamesShort,
} from '../public/data/calendarUtils';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Right from '../public/images/chevron-right-svgrepo-com (2).svg';
import Left from '../public/images/chevron-left-svgrepo-com.svg';

function Calendar(props) {
	return <div className="w-full">{props.children}</div>;
}

function Month(props) {
	return <div className="grid grid-cols-7 py-12">{props.children}</div>;
}

function DayOfMonth(props) {
	const { selected, unavailable, today, isinrange } = props;

	let cellStyle = 'hover:border-black border-2 border-transparent rounded-full';
	if (today)
		cellStyle = 'hover:border-black border-2 border-transparent rounded-full';
	if (selected) cellStyle = 'rounded-full text-white bg-black';
	if (isinrange) cellStyle = 'bg-gray-200';
	if (unavailable) cellStyle = 'opacity-25 cursor-not-allowed';

	return (
		<button
			type="button"
			className={`${cellStyle} col-span-1 text-center rounded-full w-12 h-12 text-sm`}
			{...props}
		>
			{props.children}
		</button>
	);
}

function DayOfMonthEmpty(props) {
	return <div className="col-span-1 text-center text-xs">{props.children}</div>;
}

function RangeDatepicker(props) {
	const [hoveredDate, setHoveredDate] = useState(null);

	let { calendars, getBackProps, getForwardProps, getDateProps } =
		useDayzed(props);

	useEffect(() => {
		function navigate(e) {
			switch (e.keyCode) {
				case 37: // leftArrow
					getKeyOffset(-1);
					break;
				case 38: // leftArrow
					getKeyOffset(-7);
					break;
				case 39: // leftArrow
					getKeyOffset(1);
					break;
				case 40: // leftArrow
					getKeyOffset(7);
					break;
				default:
					break;
			}
		}

		addEventListener('keydown', navigate);

		return () => removeEventListener('keydown', navigate);
	});

	function getKeyOffset(number) {
		const e = document.activeElement;
		let buttons = document.querySelectorAll('button');

		buttons.forEach((el, i) => {
			const newNodeKey = i + number;
			if (el == e) {
				if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
					buttons[newNodeKey].focus();
				} else {
					buttons[0].focus();
				}
			}
		});
	}

	function onMouseLeave() {
		setHoveredDate(null);
	}

	function onMouseEnter(date) {
		if (!props.selected.length) return;

		setHoveredDate(date);
	}

	function isInRange(date) {
		let { selected } = props;

		if (selected.length) {
			let firstSelected = selected[0].getTime();
			if (selected.length === 2) {
				let secondSelected = selected[1].getTime();
				return firstSelected < date && secondSelected > date;
			} else {
				return (
					hoveredDate &&
					((firstSelected < date && hoveredDate >= date) ||
						(date < firstSelected && date >= hoveredDate))
				);
			}
		}

		return false;
	}

	if (calendars.length) {
		return (
			<Calendar onMouseLeave={onMouseLeave}>
					<ClickAwayListener onClickAway={props.onClickAway}>
					<div className="flex mt-3 mb-3 max-w-3.5xl justify-center max-h-lg rounded-3xl mx-auto gap-8 bg-white  text-black overflow-y-auto">
							<div>
								<button className="pt-32 pl-5" {...getBackProps({ calendars })}>
									<Left />
								</button>
							</div>
							{calendars.map((calendar) => (
								<Month key={`${calendar.month}${calendar.year}`}>
									<div className="col-span-7 flex justify-center pt-20 pb-6">
										{monthNamesFull[calendar.month]} {calendar.year}
									</div>
									{weekdayNamesShort.map((weekday) => (
										<DayOfMonthEmpty
											key={`${calendar.month}${calendar.year}${weekday}`}
										>
											{weekday}
										</DayOfMonthEmpty>
									))}
									{calendar.weeks.map((week, windex) =>
										week.map((dateObj, index) => {
											let key = `${calendar.month}${calendar.year}${windex}${index}`;
											if (!dateObj) {
												return <DayOfMonthEmpty key={key} />;
											}
											let { date, selected, selectable, today } = dateObj;
											return (
												<DayOfMonth
													key={key}
													{...getDateProps({
														dateObj,
														onMouseEnter: () => onMouseEnter(date),
													})}
													selected={selected}
													unavailable={!selectable ? 1 : 0}
													today={today ? 1 : 0}
													isinrange={isInRange(date) ? 1 : 0}
												>
													{date.getDate()}
												</DayOfMonth>
											);
										})
									)}
								</Month>
							))}
							<div>
								<button className="pt-32 pr-5" {...getForwardProps({ calendars })}>
									<Right />
								</button>
							</div>
					</div>
			</ClickAwayListener>
				</Calendar>
		);
	}

	return null;
}

function Range(props) {
	let minDate = new Date();
	minDate.setDate(minDate.getDate() - 1);
	
	return (
		<>
				<RangeDatepicker
				onClickAway={props.onClickAway}
					minDate={minDate}
					date={props.date}
					selected={props.selected}
					onDateSelected={props.onDateSelected}
					monthsToDisplay={2}
				/>
		</>
	);
}

export default Range;

// this component was forked then customized from lorenzobersano on codesandbox.io

{
	/* {selectedDates.length === 2 && (
<div style={{ paddingTop: 20, textAlign: "center" }}>
<p>Selected:</p>
<p>{`${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`}</p>
</div>
)} */
}

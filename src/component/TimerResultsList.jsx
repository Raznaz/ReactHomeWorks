import React from 'react';

function TimerResultsList({ result }) {
	return (
		<div>
			{result.map((obj, i) => (
				<p key={obj.ms + obj.sec + i}>
					{obj.hr}:{obj.min}:{obj.sec}:{obj.ms}
				</p>
			))}
		</div>
	);
}

export default TimerResultsList;

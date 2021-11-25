import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function PersoProgressBar({
	completed,
	height,
	bgColor,
	isLabelVisible,
	maxCompleted,
	barContainerClassName
}) {
	return (
		<>
			<ProgressBar
				completed={completed}
				height="8px"
				bgColor={bgColor}
				isLabelVisible={isLabelVisible}
				maxCompleted={maxCompleted}
				barContainerClassName={barContainerClassName}
				animateOnRender={true}
			/>
		</>
	);
}

export default PersoProgressBar;

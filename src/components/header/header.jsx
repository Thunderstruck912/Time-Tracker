import React from "react";
import {Helmet} from "react-helmet-async";
import {useSelector} from "react-redux";

const Header = () => {
	const timer = useSelector((state) => state.time.timer);
	const status = useSelector((state) => state.status);

	return (
		<Helmet>
			<title>{`${timer.minutes >= 10 ? timer.minutes : "0" + timer.minutes}:${
				timer.seconds >= 10 ? timer.seconds : "0" + timer.seconds
			} · ${status.littlePause ? "Перерыв" : "Работа"}`}</title>
			<link
				rel="shortcut icon"
				href={
					status.littlePause
						? require("./icon/break.ico")
						: require("./icon/work.ico")
				}
				data-react-helmet="true"
				type="image/x-icon"
			/>
		</Helmet>
	);
};

export default Header;

import React, {useState, useEffect} from "react";
import {setTotalCountAction} from "../../store/totalCountReducer";
import {useSelector, useDispatch} from "react-redux";
import classes from "./TotalCount.module.css";
import {DATA} from "../../utilites/date";

const statsName = "DATA:STATISTICS";

const TotalCount = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.totalCount);
	const status = useSelector((state) => state.status);
	const [stats, setStats] = useState(
		JSON.parse(localStorage.getItem(statsName)) || [],
	);
	const {dateNow, dateNextDay} = DATA;

	useEffect(() => {
		addStats();
		if (stats && status.reloadStatus)
			localStorage.setItem(statsName, JSON.stringify(stats));
	}, [count.totalCount]);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem(statsName))) {
			let statistics = JSON.parse(localStorage.getItem(statsName));
			if (statistics.length >= 1) {
				dispatch(setTotalCountAction(statistics[statistics.length - 1].count));
				if (statistics[statistics.length - 1].data === dateNextDay()) {
					localStorage.removeItem(statsName);
					dispatch(setTotalCountAction(0));
				}
			}
		}
	}, []);

	const addStats = () => {
		let newStats = {data: dateNow(), count: count.totalCount + 1};
		setStats([...stats, newStats]);
	};

	return (
		<div className={classes.count_wrapper}>
			<span className={classes.count}>{count.totalCount}</span>
			<span>из</span>
			<span>{count.defaultCount}</span>
			<span>помидорок</span>
			{count.totalCount >= count.defaultCount ? (
				<span className={classes.congrat}>- День прожит не зря!</span>
			) : (
				<span></span>
			)}
		</div>
	);
};

export default TotalCount;

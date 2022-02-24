import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTotalCountAction} from "../store/totalCountReducer";
import {DATA} from "../utilites/date";

const statsName = "DATA:STATISTICS";
const {dateNow} = DATA;

export const useStats = ({count, status}) => {
	const dispatch = useDispatch();
	const statistics = JSON.parse(localStorage.getItem(statsName));
	const [stats, setStats] = useState(statistics || []);

	// ADD AND SAVE LOCAL STORAGE //
	useEffect(() => {
		const newStats = {data: dateNow(), count: count.totalCount + 1};
		setStats([...stats, newStats]);
		if (stats && status.reloadStatus)
			localStorage.setItem(statsName, JSON.stringify(stats));
	}, [count.totalCount]);

	// LOAD AND AUTO UPDATE NEXT DAY //

	useEffect(() => {
		if (statistics && statistics.length >= 1) {
			dispatch(setTotalCountAction(statistics[statistics.length - 1].count));
			if (statistics[0].data !== statistics[statistics.length - 1].data) {
				localStorage.removeItem(statsName);
				dispatch(setTotalCountAction(0));
			}
		}
	}, []);
};

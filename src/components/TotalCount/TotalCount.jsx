import {useSelector} from "react-redux";
import {useStats} from "../../hooks/useStats"
import classes from "./TotalCount.module.css";

const TotalCount = () => {
	const count = useSelector((state) => state.totalCount);
	const status = useSelector((state) => state.status);

	// COUNT LOGIC //
	useStats({count, status});

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

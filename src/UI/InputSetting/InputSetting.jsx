import classes from "./InputSetting.module.css";

const InputSetting = (props) => {
	return (
		<div className={classes.input_setting}>
			<span>{props.tittle}</span>
			<div className={classes.input_wrapper}>
				<span className={classes.minus} onClick={props.remove}>
					-
				</span>
				<span className={classes.input_time}>
					<input
						type="text"
						value={props.value}
						onChange={(e) => e.preventDefault}
						className={classes.input}
						data-type="number"
					/>
					{props.count ? "" : " мин"}
				</span>
				<span className={classes.plus} onClick={props.add}>
					{" "}
					+
				</span>
			</div>
		</div>
	);
};

export default InputSetting;

import React from "react";
import classes from "./NavBtn.module.css";
import {useSelector, useDispatch} from "react-redux";
import {navSettingsStatus} from "../../store/navBarReducer";

const NavBtn = () => {
	const dispatch = useDispatch();
	const navSettings = useSelector((state) => state.navStatus);
	return (
		<nav className={classes.nav}>
			<div
				className={
					navSettings.settingStatus
						? `${classes.nav_active}`
						: `${classes.nav_disabled}`
				}
				onClick={() => {
					dispatch(navSettingsStatus(!navSettings.settingStatus));
				}}>
				<input type="button" className={classes.btn} value="Настройки" />
			</div>
		</nav>
	);
};

export default NavBtn;

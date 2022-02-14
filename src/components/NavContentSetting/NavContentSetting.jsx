import React from "react";
import classes from "./NavContentSetting.module.css";
import {useSelector} from "react-redux";

import DefaultTimeSetting from "./NavSettingTimer/defaultTimeSetting";
import DefaultLitlePauseSetting from "./NavSettingTimer/defaultLitlePauseSetting";
import DefaultLargePauseSetting from "./NavSettingTimer/defaultLargePauseSetting";
import DefaultCountSetting from "./NavSettingTimer/defaultCountSetting";
import DefaultRoundSetting from "./NavSettingTimer/defaultRoundSetting";
import DefaultSoundSetting from "./NavSettingTimer/defaultSoundSetting";
import DefaultResetCount from "./NavSettingTimer/defaultResetCount";
import DefaultGlobalReset from "./NavSettingTimer/defaultGlobalReset";

const NavContentSetting = () => {
	const navSettings = useSelector((state) => state.navStatus);

	const check = () => {
		if (navSettings.settingStatus === null) return classes.navContent_wrapper;
		else return classes.navContent_wrapper_disabled;
	};
	return (
		<div
			className={
				navSettings.settingStatus
					? `${classes.navContent_wrapper_active}`
					: check()
			}>
			<div className={classes.setting_wrapper}>
				<DefaultTimeSetting tittle={"Время работы"} />
				<DefaultLitlePauseSetting tittle={"Маленький перерыв"} />
				<DefaultLargePauseSetting tittle={"Большой перерыв"} />
			</div>
			<div className={classes.setting_wrapper}>
				<DefaultCountSetting tittle={"Помидорок за день"} />
				<DefaultRoundSetting tittle={"Помидорок в раунде"} />
			</div>
			<div className={classes.setting_wrapper}>
				<DefaultSoundSetting tittle={"Звуковое уведомление"} />
				<DefaultResetCount tittle={"Очистить счётчик"} value={"Очистить"} />
				<DefaultGlobalReset tittle={"Сбросить настройки"} value={"Сбросить"} />
			</div>
		</div>
	);
};

export default NavContentSetting;

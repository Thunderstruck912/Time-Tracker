import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setSoundStatusAction} from "../../../store/timerStatus";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import RadioInputSetting from "../../../UI/RadioInputSetting/RadioInputSetting";
import useSound from "use-sound";
import swipeSound from "./sound/bell.mp3";

const DefaultSoundSetting = (props) => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.status);
	const swipeInput = () => dispatch(setSoundStatusAction(!status.sound));

	useLocalStorage("SETTING:SOUND_STATUS", status.sound, setSoundStatusAction);

	const [playActive] = useSound(swipeSound, {
		soundEnabled: status.sound,
		volume: 0.4,
	});

	useEffect(() => {
		playActive();
	}, [status.littlePause]);

	return (
		<RadioInputSetting
			tittle={props.tittle}
			swipe={swipeInput}
			status={status.sound}
			value_on={"Вкл"}
			value_off={"Выкл"}
		/>
	);
};

export default DefaultSoundSetting;

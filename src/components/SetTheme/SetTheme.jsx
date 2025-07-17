import { useState } from 'react';
import { COLORS } from '../../styles/constStyles';
import { StyledLabel } from './SetTheme.styles';
import { checkWindowTheme } from '../stylesFunctions';

const SetTheme = () => {
	const [theme, setColor] = useState(chkState);
	const selectTheme = theme
		? COLORS.darkTheme.imageTheme
		: COLORS.lightTheme.imageTheme;
	console.log(theme);
	return (
		<>
			<input
				id="themeChange"
				type="checkbox"
				defaultChecked={theme}
				onClick={() => setColor(!theme)}
				hidden
			></input>
			<StyledLabel htmlFor="themeChange" $theme={selectTheme}></StyledLabel>
		</>
	);
};

const chkState = checkWindowTheme();

export default SetTheme;

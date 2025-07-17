import { COLORS } from '../../styles/constStyles';

import { StyledLabel } from './SetTheme.styles';

const SetTheme = ({ theme, setColor }) => {
	const selectTheme = theme
		? COLORS.darkTheme.imageTheme
		: COLORS.lightTheme.imageTheme;

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

export default SetTheme;

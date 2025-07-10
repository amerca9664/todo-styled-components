import { useState } from 'react';
import { COLORS } from '../../styles/constStyles';
import { StyledLabel } from './SetTheme.styles';

const SetTheme = () => {
	const [theme, setColor] = useState(false);
	console.log(theme);
	return (
		<>
			<input
				id='themeChange'
				type='checkbox'
				onClick={() => setColor(!theme)}
			></input>
			<StyledLabel
				htmlFor='themeChange'
				$theme={COLORS.darkTheme.imageTheme}
			></StyledLabel>
		</>
	);
};

export default SetTheme;

import { useState } from 'react';
import Content from './components/Content/Content';
import { checkWindowTheme } from './components/stylesFunctions';
import { COLORS } from './styles/constStyles';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [theme, setColor] = useState(chkState);
	const themeStyle = theme ? COLORS.darkTheme : COLORS.lightTheme;
	return (
		<>
			<GlobalStyles
				$image={themeStyle.imageBackground}
				$background={themeStyle.backgroundBody}
			/>
			<Content
				theme={theme}
				themeStyle={themeStyle}
				setColor={setColor}
			></Content>
		</>
	);
};
const chkState = checkWindowTheme();
export default App;

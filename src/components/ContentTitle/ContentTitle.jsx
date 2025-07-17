import SetTheme from '../SetTheme/SetTheme';
import { StyledH1, StyledHeader } from './contentTile.styles';

const ContentTitle = ({ theme, setColor }) => {
	return (
		<StyledHeader>
			<StyledH1>TODO</StyledH1>
			<SetTheme theme={theme} setColor={setColor}></SetTheme>
		</StyledHeader>
	);
};

export default ContentTitle;

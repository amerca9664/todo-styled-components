import SetTheme from '../SetTheme/SetTheme';
import { StyledH1, StyledHeader } from './contentTile.styles';

const ContentTitle = () => {
	return (
		<StyledHeader>
			<StyledH1>TODO</StyledH1>
			<SetTheme></SetTheme>
		</StyledHeader>
	);
};

export default ContentTitle;

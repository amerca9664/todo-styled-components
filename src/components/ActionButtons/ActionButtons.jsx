import { v4 } from 'uuid';

import { setFilter } from '../functions';
import RadButton from '../RadButton/RadButton';
import { StyledDiv } from './actionButtons.styles';

const Buttons_ACTIONS = [
	{
		name: 'All',
		dataAction: 'all',
	},
	{
		name: 'Active',
		dataAction: 'active',
	},
	{
		name: 'Completed',
		dataAction: 'completed',
	},
];

const ActionButtons = ({ themeStyle, setListPrint }) => {
	return (
		<StyledDiv
			$fontColor={themeStyle.actionsFontColor}
			$background={themeStyle.itemBackground}
			onChange={event => setFilter(event, setListPrint)}
		>
			{Buttons_ACTIONS.map(item => (
				<RadButton key={v4()} action={item.dataAction}>
					{item.name}
				</RadButton>
			))}
		</StyledDiv>
	);
};

export default ActionButtons;

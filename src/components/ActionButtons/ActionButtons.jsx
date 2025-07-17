import { selectedViewAction, setFilter } from '../functions';
import { StyledDiv, StyledRadButton } from './actionButtons.styles';

const ActionButtons = ({ setListPrint }) => {
	return (
		<StyledDiv onChange={event => setFilter(event, setListPrint)}>
			<StyledRadButton
				type="radio"
				name="viewActions"
				data-action="all"
				id="all"
				defaultChecked={selectedViewAction === 'all'}
				hidden
			/>
			<label htmlFor="all">All</label>
			<StyledRadButton
				type="radio"
				name="viewActions"
				data-action="active"
				id="active"
				defaultChecked={selectedViewAction === 'active'}
				hidden
			/>
			<label htmlFor="active">Active</label>
			<StyledRadButton
				type="radio"
				name="viewActions"
				data-action="completed"
				id="completed"
				defaultChecked={selectedViewAction === 'completed'}
				hidden
			/>
			<label htmlFor="completed">Completed</label>
		</StyledDiv>
	);
};

export default ActionButtons;

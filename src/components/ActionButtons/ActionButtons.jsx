import { StyledDiv, StyledRadButton } from './actionButtons.styles';

const ActionButtons = () => {
	return (
		<StyledDiv>
			<StyledRadButton
				type="radio"
				name="viewActions"
				id="all"
				defaultChecked
				hidden
			/>
			<label htmlFor="all">All</label>
			<StyledRadButton type="radio" name="viewActions" id="active" hidden />
			<label htmlFor="active">Active</label>
			<StyledRadButton type="radio" name="viewActions" id="completed" hidden />
			<label htmlFor="completed">Completed</label>
		</StyledDiv>
	);
};

export default ActionButtons;

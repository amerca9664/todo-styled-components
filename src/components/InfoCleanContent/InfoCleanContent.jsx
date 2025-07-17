import ActionButtons from '../ActionButtons/ActionButtons.JSX';
import { removeCompleted } from '../functions';
import { StyledDiv, StyledInput } from './infoCleanContent.styles';

const InfoCleanContent = () => {
	return (
		<StyledDiv>
			<span>x items left</span>
			<ActionButtons></ActionButtons>
			<StyledInput
				type="button"
				value="Clean Completed"
				onClick={removeCompleted}
			/>
		</StyledDiv>
	);
};

export default InfoCleanContent;

import ActionButtons from '../ActionButtons/ActionButtons.JSX';
import { removeCompleted } from '../functions';
import { StyledDiv, StyledInput } from './infoCleanContent.styles';

const InfoCleanContent = ({ setListPrint }) => {
	return (
		<StyledDiv>
			<span>x items left</span>
			<ActionButtons setListPrint={setListPrint}></ActionButtons>
			<StyledInput
				type="button"
				value="Clean Completed"
				onClick={() => removeCompleted(setListPrint)}
			/>
		</StyledDiv>
	);
};

export default InfoCleanContent;

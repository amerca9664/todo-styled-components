import ActionButtons from '../ActionButtons/ActionButtons.JSX';
import { removeCompleted } from '../functions';
import { StyledDiv, StyledInput } from './infoCleanContent.styles';

const InfoCleanContent = ({ setListPrint, themeStyle }) => {
	return (
		<StyledDiv $background={themeStyle.itemBackground}>
			<span>x items left</span>
			<ActionButtons
				themeStyle={themeStyle}
				setListPrint={setListPrint}
			></ActionButtons>
			<StyledInput
				type="button"
				value="Clean Completed"
				onClick={() => removeCompleted(setListPrint)}
			/>
		</StyledDiv>
	);
};

export default InfoCleanContent;

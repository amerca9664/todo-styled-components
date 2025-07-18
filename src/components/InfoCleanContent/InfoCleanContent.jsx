import ActionButtons from '../ActionButtons/ActionButtons';
import { removeCompleted, restJobs } from '../functions';
import { StyledDiv, StyledInput } from './infoCleanContent.styles';

const InfoCleanContent = ({ setListPrint, themeStyle }) => {
	return (
		<StyledDiv
			$fontColor={themeStyle.taskColor}
			$background={themeStyle.itemBackground}
		>
			<span>{restJobs} items left</span>
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

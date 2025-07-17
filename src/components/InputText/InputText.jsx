import { addItem } from '../functions';
import { StyledDiv, StyledText } from './input.styles';

const InputText = ({ setListPrint }) => {
	return (
		<StyledDiv>
			<StyledText
				type="text"
				maxLength="37"
				placeholder="Create a new todo..."
				autoComplete="off"
				onKeyUp={event => addItem(event, setListPrint)}
			></StyledText>
		</StyledDiv>
	);
};

export default InputText;

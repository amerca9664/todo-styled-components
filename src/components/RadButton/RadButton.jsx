import { STATIC_COLOR } from '../../styles/staticColors';
import { selectedViewAction } from '../functions';
import { StyledLabel, StyledRadButton } from './radButton.styles';

const RadButton = ({ children, action }) => {
	return (
		<>
			<StyledRadButton
				$checked={STATIC_COLOR.clickedAction}
				type="radio"
				name="viewActions"
				data-action={action}
				id={action}
				defaultChecked={selectedViewAction === action}
				hidden
			/>
			<StyledLabel htmlFor={action}>{children}</StyledLabel>
		</>
	);
};

export default RadButton;

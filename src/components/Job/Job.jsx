import {
	StyledButton,
	StyledChkButton,
	StyledDiv,
	StyledDivCheckbox,
	StylesLabel,
} from './job.styles';

const Job = ({ themeStyle, idPers, checkedState, children }) => {
	return (
		<StyledDiv $borderColor={themeStyle.borderItem}>
			<StyledDivCheckbox>
				<StyledChkButton
					type="checkbox"
					name=""
					id={idPers}
					hidden
					defaultChecked={checkedState}
				/>
				<StylesLabel htmlFor={idPers}>{children}</StylesLabel>
			</StyledDivCheckbox>
			<StyledButton type="button" data-select={idPers} value="" />
		</StyledDiv>
	);
};

export { Job };

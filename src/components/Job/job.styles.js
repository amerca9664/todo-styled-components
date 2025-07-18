import styled from 'styled-components';
import { STATIC_COLOR } from '../../styles/staticColors';

const StyledButton = styled.input`
    width: 15px;
	height: 15px;
	border: none;
	outline: none;
	background: center / contain no-repeat url('/assets/image/icon-cross.svg');
	
	@media (min-width: 500px){
    &{
		width: 20px;
		height: 20px;
    }
	}

	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			
		}

		&{
			visibility: hidden;
    }
	}

`;

const StyledDiv = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	
    position: relative;
	width: 100%;

	border-bottom: solid 2px ${({ $borderColor }) => $borderColor};
	color: var(--taskColor);

	@media (min-width: 500px){
    &{
		height: 60px;

    }
	}

	@media (hover: hover) {
		&:hover ${StyledButton}{
			visibility: visible;
			
		}
	}
	

`;

const StyledDivCheckbox = styled.div`
    padding-left: 30px;

`;

const StylesLabel = styled.label`
	display: flex;
	align-items: center;

    &::after{
        position: absolute;
        width: 20px;
        height: 20px;
        content: '';
        left: 20px;
        border-radius: 10px;
        background-color: transparent;
        border: solid 1px ${STATIC_COLOR.unCheckedJob};

    }

	@media (hover: hover) {

		&:hover {
			cursor: pointer;
		}

		&:hover::after {
			background:
				linear-gradient(${({ $background }) => $background}) padding-box,
				${STATIC_COLOR.linearGradientJobChk} border-box;
			border: solid 1px transparent;
		}

	}

`;

const StyledChkButton = styled.input`
    &:checked ~ label::after {
        background:
            center / 10px 10px no-repeat url('/assets/image/icon-check.svg'), linear-gradient(
		135deg,
		hsl(192, 100%, 67%),
		hsl(280, 87%, 65%)
	);
        text-decoration-line: line-through;
}

	&:checked ~ label {
		text-decoration-line: line-through;
		text-decoration-thickness: 2px;
		color: ${({ $checkedLabel }) => $checkedLabel};
	}

`;

export {
	StyledDiv,
	StyledDivCheckbox,
	StyledButton,
	StylesLabel,
	StyledChkButton,
};

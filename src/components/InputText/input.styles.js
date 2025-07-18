import styled from 'styled-components';
import { STATIC_COLOR } from '../../styles/staticColors';

const StyledDiv = styled.div`
	width: 90vw;
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
	height: 50px;

	position: relative;
	display: flex;
	align-items: center;

	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 20px;

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

	@media (min-width: 500px){
    &{
		height: 60px;

    }
	}
`;

const StyledText = styled.input`
	width: 100%;
	height: 100%;
	padding-left: 50px;
	background-color: ${({ $background }) => $background};
	border: none;
	outline: none;
	color: ${({ $fontColor }) => $fontColor};
	caret-color: ${STATIC_COLOR.clickedAction};
`;
export { StyledDiv, StyledText };

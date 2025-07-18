import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	background-color: ${({ $background }) => $background};
    position: relative;
	width: 100%;
    color: ${({ $fontColor }) => $fontColor};
	border-radius: 10px;
	font-weight: 700;
	
	@media (min-width: 500px){
    &{
		height: 60px;

    }
	}
`;

const StyledInput = styled.input`
	border: none;
	background: none;
	color: inherit;
	font-weight: inherit;


	@media (hover: hover) {
		& {
			cursor: pointer;
		}
	}
`;

export { StyledDiv, StyledInput };

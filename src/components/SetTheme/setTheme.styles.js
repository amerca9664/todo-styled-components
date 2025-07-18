import styled from 'styled-components';

const StyledLabel = styled.label`
	display: block;
	width: 20px;
	height: 20px;
	background: center / contain no-repeat ${({ $theme }) => $theme};

	@media (min-width: 500px){
    &{
		width: 25px;
		height: 25px;

    }
	}
	
	@media (hover: hover) {
		&{
			cursor: pointer;
		}
	}
`;
export { StyledLabel };

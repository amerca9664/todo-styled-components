import styled from 'styled-components';

const StyledLabel = styled.label`
	display: block;
	width: 20px;
	height: 20px;
	background: center / contain no-repeat ${({ $theme }) => $theme};
`;
export { StyledLabel };

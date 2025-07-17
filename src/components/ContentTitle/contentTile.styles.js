import styled from 'styled-components';
import { FONTS_COLORS } from '../../styles/fontColors';

const StyledHeader = styled.header`
	width: 87vw;
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;

    display: flex;
	justify-content: space-between;
	align-items: center;
	
	margin-bottom: 40px;

`;
const StyledH1 = styled.h1`
    margin:  0px;
	font-size: 1.8rem;
	font-weight: 700;
	letter-spacing: 8px;
    color: ${FONTS_COLORS.fontTitle};
`;

export { StyledH1, StyledHeader };

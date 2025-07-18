import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 90vw;
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
	color: ${({ $fontColor }) => $fontColor};
    background-color: ${({ $background }) => $background};
	border-radius: 10px;
`;

const StyledDivJob = styled.div`
`;

export { StyledDiv, StyledDivJob };

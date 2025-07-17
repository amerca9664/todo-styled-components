import styled from 'styled-components';

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
	border: solid 1px red;
    }
`;

const StyledText = styled.input`
	width: 100%;
	height: 100%;
	padding-left: 50px;
	background-color: gray;
	border: none;
	outline: none;
	caret-color: blue;
`;
export { StyledDiv, StyledText };

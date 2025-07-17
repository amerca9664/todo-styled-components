import styled from 'styled-components';

const StyledDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-left: 20%;
	padding-right: 20%;
	left: 0;
	top: 70px;
	background-color: black;
`;

const StyledRadButton = styled.input`
    &:checked + label {
        color: lightblue;
    }
`;

export { StyledDiv, StyledRadButton };

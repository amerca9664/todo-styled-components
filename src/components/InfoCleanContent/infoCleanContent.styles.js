import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;

    position: relative;
	width: 100%;
    color: white;
`;

const StyledInput = styled.input`
	border: none;
	background: none;
	color: inherit;
`;

export { StyledDiv, StyledInput };

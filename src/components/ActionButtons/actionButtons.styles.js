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
	font-size: 1rem;
	background-color: ${({ $background }) => $background};
	color: ${({ $fontColor }) => $fontColor};
	font-weight: 700;

	@media (min-width: 650px){
    &{
		font-size: 1.2rem;
		position: static;
		width: 300px;
		padding-left: 0px;
		padding-right: 0px;
    }
	}

`;

export { StyledDiv };

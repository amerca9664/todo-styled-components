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

	border-bottom: solid 2px red;
	color: var(--taskColor);
`;

const StyledDivCheckbox = styled.div`
    padding-left: 30px;
`;

const StyledButton = styled.input`
    width: 15px;
	height: 15px;
	border: none;
	outline: none;
	background: center / contain no-repeat url('/assets/image/icon-cross.svg');
`;

const StylesLabel = styled.label`
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

const StyledChkButton = styled.input`
    &:checked ~ label::after {
        background:
            center / 10px 10px no-repeat url('/assets/image/icon-check.svg'), linear-gradient(
		135deg,
		hsl(192, 100%, 67%),
		hsl(280, 87%, 65%)
	);
        text-decoration-line: line-through;
}
`;

export {
	StyledDiv,
	StyledDivCheckbox,
	StyledButton,
	StylesLabel,
	StyledChkButton,
};

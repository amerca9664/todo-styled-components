import styled from 'styled-components';

const StyledRadButton = styled.input`
    &:checked + label {
        color: ${({ $checked }) => $checked};
    }
`;

const StyledLabel = styled.label`
	@media (hover: hover) {
		&{
			cursor: pointer;
		}
	}
`;

export { StyledLabel, StyledRadButton };

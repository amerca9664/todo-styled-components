import { useState } from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import InputText from '../InputText/InputText';
import Jobs from '../Jobs/Jobs';
import { StyledDiv } from './content.styles';

const Content = ({ theme, themeStyle, setColor }) => {
	const [listPrint, setListPrint] = useState([]);

	return (
		<StyledDiv>
			<ContentTitle theme={theme} setColor={setColor}></ContentTitle>
			<InputText
				setListPrint={setListPrint}
				themeStyle={themeStyle}
			></InputText>
			<Jobs listPrint={listPrint} setListPrint={setListPrint}></Jobs>
		</StyledDiv>
	);
};
export default Content;

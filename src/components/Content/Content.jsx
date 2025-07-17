import { useState } from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import InputText from '../InputText/InputText';
import Jobs from '../Jobs/Jobs';
import { StyledDiv } from './content.styles';

const Content = () => {
	const [listPrint, setListPrint] = useState([]);

	return (
		<StyledDiv>
			<ContentTitle></ContentTitle>
			<InputText setListPrint={setListPrint}></InputText>
			<Jobs listPrint={listPrint} setListPrint={setListPrint}></Jobs>
		</StyledDiv>
	);
};
export default Content;

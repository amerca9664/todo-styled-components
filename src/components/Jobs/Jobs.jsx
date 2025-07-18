import { v4 } from 'uuid';
import { setCheckbox } from '../functions.js';
import InfoCleanContent from '../InfoCleanContent/InfoCleanContent';
import { Job } from '../Job/Job.jsx';
import { StyledDiv, StyledDivJob } from './jobs.styles.js';

const Jobs = ({ themeStyle, listPrint, setListPrint }) => {
	if (listPrint.length !== 0) {
		return (
			<StyledDiv
				$background={themeStyle.itemBackground}
				$fontColor={themeStyle.taskColor}
			>
				<StyledDivJob onClick={event => setCheckbox(event, setListPrint)}>
					{listPrint.map(item => (
						<Job
							themeStyle={themeStyle}
							key={v4()}
							idPers={item.id}
							checkedState={item.state}
						>
							{item.name}
						</Job>
					))}
				</StyledDivJob>
				<InfoCleanContent
					setListPrint={setListPrint}
					themeStyle={themeStyle}
				></InfoCleanContent>
			</StyledDiv>
		);
	}
	return (
		<StyledDiv>
			<InfoCleanContent
				setListPrint={setListPrint}
				themeStyle={themeStyle}
			></InfoCleanContent>
		</StyledDiv>
	);
};
export default Jobs;

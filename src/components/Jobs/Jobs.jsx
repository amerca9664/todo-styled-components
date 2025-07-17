import { v4 } from 'uuid';
import { setCheckbox } from '../functions.js';
import InfoCleanContent from '../InfoCleanContent/InfoCleanContent';
import { Job } from '../Job/Job.jsx';
import { StyledDiv, StyledDivJob } from './jobs.styles.js';

const Jobs = ({ listPrint, setListPrint }) => {
	if (listPrint.length !== 0) {
		return (
			<StyledDiv>
				<StyledDivJob onClick={event => setCheckbox(event, setListPrint)}>
					{listPrint.map(item => (
						<Job key={v4()} idPers={item.id} checkedState={item.state}>
							{item.name}
						</Job>
					))}
				</StyledDivJob>
				<InfoCleanContent setListPrint={setListPrint}></InfoCleanContent>
			</StyledDiv>
		);
	} else {
		return (
			<StyledDiv>
				<InfoCleanContent setListPrint={setListPrint}></InfoCleanContent>
			</StyledDiv>
		);
	}
};
export default Jobs;

import { v4 } from 'uuid';
import InfoCleanContent from '../InfoCleanContent/InfoCleanContent';
import { Job } from '../Job/Job.jsx';
import { StyledDiv } from './jobs.styles.js';

const Jobs = ({ listPrint }) => {
	console.log(listPrint);
	if (listPrint.length !== 0) {
		return (
			<StyledDiv>
				<div>
					{listPrint.map(item => (
						<Job key={v4()} idPers={item.id}>
							{item.name}
						</Job>
					))}
				</div>
				<InfoCleanContent></InfoCleanContent>
			</StyledDiv>
		);
	} else {
		return (
			<StyledDiv>
				<InfoCleanContent></InfoCleanContent>
			</StyledDiv>
		);
	}
};
export default Jobs;

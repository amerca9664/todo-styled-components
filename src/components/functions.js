let listTodov = [];

let selectedViewAction = 'all';

let idGen = 0;

const addItem = (event, setListPrint) => {
	idGen = Date.now();
	const enterKey = event.key === 'Enter';
	const valueText = event.target.value;

	if (enterKey) {
		const itemAdd = valueText;
		const objectJob = { id: idGen, name: itemAdd, state: false };
		listTodov.push(objectJob);

		event.target.value = '';
		setListPrint([...listTodov, objectJob]);
	}
};

const removeCompleted = () => {
	const cleanComplete = listTodov.filter(item => item.state === false);
	listTodov = cleanComplete;
};

export { addItem, removeCompleted, listTodov };

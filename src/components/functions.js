import { FILTERS_ACTS } from './filters';

let listTodov = [];

let selectedViewAction = 'all';

let idGen = 0;

const setFiltereds = setListPrint => {
	let filteredJobs = [];

	if (selectedViewAction !== 'all') {
		filteredJobs = listTodov.filter(
			item => item.state === FILTERS_ACTS[selectedViewAction],
		);
	} else {
		filteredJobs = listTodov;
	}

	setListPrint([...filteredJobs]);

	return;
};

const addItem = (event, setListPrint) => {
	idGen = Date.now();
	const enterKey = event.key === 'Enter';
	const valueText = event.target.value;

	if (enterKey) {
		const itemAdd = valueText;
		const objectJob = { id: idGen, name: itemAdd, state: false };
		listTodov.push(objectJob);

		event.target.value = '';
		setFiltereds(setListPrint);
	}
	return;
};

const removeCompleted = setListPrint => {
	const cleanComplete = listTodov.filter(item => item.state === false);
	listTodov = cleanComplete;

	setFiltereds(setListPrint);
	return;
};

const setCheckbox = (event, setListPrint) => {
	if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
		const id = Number(event.target.id);
		const isChecked = event.target.checked;
		listTodov.forEach(item => {
			if (item.id === id) {
				item.state = isChecked;
			}
		});
		setFiltereds(setListPrint);
		return;
	}

	if (event.target.tagName === 'INPUT' && event.target.type === 'button') {
		const id = Number(event.target.dataset.select);
		console.log(event.target.dataset.select);

		listTodov.forEach((item, index) => {
			if (item.id === id) {
				listTodov.splice(index, 1);
			}
		});

		setFiltereds(setListPrint);
		return;
	}
};

const setFilter = (event, setListPrint) => {
	selectedViewAction = event.target.dataset.action;
	setFiltereds(setListPrint);
	return;
};

export { addItem, removeCompleted, setCheckbox, setFilter, selectedViewAction };

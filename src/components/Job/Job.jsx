const Job = ({ id, children }) => {
	return (
		<div>
			<input type="checkbox" name="" id={id} />
			<label htmlFor={id}>{children}</label>
			<input type="button" value="c" />
		</div>
	);
};

export { Job };

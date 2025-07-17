const checkWindowTheme = () =>
	window.matchMedia?.('(prefers-color-scheme: dark)').matches;

const setStyles = () => {};

export { checkWindowTheme, setStyles };

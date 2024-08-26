const breakpointTypes = {
	'base': 0,
	'sm': 480,
	'md': 768,
	'lg': 992,
	'xl': 1280,
	'2xl': 1536,
};
export type TBreakpoint = keyof typeof breakpointTypes;

export default breakpointTypes;

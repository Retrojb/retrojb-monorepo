export type IBoxShadow = {
	color: string;
	type: string;
	x: number;
	y: number;
	blur: number;
	spread: number;
};

export type ElevationTokens = {
	BoxShadowDepthA: IBoxShadow;
	BoxShadowDepthB: IBoxShadow;
	BoxShadowDepthD: IBoxShadow;
	BoxShadowDepthC: IBoxShadow;
	BoxShadowTooltipDetailed: IBoxShadow;
	BoxShadowDropdownMenuStandard: IBoxShadow;
};

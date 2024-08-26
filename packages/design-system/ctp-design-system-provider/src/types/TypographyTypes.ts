import { TextStyle } from 'react-native';

const TTypographyTypes = {
	fontSize: {
		'xs': 12,
		'sm': 14,
		'md': 16,
		'lg': 18,
		'xl': 20,
		'2xl': 24,
		'3xl': 30,
		'4xl': 36,
		'5xl': 48,
		'6xl': 60,
	},
	fontWeight: {
		'Thin': '100',
		'Light': '200',
		'Regular': '400',
		'Medium': '500',
		'Bold': '700',
		'Thin Italic': '150',
		'Light Italic': '250',
		'Regular Italic': '450',
		'Medium Italic': '550',
		'Bold Italic': '750',
		// '100': 'Thin',
		// '200': 'Light',
		// '400': 'Regular',
		// '500': 'Medium',
		// '700': 'Bold',
		// '150': 'Thin Italic',
		// '350': 'Light Italic',
		// '450': 'Regular Italic',
		// '550': 'Medium Italic',
		// '750': 'Bold Italic',
	},
	fontFamily: 'Poppins',
};

export interface TypographyStyle {
	fontFamily: string;
	fontWeight?: string;
	lineHeight: number;
	fontSize: number;
	letterSpacing: number;
	paragraphSpacing: number;
	textCase: string;
	textDecoration?: string;
}

export type TypographyTokens = {
	TypographyLrgHeadDisplay: TypographyStyle;
	TypographyLrgHeadStandard: TypographyStyle;
	TypographyLrgSubheadLarge: TypographyStyle;
	TypographyLrgSubheadStandard: TypographyStyle;
	TypographyLrgSubheadDisplay: TypographyStyle;
	TypographyLrgImageTileHeadingStandard: TypographyStyle;
	TypographyLrgFilterMenuHeadingStandard: TypographyStyle;
	TypographyHeadDisplay: TypographyStyle;
	TypographyHeadStandard: TypographyStyle;
	TypographySubheadLarge: TypographyStyle;
	TypographySubheadStandard: TypographyStyle;
	TypographySubheadDisplay: TypographyStyle;
	TypographySubheadSmall: TypographyStyle;
	TypographyKeyInfoStandard: TypographyStyle;
	TypographyOverlineStandard: TypographyStyle;
	TypographyOverlineStandardItalic: TypographyStyle;
	TypographyOverlineDisplay: TypographyStyle;
	TypographyBodyStandard: TypographyStyle;
	TypographyBodyStandardPlus: TypographyStyle;
	TypographyBodyStandardBold: TypographyStyle;
	TypographyBodyStandardBoldPlus: TypographyStyle;
	TypographyBodyStandardList: TypographyStyle;
	TypographyBodySmall: TypographyStyle;
	TypographyFootnoteStandard: TypographyStyle;
	TypographyTooltipTitleBasicStandard: TypographyStyle;
	TypographyTooltipTitleDetailedStandard: TypographyStyle;
	TypographyTooltipDescriptionDetailedStandard: TypographyStyle;
	TypographyTabLabelStandard: TypographyStyle;
	TypographyInputHelpertextStandard: TypographyStyle;
	TypographyInputFieldtextStandard: TypographyStyle;
	TypographyInputAddonStandard: TypographyStyle;
	TypographyImageTileHeadingStandard: TypographyStyle;
	TypographyFormLabelStandard: TypographyStyle;
	TypographyFilterMenuLabelStandard: TypographyStyle;
	TypographyFilterMenuHeadingStandard: TypographyStyle;
	TypographyButtonStandard: TypographyStyle;
	TypographyBreadcrumbStandard: TypographyStyle;
	TypographyBadgeStandard: TypographyStyle;
	TypographyBadgeInlineStandard: TypographyStyle;
	TypographyAvatarInitialsLarge: TypographyStyle;
	TypographyAlertHeadingToast: TypographyStyle;
	TypographyAlertHeadingInline: TypographyStyle;
	TypographyAlertDescriptionInline: TypographyStyle;
	TypographyAlertDescriptionToast: TypographyStyle;
};
export type TTypography = typeof TTypographyTypes;
export type TypographyTokenKey = keyof TypographyTokens;
export type TFontSize = typeof TTypographyTypes.fontSize;
export type TFontWeight = typeof TTypographyTypes.fontWeight;
export default TTypographyTypes;

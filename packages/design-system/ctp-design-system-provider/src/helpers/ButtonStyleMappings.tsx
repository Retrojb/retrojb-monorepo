import { Themes } from "@ctp/design-system-tokens";
import { TypographyTokens } from "../types/TypographyTypes";

export interface IButtonBaseStyle {
  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  padding?: number;
}
// export interface IButtonStyle {
// 	primary?: IButtonBaseStyle;
// 	secondary?: IButtonBaseStyle;
// }
// export interface TButtonStyleState {
// 	default: IButtonBaseStyle;
// 	disabled: IButtonBaseStyle;
// 	pressed: IButtonBaseStyle;
// 	focus: IButtonBaseStyle;
// 	hover: IButtonBaseStyle;
// }
//
// export interface ButtonVariantStyles {
// 	default: IButtonBaseStyle;
// 	disabled: IButtonBaseStyle;
// 	pressed: IButtonBaseStyle;
// 	focus: IButtonBaseStyle;
// 	hover: IButtonBaseStyle;
// }

export type ButtonStylesMappingType = {
  [key: string]: IButtonBaseStyle;
};
export const ButtonStylesMapping = (
  theme:
    | (typeof Themes.Light & TypographyTokens)
    | (typeof Themes.Dark & TypographyTokens),
): ButtonStylesMappingType => {
  return {
    primary_default: {
      backgroundColor: theme.ColorButtonFillPrimaryDefault,
      borderWidth: theme.BorderWidthButtonPrimaryDefault,
      borderRadius: theme.BorderRadiusButtonStandard,
      borderColor: theme.ColorButtonBorderPrimaryDefault,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    primary_disabled: {
      backgroundColor: theme.ColorButtonFillPrimaryDisabled,
      borderWidth: theme.BorderWidthButtonPrimaryDefault,
      borderColor: theme.ColorButtonBorderPrimaryDisabled,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme?.TypographyButtonStandard,
    },
    primary_focus: {
      backgroundColor: theme.ColorButtonFillPrimaryFocus,
      borderWidth: theme.BorderWidthButtonPrimaryDefault,
      borderColor: theme.ColorButtonBorderPrimaryFocus,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    primary_pressed: {
      backgroundColor: theme.ColorButtonFillPrimaryPressed,
      borderWidth: theme.BorderWidthButtonPrimaryDefault,
      borderColor: theme.ColorButtonBorderPrimaryPressed,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    primary_hover: {
      backgroundColor: theme.ColorButtonFillPrimaryHover,
      borderColor: theme.ColorButtonBorderPrimaryHover,
      borderWidth: theme.BorderWidthButtonPrimaryDefault,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    secondary_default: {
      backgroundColor: theme.ColorButtonFillSecondaryDefault,
      borderWidth: theme.BorderWidthButtonSecondaryDefault,
      borderColor: theme.ColorButtonBorderSecondaryDefault,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    secondary_disabled: {
      backgroundColor: theme.ColorButtonFillPrimaryDisabled,
      borderWidth: theme.BorderWidthButtonSecondaryDisabled,
      borderColor: theme.ColorButtonBorderSecondaryDisabled,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    secondary_focus: {
      backgroundColor: theme.ColorButtonFillSecondaryFocus,
      borderColor: theme.ColorButtonBorderSecondaryFocus,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    secondary_pressed: {
      backgroundColor: theme.ColorButtonFillSecondaryPressed,
      borderWidth: theme.BorderWidthButtonSecondaryPressed,
      borderColor: theme.ColorButtonBorderSecondaryPressed,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
    secondary_hover: {
      backgroundColor: theme.ColorButtonFillSecondaryHover,
      borderWidth: theme.BorderWidthButtonSecondaryHover,
      borderColor: theme.ColorButtonBorderSecondaryHover,
      borderRadius: theme.BorderRadiusButtonStandard,
      padding: theme.Spacing100,
      ...theme.TypographyButtonStandard,
    },
  };
};

export default ButtonStylesMapping;

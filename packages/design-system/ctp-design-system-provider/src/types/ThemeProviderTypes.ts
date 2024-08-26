// import React from 'react';
// import { IDesignTokens } from './index';
// import { DumpsterFireThemeTokenKey } from './IDesignTokens';
//
// export type TMotifPattern =
// 	| 'Light'
// 	| 'light'
// 	| 'Dark'
// 	| 'dark'
// 	| 'Auto'
// 	| null
// 	| undefined;
//
// //ColorModeOptions
// export interface IMotifPatternOptions {
// 	initialMotifPattern?: TMotifPattern;
// 	useSystemColor?: boolean;
// }
//
// //IColorModeProviderProps
// export type TMotifPatternProviderProps = {
// 	children?: React.ReactNode;
// 	options?: IMotifPatternOptions;
// 	manager?: StorageManager;
// };
//
// //IColorModeContextProps
// export interface IMotifPatternContextProps {
// 	motifPattern?: TMotifPattern;
// 	toggleMotifPattern?: () => void;
// 	setMotif?: (theme: any) => void;
// }
//
// //IHybridContextProps
// export type TFooMotifContextProps = {
// 	motifPattern?: IMotifPatternContextProps;
// };
// export interface StorageManager {
// 	get(init?: TMotifPattern): Promise<TMotifPattern | undefined>;
// 	set(val: TMotifPattern): void;
// }
// //INativebaseConfig
// export interface IThemeProvider {
// 	children?: React.ReactNode;
// 	theme?: IDesignTokens;
// }
//
// export type IThemeContextType = {
// 	theme: TMotifPattern;
// 	tokens: DumpsterFireThemeTokenKey;
// 	toggleColorScheme?: () => void;
// 	setTheme?: (theme: any) => void;
// };
//
// export type TContextProps = {
// 	theme: IThemeContextType;
// };
// export type IThemeProviderProps = {
// 	children: React.ReactNode;
// 	theme?: TMotifPattern;
// 	themeToggle?: TMotifPattern;
// };

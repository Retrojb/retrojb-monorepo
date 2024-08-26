import React from 'react';
import { ThemeContext } from '../providers/themeProvider';
import { IDesignTokens } from '../types';
import {
	CompositeDesignToken,
	CompositeElevationToken,
	CompositeTypographyToken,
} from '../types/IDesignTokens';

export const useTheme = (): CompositeDesignToken => {
	const motifContext = React.useContext(ThemeContext);

	if (motifContext === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return motifContext;
};

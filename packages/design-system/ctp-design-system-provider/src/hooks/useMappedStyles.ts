import React from "react";

type ComponentStateStyles<StyleType> = {
  [state: string]: StyleType;
};

type ComponentStylesMapping<StyleType> = {
  [variant: string]: ComponentStateStyles<StyleType>;
};

export const useMappedStyles = <StyleType>(
  styleMapping: any,
  variant: string,
  state: string,
) => {
  return React.useMemo(() => {
    const styleKey = `${variant}_${state}`;
    return styleMapping[styleKey] || styleMapping[`${variant}_default`];
  }, [styleMapping, variant, state]);
};

export default useMappedStyles;

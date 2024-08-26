#!/usr/bin/env bash

convert_to_camel_case() {
    local input=$1
    local camelCase=""
    IFS=' ' # Internal Field Separator set to space

    read -r -a words <<< "$input"
    local isFirstWord=true

    for word in "${words[@]}"; do
        if $isFirstWord; then
            # Lowercase the first word entirely
            camelCase+=$(echo "${word,,}")
            isFirstWord=false
        else
            # Capitalize the first letter of subsequent words
            firstLetter=$(echo ${word:0:1} | tr '[:lower:]' '[:upper:]')
            restOfWord=${word:1}
            camelCase+="${firstLetter}${restOfWord}"
        fi
    done

    echo "$camelCase"
}

convert_to_pascal_case() {
    local input=$1
    local pascalCase=""
    IFS=' ' # Internal Field Separator set to space

    read -r -a words <<< "$input"

    for word in "${words[@]}"; do
        firstLetter=$(echo ${word:0:1} | tr '[:lower:]' '[:upper:]')
        restOfWord=${word:1}
        pascalCase+="${firstLetter}${restOfWord}"
    done

    echo "$pascalCase"
}

create_cmpt_structure() {
  # shellcheck disable=SC2164
  cd packages/design-system/ctp-design-system/src/components
  mkdir "${CMPT_NAME_PC}"
  mkdir "${CMPT_NAME_PC}"/__test__
  mkdir "${CMPT_NAME_PC}"/__stories__
  touch "${CMPT_NAME_PC}"/"${CMPT_NAME_CC}".tsx
  touch "${CMPT_NAME_PC}"/index.ts
  touch "${CMPT_NAME_PC}"/__test__/"${CMPT_NAME_CC}".test.tsx
  touch "${CMPT_NAME_PC}"/__stories__/"${CMPT_NAME_CC}".stories.tsx
}

create_cmpt_file() {
echo 'Creating component: ${CMPT_NAME}'
cat > ./"${CMPT_NAME_PC}"/"${CMPT_NAME_CC}.tsx" << EOF
import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface I${CMPT_NAME_PC}Props {};

export const ${CMPT_NAME_PC} = (): JSX.Element => {
  return (
    <View />
  )
}

export default ${CMPT_NAME_PC};
const styles = StyleSheet.create({});

EOF
}

create_idx() {
cat > ./"${CMPT_NAME_PC}"/index.ts << EOF
export { default } from './${CC}';
export type { I${CMPT_NAME_PC}Props } from './${CMPT_NAME_CC}';

EOF
}

create_cmpt_story() {
cat > ./"${CMPT_NAME_PC}"/__stories__/"${CMPT_NAME_CC}".stories.tsx << EOF
import ${CMPT_NAME_PC}, { I${CMPT_NAME_PC}Props } from "../${CMPT_NAME_CC}";
import { StoryObj, Meta } from "@storybook/react";
import { View } from "react-native";
const meta: Meta<typeof ${CMPT_NAME_PC}> = {
  title: "Components/${CMPT_NAME}",
  component: ${CMPT_NAME_PC},
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  render: ({ ...args }) => {
    return (
      <${CMPT_NAME_PC} />
    )
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ${CMPT_NAME_PC}Story: Story = {
  args: {
  },
};
EOF
}

update
#create_cmpt_test() {}

exec() {
  printf "Generate a new component \n"
  read -r CMPT_NAME
  CMPT_NAME_CC=$(convert_to_camel_case "$CMPT_NAME")
  CMPT_NAME_PC=$(convert_to_pascal_case "$CMPT_NAME")
  create_cmpt_structure
  create_cmpt_file
  create_idx
  create_cmpt_story
}

exec
#!/bin/bash

# Check if folder name is provided as an argument
if [ -z "$1" ]; then
    echo "Usage: ./create_folder.sh FOLDER_NAME"
    exit 1
fi

FOLDER_NAME="$1"

# Define the file names
FILES=("$FOLDER_NAME.tsx" "index.ts" "styles.ts" "types.ts")

# Create the folder if it doesn't exist
if [ ! -d "$FOLDER_NAME" ]; then
    mkdir "$FOLDER_NAME"
    echo "Folder '$FOLDER_NAME' created."
else
    echo "Folder '$FOLDER_NAME' already exists."
fi

# Create the files inside the folder
for FILE in "${FILES[@]}"; do
    FILE_PATH="$FOLDER_NAME/$FILE"
    if [ ! -f "$FILE_PATH" ]; then
        touch "$FILE_PATH"
        echo "File '$FILE' created in '$FOLDER_NAME'."
    else
        echo "File '$FILE' already exists in '$FOLDER_NAME'."
    fi
done

# Add React component code to FOLDER_NAME.tsx
TSX_FILE="$FOLDER_NAME/$FOLDER_NAME.tsx"
echo "import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function $FOLDER_NAME(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>$FOLDER_NAME</Text>
    </View>
  );
}

export default $FOLDER_NAME;" > "$TSX_FILE"

echo "React component added to '$TSX_FILE'."

# Add styles to styles.ts
STYLES_FILE="$FOLDER_NAME/styles.ts"
echo "import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default styles;" > "$STYLES_FILE"

echo "Styles added to '$STYLES_FILE'."

# Add code to index.ts
INDEX_FILE="$FOLDER_NAME/index.ts"
echo "export {default} from './$FOLDER_NAME';" > "$INDEX_FILE"

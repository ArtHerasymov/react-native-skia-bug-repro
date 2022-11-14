/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {Canvas, Circle, Patch, vec} from '@shopify/react-native-skia';

import React from 'react';

const App = () => {
  const colors = ['#61dafb', '#fb61da', '#61fbcf', '#dafb61'];
  const C = 64;
  const width = 256;
  const topLeft = {pos: vec(0, 0), c1: vec(0, C), c2: vec(C, 0)};
  const topRight = {
    pos: vec(width, 0),
    c1: vec(width, C),
    c2: vec(width + C, 0),
  };
  const bottomRight = {
    pos: vec(width, width),
    c1: vec(width, width - 2 * C),
    c2: vec(width - 2 * C, width),
  };
  const bottomLeft = {
    pos: vec(0, width),
    c1: vec(0, width - 2 * C),
    c2: vec(-2 * C, width),
  };

  return (
    <Canvas style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Circle cx={50} cy={50} r={50} color="lightblue" />
      <Patch
        colors={colors}
        patch={[topLeft, topRight, bottomRight, bottomLeft]}
      />
    </Canvas>
  );
};

export default App;

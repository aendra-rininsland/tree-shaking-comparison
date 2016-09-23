# Tree Shaking Comparison

All I want to do is extract `d3-scale`'s `scaleLinear` function out of the D3 monolib.

This should not be hard.

The D3 monolib does nothing but import methods from its assorted modules, then export them again.

This should be the ideal usecase for statically-analysed modules using tree-shaking.

Alas, both Rollup and Webpack2 are unable to do this, it seems...

## Installation:

1. Install jspm globally:
  `npm install -g jspm`
2. `npm install`
3. `npm run build`

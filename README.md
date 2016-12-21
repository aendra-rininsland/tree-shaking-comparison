# Tree Shaking Comparison

This project compares various bundlers and minifiers, particularly if using the D3 monorepo.

At present, it outputs Test 3 at the following sizes:

```
-rw-r--r--  1 aendrew  241K 21 Dec 12:09 jspm-bundle.min.js
-rw-r--r--  1 aendrew   96K 21 Dec 12:09 rollup-bundle.min.js
-rw-r--r--  1 aendrew  169K 21 Dec 12:09 webpack-bundle.min.js
```

Using JSPM 0.17.0-beta.32, Rollup 0.36.4 and Webpack 2.1.0-beta.28.

At this point, I feel like I can say Rollup sufficiently optimizes the D3 monorepo to make it
usable in production, and Webpack is close (I'd be curious to compare results from real-world
projects; it's possible this lead would narrow if more of D3 was included.).

JSPM is hilarious, it uses Rollup internally yet still produces bundles over twice the size of
Rollup's output.

## Installation:

1. `npm install -g jspm`
2. `npm install`
3. `npm run build`
4. `ls -alh *-bundle.min.js`

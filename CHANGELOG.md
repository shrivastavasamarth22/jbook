#### 0.1.0 (2021-06-04)

##### Other Changes

* //github.com/shrivastavasamarth22/jbook into main (1b2536ec)

- Update CHANGELOG.md
- Added basic error checking and displaying of user code
- Auto generation of CHANGELOG.md file activated
- Generated CHANGELOG.md file
- Passed user code directly along the iframe and then executed it
- Added iframe to remotely execute user code
- Extracted common caching logic into a separate onLoad function inside the custom esbuild plugin
- Refactored the onLoad function into three separate functions in the custom esBuild plugin
- Added the functionality to handle css imports in the cusstom esBuild plugin
- Resolved the onLoad function of the custom esBuild plugin into a separate plugin of its own
- Refactored the onResolve function inside the custom esBuild plugin to three separate functions
- Added an extra cache layer with localforage inside the custom esBuild plugin
- Defined process.env.NODE_ENV for production
- Solved the issue with nested import statements inside the custom esBuild plugin
- Merge branch 'main' of https://github.com/shrivastavasamarth22/jbook into main
- Initial commit, trying to make the custom esBuild plugin work with nested file imports
- Updated README.md
- Initialize project using Create React App

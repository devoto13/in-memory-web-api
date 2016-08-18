# angular2 in-memory-web-api
An in-memory web api for Angular 2 demos and tests.

**NOTE** This version contains PRs not merged into main repo for ages, build process cleanups and storing data into `localStorage`, so it persists after page reload.

See usage in the Angular.io
[Server Communication](https://angular.io/docs/ts/latest/guide/server-communication.html) chapter.

# Simple Query String Support
Custom filters can be passed as a regex pattern via query string. 
The query string defines which property and value to match against.

Format: `/app/heroes/?propertyName=regexPattern`

In the following example we are matching on all names containing the letter 'j' in the heroes collection.

`/app/heroes/?name=j+`

# To Do

* add  documentation
* add tests (shameful omission!)

# Build Instructions

The following describes steps for building and publishing package:

- make and commit changes

- `npm run build`

- bump version in `package.json`

- update `CHANGELOG.md` with changes

- `git add . && git commit -m 'Bumped version'`

- `git tag <version>`

- `git push && git push --tags`

- `npm publish --access=public`

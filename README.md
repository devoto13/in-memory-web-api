# angular2 in-memory-web-api
An in-memory web api for Angular 2 demos and tests.

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

Mostly gulp driven.

The following describes steps for updating from one Angular version to the next

>This is essential even when there are no changes of real consequence.
Neglecting to synchronize Angular 2 versions
triggers typescript definition duplication error messages when
compiling your application project.

- update the dependent version(s) in `package.json`

- `npm install` the new package(s) (make sure they really do install!)<br>
   `npm list --depth=0`

 -- NO TESTS YET ... BAD --

- `gulp build`

- `gulp bump`

- update `CHANGELOG.MD` to record the change

- commit

- add version tag

- push

- `npm publish`

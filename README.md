## IMPORTANT: Setup Prettier and husky (node version 10.15.1)

    - install prettier via npm install --save-dev prettier@1.18.2
    - create a new file called ".prettierrc" at the root of the project
    	- insert this options
    	{
    	"bracketSpacing": true,
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 140,
        "orderedImports": true
    	}
    - create a new file called ".prettierignore" at the root of the project and add the ff
    	package.json
    	package-lock.json
    	yarn.lock
    	dist

    - install tslint-config-prettier  via npm install --save-dev tslint-config-prettier@2.0.5
    - open tslint.json in your project and then add the ff
    	"extends": [
    	"tslint:recommended",
    	"tslint-config-prettier"
    	],
    	 "linterOptions": {

"exclude": ["e2e/**", "src/main.ts"],
"include": ["src/app/**"]
}, - install pretty-quick via npm install --save-dev pretty quick - install husky via npm install husky@4.2.5 --save-dev
-create a new file called ".huskyrc" and insert the ff
{
"hooks": {
"pre-commit": "pretty-quick --staged && ng lint",
"pre-push": "ng build --aot true"
}
} - (only use if push failed due to push hook) git commit --amend --no-edit

# BulsuanProjectWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

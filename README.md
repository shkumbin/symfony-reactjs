# symfony-reactjs
A symfony + react + browserify workaround

# Installation
##PHP Packages
### Global Composer
`composer install`

### Via composer.phar
`php composer.phar install`

##NPM Packages
`npm install`

##Browserify bundle all Modules
```
cd src/AppBundle/Resources/public/js/
browserify main.js -t babelify -t [reactify --es6] -d -p [minifyify --no-map] > app.js
```
#Modules Used
[Browserify](www.browserify.org)
[Babelify](https://github.com/babel/babelify)
[React](https://www.npmjs.com/package/react)
[Reactify](https://www.npmjs.com/package/reactify)
[Minifyify](https://www.npmjs.com/package/minifyify)
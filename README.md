# How to use

```
yarn install
yarn run start
```


# 2 ways to autocompile SCSS

## install the plugin on vscode marketplace
https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass
watch SCSS itself & 產生出 css 在當前資料夾


###  or 
## use scripts wrote in packages.json
```
"scss": "node-sass --watch ./public/scss -o ./public/css"
```
but you have to put all the `.scss` inside `./public/scss`.

### About scss refers:
 https://webdesign.tutsplus.com/tutorials/watch-and-compile-sass-in-five-quick-steps--cms-28275
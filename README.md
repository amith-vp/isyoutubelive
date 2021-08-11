![npm](https://img.shields.io/npm/dt/isyoutubelive?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/amith-vp/isyoutubelive?style=flat-square)![npm](https://img.shields.io/npm/v/isyoutubelive?style=flat-square)  ![npm bundle size](https://img.shields.io/bundlephobia/min/isyoutubelive?style=flat-square)  ![NPM](https://img.shields.io/npm/l/isyoutubelive?style=flat-square)
<p align="center">
  <h2 align="center">isyoutubelive</h2>

[![NPM](https://nodei.co/npm/isyoutubelive.png?compact=true)](https://npmjs.org/package/isyoutubelive)


NPM Module to check whether youtube channel is live or not . WITHOUT YOUTUBE API KEY <br>
Return object with live status, video title,video url.
## :floppy_disk: Installation

``` bash
npm i isyoutubelive
```


## :feet: Usage

```js
const islive = require("isyoutubelive");

islive("CHANNEL_ID").then((res) => {
    console.log(res); 
  })

```
## 🍕 Sample
<img src=https://media.discordapp.net/attachments/713261163936481343/873500952475340830/unknown.png>

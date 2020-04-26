<div align="center">
    <img alt="Covid 19 Generator logo" src="/public/favicon/android-chrome-256x256.png" style="cursor : default;"/>
    <h1 align="center">A Covid-19 Certificate Generator</h1>
    <h2 align="center">Check out the app <a href="http://covid-19-generator.lifaen.com/">here</a></h2>
 </div>
 
## Presentation and Features
 
During the current Covid-19 global pandemic, France has set-up some rules to regulate contact between humans. One of them is to always have your identity papers and a specific travel document to circulate. At first, you had to print this certificate, or handwrite it before you can go out. Then, the government shared a website to digitally create a certificate, in which there are all your information and a QrCode that the police could scan in case of identity check. Unfortunately, I found that the application was missing some user-friendly features such as keep in local storage your personnal information to avoid typing them every time. Or, as the generation time is written on the certificate, the possibility to regularize the situation if you forgot to generate your certificate before going out.

This application does all of that. Your data are locally stored so you don't have to enter them every time you create a travel document. And the generation time is always set 8 minutes before your outing time, so you don't have troubles if you generate a certificate while you're out.

This repository embeds a bit of the government app code, but I adapted it to be cleaner and simpler. You can check the original government code [here](https://github.com/LAB-MI/deplacement-covid-19).


## Commands

### Start the project in development mode

`npm start`

### Build the project in production mode

`npm run build`

### Lint the project

`npm run lint`

## Included libraries and tools

- [Bootstrap](https://getbootstrap.com/)
- [ESLint](https://eslint.org/)
- [eslint-config-fbjs](https://www.npmjs.com/package/eslint-config-fbjs)
- [Express](https://expressjs.com/)
- [Heroku](https://heroku.com)
- [PDF-LIB](https://pdf-lib.js.org/)
- [node-qrcode](https://github.com/soldair/node-qrcode)
- [React](https://reactjs.org/)
- [React Boostrap](https://react-bootstrap.github.io/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Sass](https://sass-lang.com/)

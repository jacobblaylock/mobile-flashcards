# My Mobile Flashcards Project

A mobile app that allows a user to setup decks of flashcards and give themselves quizes using those cards.

While this application should also work on iPhone, it has been configured specifically for Android and has only been tested on an Android device.

## Pre-requisites
This app requires [Node.js](https://nodejs.org/en/) to run. It is also suggested that you utilize [yarn](https://yarnpkg.com/en/) instead of npm as the package manager.

## Get the App
Download the app from [https://github.com/jacobblaylock/mobile-flashcards.git](https://github.com/jacobblaylock/mobile-flashcards.git) or clone it into a new git repository:
` git clone https://github.com/jacobblaylock/mobile-flashcards.git `

## Install

```
    yarn install
    yarn start
```

Follow the instructions in the console to get the Expo app for your Android device and launch the app.

## Key Dependencies

**redux** - Used to manage application state.
**redux-thunk** - Used to manage asynchronous requests made to AsyncStorage with redux.

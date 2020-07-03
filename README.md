# Code & Robots

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Open Source

Code & Robots is completly FREE under the [MIT license](https://github.com/codeandrobots/codeandrobots/blob/master/LICENSE). You can even use it commercially and we welcome all contributions, see our [contributing guide](CONTRIBUTING.md) to get started.

## :rocket: How to setup and run the app

### Troubleshooting

There are quite a few gotchas when setting up and running the app right now. We're working towards a better experience to get started but it's best if you visit the [Troubleshooting](TROUBLESHOOTING.md) guide before starting and refer to it if you run into problems. For further support, send an email to [codeandrobotshq@gmail.com](mailto:codeandrobotshq@gmail.com).

### Setup

If you're new to mobile app development with React Native then here are some crash courses to bring you up to speed:

- [React Native crash course video](https://www.youtube.com/watch?v=mkualZPRZCs)
- [JavaScript OOP Crash Course (ES5 & ES6)](https://www.youtube.com/watch?v=vDJpGenyHaA)

**Step 1:** Install and setup React Native

- Mac or Linux
  - See [React Native getting started doc](https://facebook.github.io/react-native/docs/getting-started)
- Windows
  - See [Windows Setup doc](https://github.com/codeandrobots/codeandrobots-app/blob/master/SETUP_WINDOWS.md)

**Step 2:** git clone this repo

- Mac or Linux
  - `cd ~`
  - `git clone https://github.com/codeandrobots/codeandrobots-app.git`
- Windows
  - `cd C:\Users\%username%`
  - `git clone https://github.com/codeandrobots/codeandrobots-app.git`

**Step 3:** cd to the cloned repo

- `cd codeandrobots-app`

**Step 4:** Install the Application with Yarn

- `yarn install --ignore-engines`

**Step 5:** Reinstall husky to setup git hooks

- `npm install husky --save-dev`

**Step 6:** Copy `.env.example` to `.env`

- Mac or Linux
  - `cp .env.example .env`
- Windows
  - `copy .env.example .env`

**Step 7:** Update [App Properties](#app-properties) in `.env` if necessary

**Step 8:** Install and run the app

- iOS
  - Make sure [XCode](https://developer.apple.com/xcode/) is installed
  - run `react-native run-ios`
- Android
  - [Use your Android device](https://facebook.github.io/react-native/docs/running-on-device) or run on an [Android Emulator](https://medium.com/@Charles_Stover/create-a-react-native-app-on-an-android-emulator-1c0d94f288ae) or run on [Genymotion](https://www.genymotion.com)
  - run `react-native run-android --variant=devDebug`

### Setup (Docker with emulator)

Please reference the README files found in the ./Docker directory

### App Properties

When running the app locally, it will rely on the properties defined in your local `.env` file.

Have a look at [.env.example](https://github.com/codeandrobots/codeandrobots-kit/blob/master/app/.env.example) for more information about app properties.

### Running on a real device

Have a look at https://facebook.github.io/react-native/docs/running-on-device to get your device setup.

When running an API **locally** and the app on a real device, you will need to find and use the primary IP address of your local machine (i.e. **not** localhost).

1. `ipconfig getifaddr en0` (only works on macOS)
2. Serve your backend API using the primary IP address (e.g. `rails s -b [primary local ip]`)
3. Update **API_BASE_URL** to use the primary IP address (e.g. `http://[primary local ip]:3000/api/v1/`)

## :no_entry_sign: Standard Compliant

This project adheres to [Standard](https://github.com/standard/standard).

**Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

### Testing

Before running tests you will need to install Jest.

Unit and integration tests automatically run on every `git commit` and `git push`.

Unit and integration tests:

```
yarn test
```

#### View app stories in Storybook mode

1. In a new terminal, run storybook `yarn storybook`
2. In a new terminal, run the app `react-native run-ios` or `react-native run-android --variant=devDebug`
3. Choose app stories from the Storybook navigator within the app or in the browser

#### End to End Testing

There are no end to end tests right now as the app development is in flux but it's a good idea to add them in the future.

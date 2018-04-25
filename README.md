# lighthouse-mean

[lighthouse](https://www.npmjs.com/package/lighthouse) wrapper that averages performance metrics for multiple samples and generates a CSV report.

## Installation:

First, install [lighthouse](https://www.npmjs.com/package/lighthouse) globally (v2.9.4 or higher):

```sh
yarn global add lighthouse
```

Until this project is published to npm, you'll need to clone the repo and manually configure its CLI:

```sh
git clone git@github.com:poetic-labs/lighthouse-mean.git
cd lighthouse-mean
yarn build
yarn link
```

## Usage:

```sh
lighthouse-mean --url https://www.google.com/ --quantity 3
```

or

```sh
lighthouse-mean -u https://www.google.com/ -q 3
```

## Disabling CLI:

```sh
cd lighthouse-mean
yarn unlink
```

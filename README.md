# Tic tac toe game

## Available Scripts

In the project directory, you can run:

Use Node.js 26, matching the CI workflows.

ESLint stays on 9.x and TypeScript on 6.x until the Next.js lint plugins support their newer major releases.

### install

``` bash
npm install
```

Install all the dependencies listed within package.json in the local node_modules folder.

### build

``` bash
npm run build
```

### dev

``` bash
npm run dev
```

### start

``` bash
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000/tic-tac-toe-game](http://localhost:3000/tic-tac-toe-game) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### export

``` bash
npm run export
```

Builds and exports the static site to `out/`, as does `npm run build`.

### lint

``` bash
npm run lint
```

Next.js 16 no longer lints during builds, so CI runs this separately. New immutability diagnostics for the existing game component are warnings; gameplay is unchanged.

## Page on GitHub

https://mikaojk.github.io/tic-tac-toe-game

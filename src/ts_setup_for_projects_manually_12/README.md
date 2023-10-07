# How to setup TypeScript for project manually
1. Initiate 'tsconfig.json' file initially for a project.
> tsc --init
2. Create an html file (index.html) in the root directory.
3. Create 2 directories (src; dist) in the root directory.
    - 'src' dir: Holds the TS files.
    - 'dist' dir: Holds the transpiled JS files.
4. Modify the 'tsconfig.json' file, to emit the transpiled files into './dist' directory.
> "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
5. Initiate 'package.json' file to specify how the watch mode will perform
> npm init
6. Run the html file in watch mode to automatically generate the JS files for the respective TS files. (<small>It'll inspect all the TS files in the root directory & automatically transpile them into the './dist/' directory.</small>)
> tsc -w
7. To run a temporary server for this project use __live server__ or __lite server__ & configure that in the 'package.json' file accordingly.
> __lite server__ (PORT: 3001): Install the package first & then modify in the _scripts_ key in the 'package.json' file. It automatically loads up the index.html file. <br>
`npm i lite-server` <br>
Start server cmd: `npm start` <br>
Transpile JS files automatically (in the './dist' file): `tsc -w`
<small>Define the path of transpiled JS files inside the '_index.html_' file</small>
__live server__ (PORT: 5500): Install the VS Code extension from the marketplace: _ritwickdey.LiveServer_

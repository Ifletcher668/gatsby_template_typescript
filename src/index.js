#! /usr/bin/env node
// process.argv[2] is the title of the project folder

import { writeFile, mkdir, mkdirSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import gatsbyConfig from './gatsby-config.js';
import packageJson from './package.js';
import tsConfig from './tsconfig.js';

import layoutComponentTemplate from './template-src/components/layout.js';
import headerComponentTemplate from './template-src/components/header.js';
import mainComponentTemplate from './template-src/components/main.js';
import seoComponentTemplate from './template-src/components/seo.js';
import stylesheetTemplate from './template-src/styles/layout.js';
import notFoundPageTemplate from './template-src/pages/404.js';
import indexPageTemplate from './template-src/pages/index.js';
import secondPageTemplate from './template-src/pages/page-2.js';

const handleBasicError = (err) => {
    if (err) throw err;
};

const handleExecError = (err, stdout, stderr) => {
    if (err) throw err;
    if (stderr) return console.log(stderr);
    console.log(stdout);
};

const projectFolder = `${process.argv[2] ? process.argv[2] : client}`;

const installTypes = `npm i --save-dev @types/node @types/react @types/react-dom @types/react-helmet`;
const installDependencies = `npm i node-sass`;
const installDevDependencies = `npm i --save-dev scss`;

const commandStream = `gatsby new ${projectFolder} && cd ${projectFolder} && rm -rf ./src ./gatsby-config.js ./.prettierrc ./.prettierignore package.json && mv ../gatsby-config.js ./gatsby-config.js && mv ../styles/ ./styles && mv ../src/ ./src/ && mv ../package.json ./package.json ../tsconfig.json ./tsconfig.json && ${installTypes} && ${installDependencies} && ${installDevDependencies} `;

writeFile(
    `gatsby-config.js`,
    `module.exports = ${JSON.stringify(gatsbyConfig)};`,
    handleBasicError
);

mkdir(`./src`, handleBasicError);
mkdir(`./src/components`, handleBasicError);
mkdir(`./src/pages`, handleBasicError);
mkdir('styles', handleBasicError);
writeFileSync(`./package.json`, packageJson, handleBasicError);
writeFileSync(`./tsconfig.json`, JSON.stringify(tsConfig), handleBasicError);
writeFileSync(`./styles/layout.scss`, stylesheetTemplate, handleBasicError);
writeFileSync(`./src/components/layout.tsx`, layoutComponentTemplate, handleBasicError);
writeFileSync(`./src/components/header.tsx`, headerComponentTemplate, handleBasicError);
writeFileSync(`./src/components/main.tsx`, mainComponentTemplate, handleBasicError);
writeFileSync(`./src/components/seo.tsx`, seoComponentTemplate, handleBasicError);
writeFileSync(`./src/pages/404.tsx`, notFoundPageTemplate, handleBasicError);
writeFileSync(`./src/pages/index.tsx`, indexPageTemplate, handleBasicError);
writeFileSync(`./src/pages/page-2.tsx`, secondPageTemplate, handleBasicError);

execSync(`${commandStream}`, handleExecError);

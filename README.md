# NPM template

Template to start creating npm packages. Aims to simplify the creation of npm packages by giving a common structure and workflow with github actions to automate the publishing process.

## Setup and development

Click "Use this template" and create a new repository for your package.

Change the `homepage / repository / bugs` urls in `package.json`.

## Development

During development you probably want to test the package in a project *without* publishing it to the npm registry.

### Local development (without docker)

Run `npm link` command in your package repository, and `npm link <package-name>` in another project to link it.

```console
mypackage % npm link 
mypackage % cd /testproject
testproject % npm link <package-name>
```

Note: `npm link <package-name>` refers to the name of the package (ie. name in package.json)

In the code you should now be able to import the package as if it was installed it with npm.

### With Docker

If you work on a package and want to test it with a containerized application `npm link` will *not* work as expected. A fairly easy workaround is to use [yalc](https://github.com/wclr/yalc). Yalc publishes the application under a directory.

```console
mypackage % yalc publish <package-name>
mypackage % cd testproject 
testproject % yalc add <package-name>
testproject % ls -a 
.yalc 
```

You then have to either copy or mount the `.yalc` directory in to your container.

## Publishing to npm

Generate an automation access token from npm
<https://docs.npmjs.com/about-access-tokens>

Set the token with the name `NPM_TOKEN` to github secrets in your package repository.

About secrets: <https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions>

Use the `publish-npm` action to push changes to the npm registry.

> **important**: double check your package version, trying to push same version to npm registry will fail.

## Finally

Delete all of the above in this README and document your package below.

## Table of contents

1. [What](#what)
2. [Install](#install)
3. [Usage](#usage)

## What

Short description of what this package does

## Install

Installation instructions

## Usage

How to use the package

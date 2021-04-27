# NPM-Version GitHub Action  

NPM-Version allows you to change the version of your projects package.json file in a simple GitHub action.

It is based on the NPM version cli command.

## Integrating with GitHub actions

GitHub actions are a flexible way to automatically build your node project.
I have found working on several projects the need to change the version of the package json, especially on a mono repo with multiple node projects.

## Prerequisites

Make sure that you have

* a GitHub account with Actions enabled
* an npm project

## How the NPM-Version action works

The command `npm version` is ran with the parameters specified, this in turn will change the version stored in the package.json


## How to use the NPM-Version GitHub action

An example of workflow

```
name: run npm-version pipeline
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@master
        
      - name: 'change version'
        uses: reedyuk/npm-version@1.1.0
        with:
          version: '1.0.1'
          package: 'subproject-directory/'
```

### Variables

* version: The version you want to change your package json to.
* package(optional): defaults to current directory, but you can specify a locaion otherwise.
* git-tag-version(optional): defaults to false, if true, it will tag and commit the version - the same behaviour as git-tag-version in npm.


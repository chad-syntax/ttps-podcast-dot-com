# ttps-podcast-dot-com

Source code for the ttpspodcast.com website

## Getting started

1. clone the repo `git clone git@github:chad-syntax/ttps-podcast-dot-com.git`
2. install dependencies `yarn install`
3. initialize your .env file `cp .env.example .env.local`
4. run dev server `yarn dev`

## Building

- to build `yarn build`
- to export build into static files `yarn export`
- (optional) to verify the exported build is valid, `yarn start` will start a local static server pointing to that export

## Deploying to github pages

`yarn deploy` will build, export, and subtree push the out folder to the gh-pages git branch

## Building and deploying to ipfs

- `yarn deploy:eth` will build, export, and deploy to ipfs

## .eth domain

- you then take the CID and put it into the CONTENT field prefixed by ipfs:// in your .eth domain like mine https://app.ens.domains/name/chadsyntax.eth/details
- NOTE: you can also use a service like [pinata](https://www.pinata.cloud/) and upload your out folder there
- NOTE: buying an .eth domain and saving the CONTENT field are transactions that cost ethereum.

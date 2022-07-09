# ttps-podcast-dot-com

Source code for the ttpspodcast.com website

## Getting started

1. clone the repo `git clone git@github:chad-syntax/ttps-podcast-dot-com.git`
2. install dependencies `yarn install`
3. initialize your .env file `cp .env.example .env.local` and fill in the RSS_FEED_URL
4. run dev server `yarn dev`

## Building

- to build `yarn build`
- to export build into static files `yarn export`
- (optional) to verify the exported build is valid, `yarn start` will start a local static server pointing to that export

## Deploying to github pages

any merge into `main` will kick off a gh-pages deploy thanks to the build-and-deploy workflow.

## Building and deploying to ipfs

- I'm not adding it to my deps since dependabot goes nuts on it, install it on your own
- `yarn deploy:eth` will build, export, and deploy to ipfs
- you will then need to update your ens record with the new ipfs hash 👇

## .eth domain

- you then take the your hash the CID points to and put it into the CONTENT field prefixed by ipfs:// in your .eth domain like mine https://app.ens.domains/name/chadsyntax.eth/details
- ipfs-deploy will output link which will redirect to https://{HASH}.ipfs.infura-ipfs.io/, that's the hash you are looking for
- NOTE: you can also use a service like [pinata](https://www.pinata.cloud/) and upload your out folder there
- NOTE: buying an .eth domain and saving the CONTENT field are transactions that cost ethereum.

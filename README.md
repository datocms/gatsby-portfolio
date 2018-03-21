# Gatsby Portfolio Website

This repo contains a working static website written with [Gatsby](https://www.gatsbyjs.org/), integrated with content coming from this [DatoCMS administrative area](https://dashboard.datocms.com/account/sites/template?name=Portfolio&siteId=604).

[See the demo](http://cranky-edison-12166d.netlify.com/)

## Usage

First, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://docs.datocms.com/api/reference.html).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://docs.datocms.com/gatsby/overview.html).

This websites uses:

* [Yarn](https://yarnpkg.com/) as package manager;
* [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
* [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.

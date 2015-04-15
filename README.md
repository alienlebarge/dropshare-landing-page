# dropshare-landing-page

## Drop...what?

[Dropshare](http://getdropsha.re) let you share files with friends or colleagues.
Instead of uploading them on a company server (like Cloudapp or Dropplr), [Dropshare](http://getdropsha.re) lets you turn your own server into a sharing plateform.

## What is this repo ?

I am a [Dropshare](http://getdropsha.re) user and I wanted to have my own landing page. You can have a look at it on [Codepen](http://codepen.io/alienlebarge/pen/wBaJPb).

Feel free to [fork this repo](https://github.com/alienlebarge/dropshare-landing-page/fork) and build your own landing page.

## Variables

You can find a description of variables on the [Dropshare User Guide](https://dropshare.zendesk.com/hc/en-us/articles/201139352-How-to-set-up-landing-pages-for-uploads).

## Required

These componments are used to build the landing page:

- [Node.js](http://nodejs.org)
- [Grunt-CLI](http://gruntjs.com/getting-started)
- [Compass](http://compass-style.org/)

## How to use

1. Install node modules `$ npm install`
1. Create a `settings.json` file ([see bellow](#settings))
1. Build your css (using Compass) in `/css`
1. Run `$ grunt`
1. Copy `Dropshare-LandingPage.html` as your Dropshare's landing page.
1. [Share files](http://media.giphy.com/media/12G5qRaZX42c7e/giphy-tumblr.gif) !

### Settings

Here's the informaiton you have to provide in `setings.json`:

```json
{
  "ga": "UA-XXXXXXX-X"
}
```

- `ga` is your Google Analytics id.

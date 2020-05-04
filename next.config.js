const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require('next-fonts');
const withCss = require('@zeit/next-css');

module.exports = withSass(withCss(withFonts(withImages({}))));

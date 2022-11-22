const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const imageShortcode = async (src, alt, customClass, lazy=true) => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let options = {
    widths: [500, 1000, 2000],
    formats: ["webp", "jpeg", null],
    urlPath: "/images/",
    outputDir: "./_site/images/"
  }

  let stats = await Image(src, options);
  let lowestSrc = stats["jpeg"][0];

  const srcset = Object.keys(stats).reduce(
    (acc, format) => ({
      ...acc,
      [format]: stats[format].reduce(
        (_acc, curr) => `${_acc} ${curr.srcset} ,`,
        ""
      ),
    }),
    {}
  );

  const source = `<source type="image/webp" srcset="${srcset["webp"]}">`;
  let img = '';
  if (lazy) {
    img = `<img
    loading="lazy"
    alt="${alt}"
    src="${lowestSrc.url}"
    sizes='100vw'
    srcset="${srcset["jpeg"]}">`;
  } else {
    img = `<img
    alt="${alt}"
    src="${lowestSrc.url}"
    sizes='100vw'
    srcset="${srcset["jpeg"]}">`;
  }

  
  const stringReturn = `<picture class="${customClass}"> ${source} ${img} </picture>`;
  return stringReturn;
};

const gifImage = async (src, alt, classtext) => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let options = {
    widths: [null],
    formats: [null],
    urlPath: "/images/",
    outputDir: "./_site/images/",
    sharpOptions: {animated: true}
  }

  let stats = await Image(src, options);
  let gif = stats["gif"][0];
  const img = `<img
  loading="lazy"
  alt="${alt}"
  src="${gif.url}"
  class="${classtext}"
  >`;

  return img;
}

// function generateImages(src) {
//   // let source = path.join(__dirname, "_includes/" , src);
//   let options = {
//     widths: [500, 1000, 2000],
//     formats: ['jpeg',],
//     outputDir: "./_site/images",
//     urlPath: "/images/",
//     useCache: true,
//     sharpJpegOptions: {
//       quality: 99,
//       progressive: true
//     }
//   };
//   // genrate images, ! dont wait
//   Image(src, options);
//   // get metadata even the image are not fully generated
//   return Image.statsSync(src, options);
// }

// function imageCssBackground (src, selector){
//   const metadata = generateImages(src);
//   let markup = [`${selector} { background-image: url(${metadata.jpeg[0].url});} `];
//   // I use always jpeg for backgrounds
//   metadata.jpeg.slice(1).forEach((image, index) => {
//     markup.push(`@media (min-width: ${metadata.jpeg[index].width}px) { ${selector} {background-image: url(${image.url});}}`);
//   });
//   return markup.join("");
// }

// async version of imageCSSbackground
const asyncImageCssBackground = async(src, selector) => {
  let options = {
    widths: [600, 1000, 2000],
    formats: ['jpeg', 'webp'],
    outputDir: "./_site/images",
    urlPath: "/images/",
    useCache: true,
    sharpJpegOptions: {
      quality: 99,
      progressive: true
    }
  };

  const metadata = await Image(src, options);

  let markup = [];
  Object.values(metadata).map(imageFormat => {
    markup.push(`${selector} { background-image: url(${imageFormat[0].url});} `);
    imageFormat.slice(1).forEach((image, index) => {
      markup.push(`@media (min-width: ${imageFormat[index].width}px) { ${selector} {background-image: url(${image.url});}}`);
    });
  })
  return markup.join("\n");
}


module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('videos');
    eleventyConfig.addPassthroughCopy('is-land.js');
    eleventyConfig.addPassthroughCopy('robots.txt');

    eleventyConfig.addNunjucksAsyncShortcode("asyncCssBackground", asyncImageCssBackground);

    eleventyConfig.addNunjucksAsyncShortcode("gifImage", gifImage);
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.setBrowserSyncConfig({
      open: true,
      browser: "Firefox Developer Edition"
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromISO(dateObj).toFormat("MMMM d, yyyy");
    });
    
    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    }
}

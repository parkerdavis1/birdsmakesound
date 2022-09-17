const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img")

const imageShortcode = async (src, alt, animated=false) => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let options = {
    widths: [500, 1000, 2000],
    formats: ["webp", "jpeg", null],
    urlPath: "/images/",
    outputDir: "./_site/images/"
  }

  //if animated GIF, include true parameter
  if (animated) {
    options['sharpOptions'] = {animated: true}
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

  const img = `<img
    loading="lazy"
    alt="${alt}"
    src="${lowestSrc.url}"
    sizes='100vw'
    srcset="${srcset["jpeg"]}">`;
  
  const stringReturn = `<picture> ${source} ${img} </picture>`;
  return stringReturn;
};

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

// my attempt at async version of imageCSSbackground
const asyncImageCssBackground = async(src, selector) => {
  let options = {
    widths: [1000, 2000],
    formats: ['jpeg',],
    outputDir: "./_site/images",
    urlPath: "/images/",
    useCache: true,
    sharpJpegOptions: {
      quality: 99,
      progressive: true
    }
  };

  const metadata = await Image(src, options);
  let markup = [`${selector} { background-image: url(${metadata.jpeg[0].url});} `];
  // I use always jpeg for backgrounds
  metadata.jpeg.slice(1).forEach((image, index) => {
    markup.push(`@media (min-width: ${metadata.jpeg[index].width}px) { ${selector} {background-image: url(${image.url});}}`);
  });
  return markup.join("");
}


module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy("**/*.mov");
    eleventyConfig.addPassthroughCopy("**/*.gif");

    eleventyConfig.addNunjucksAsyncShortcode("asyncCssBackground", asyncImageCssBackground);

    // eleventyConfig.addNunjucksShortcode("cssBackground", imageCssBackground);
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    eleventyConfig.addFilter("readableDate", dateObj => {
      // console.log("-----DATETIME FROM ISO-----");
      // console.log(DateTime.fromISO("2022-09-11"));
      // console.log(DateTime.fromISO("2022-09-11").toFormat("MMMM d, yyyy"));

      return DateTime.fromISO(dateObj).toFormat("MMMM d, yyyy");
      // return DateTime.fromJSDate(dateObj).toFormat("MMMM d, yyyy");
    })
    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    }
}

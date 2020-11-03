module.exports = (themeOptions) => {
  const contentPath = themeOptions.contentPath || `content/pages`
  const assetPath = themeOptions.assetPath || `content/assets`
  const webFontsConfig = themeOptions.webFontsConfig || {
    fonts: {
      google: [
        {
          family: `Montserrat`,
          variants: [`300`, `400`, `500`, `700`],
        },
        {
          family: `Nunito`,
          variants: [`300`, `400`, `500`],
        },
      ],
    },
  }
  return {
    contentPath,
    assetPath,
    webFontsConfig,
  }
}

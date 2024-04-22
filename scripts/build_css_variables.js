const StyleDictionary = require("style-dictionary").extend({
  source: ["./src/theme/tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "custom/scss",
      buildPath: "src/theme/",
      files: [
        {
          destination: "_figma_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
});

// Define a custom transform for color values
StyleDictionary.registerTransform({
  name: "color/hex8ToHex6",
  type: "value",
  matcher: (prop) =>
    prop.value &&
    typeof prop.value === "string" &&
    prop.value.startsWith("#") &&
    prop.value.length === 9,
  transformer: (prop) => prop.value.slice(0, -2),
});

// Create a custom transform group that includes the new color transform
StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["scss"].concat("color/hex8ToHex6"),
});

StyleDictionary.buildAllPlatforms();

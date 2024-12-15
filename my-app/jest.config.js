module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // Use Babel to transform JS and JSX files
    },
    moduleFileExtensions: ["js", "jsx"], // Allow .js and .jsx extensions
    testEnvironment: "jsdom", // Mimic a browser environment for React components
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy", // Mock CSS/SCSS imports
    },
  };
  
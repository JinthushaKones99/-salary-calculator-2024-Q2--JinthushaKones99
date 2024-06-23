/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-grey-100": "#fafafa",
        "neutral-white": "#fff",
        "color-strokes": "#d0d5dd",
        "color-text-secondary": "#757575",
        "color-grey-300": "#eee",
        "color-text-primary": "#000",
        "color-stroke-light": "#eaecf0",
        "color-pink-400": "#bc006d",
        "gray-200": "#e4e7ec",
        "color-purple-100": "#ebe6ed",
        "color-purple-400": "#33074f",
        "color-success-light": "#58975b",
        "blue-1": "#2f80ed",
        yellow: "#f2c94c",
        red: "#eb5757",
        gainsboro: "#dfe3e8",
        whitesmoke: {
          100: "#f2f2f2",
          200: "#efefef",
        },
        "dark-grey-400": "#212b36",
        goldenrod: "rgba(242, 201, 76, 0.1)",
        dodgerblue: "rgba(47, 128, 237, 0.1)",
        indianred: "rgba(235, 87, 87, 0.1)",
        lavenderblush: "rgba(235, 230, 237, 0.1)",
        "color-purple-300": "#ad9cb9",
        lightgray: "rgba(209, 204, 212, 0.1)",
      },
      spacing: {},
      fontFamily: {
        "text-small-regular": "Inter",
        "ui-small-strong": "'GT America'",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "3xs": "10px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

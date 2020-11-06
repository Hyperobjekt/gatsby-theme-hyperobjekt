export default {
  ":root": { "--reachSkipNav": 1 },
  "[data-reach-skip-link]": {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    position: "absolute",
  },
  "[data-reach-skip-link]:focus": {
    padding: "1rem",
    position: "fixed",
    top: "10px",
    left: "10px",
    background: "white",
    zIndex: "1000",
    width: "auto",
    height: "auto",
    clip: "auto",
  },
  // eslint-disable-next-line no-useless-computed-key
  ["@media (prefers-reduced-motion: reduce)"]: {
    "*": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },
  html: {
    lineHeight: 1.15 /* 1 */,
    "-webkitTextSizeAdjust": "100%" /* 2 */,
    boxSizing: "border-box",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },
}

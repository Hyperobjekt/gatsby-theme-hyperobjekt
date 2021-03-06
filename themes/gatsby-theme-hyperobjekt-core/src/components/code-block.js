import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDarkTheme from "prism-react-renderer/themes/vsDark"
import clsx from "clsx"
import { withStyles } from "@material-ui/core"

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
    marginLeft: -1 * theme.spacing(2),
    marginRight: -1 * theme.spacing(2),
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
      marginLeft: -1 * theme.spacing(3),
      marginRight: -1 * theme.spacing(3),
    },
  },
})

const CodeBlock = ({ classes, theme = vsDarkTheme, children, ...props }) => {
  const className = children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={clsx("pre", classes.root, className)} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default withStyles(styles, { name: "HypCodeBlock" })(CodeBlock)

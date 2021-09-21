import React from 'react'
import HTMLReactParser from 'html-react-parser'

const PostContent = ({ content }) => {
  /* check if it happens in the browser or on the server  */
  const isSSR = typeof document === 'undefined'
  /* we need to append the CodePen script only once  */
  let codePenScriptIsAppended = false
  const options = {
    replace: (node) => {
      if (
        node.name === 'script' &&
        node.attribs &&
        node.attribs.src === "https://cpwebassets.codepen.io/assets/embed/ei.js"
      ) {
        if (isSSR) {
          return
        }
        if (!codePenScriptIsAppended) {
          const script = document.createElement('script')
          script.src = node.attribs.src
          script.setAttribute('async', "")
          document.head.appendChild(script)
          codePenScriptIsAppended = true
        }
        return <React.Fragment />
      }
    }
  }
  return (
    <>{HTMLReactParser(content, options)}</>
  )
}
export default PostContent;
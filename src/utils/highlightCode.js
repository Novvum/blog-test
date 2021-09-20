import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css'

// hljs.configure({
//   languages: [
//     'php',
//     'javascript',
//     'json',
//     'bash',
//     'scss',
//     'css',
//     'yml',
//     'twig',
//     'html',
//   ],
// })

export default function highlightCode() {
  const codeBlocks = document.querySelectorAll('pre')
  codeBlocks.forEach(codeBlock => {
    console.log(codeBlock)
    if (typeof codeBlock === 'object') {
      hljs.highlightBlock(codeBlock)
    }
  })
}

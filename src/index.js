/* eslint-disable no-unused-vars */
import ContentProcess from './content/content-process'
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line

document.addEventListener('DOMContentLoaded', (event) => {
  console.info('**********************DOMContentLoaded start', event.target)
  let contentProcess = new ContentProcess()
  contentProcess.initialize()
  console.info('**********************DOMContentLoaded finish', contentProcess)
})

/* eslint-disable no-unused-vars */
import ContentProcess from '@/content/content-process'
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line

document.addEventListener('DOMContentLoaded', (event) => {
  let contentProcess = new ContentProcess()
  contentProcess.initialize()
})

/* eslint-disable no-unused-vars */
import ContentProcess from './content/content-process'
window.onload = () => {
  console.info('************start ')
  let contentProcess = new ContentProcess()
  contentProcess.initialize()
  console.info('************finish ')
}

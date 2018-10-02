/* eslint-disable no-unused-vars */
import ContentProcess from '@/content/content-process'
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
import { Monitor as ExperienceMonitor } from 'alpheios-experience' // eslint-disable-line

document.addEventListener('DOMContentLoaded', (event) => {
  let contentProcess = ExperienceMonitor.track(
    new ContentProcess(),
    [
      {
        monitoredFunction: 'getWordDataStatefully',
        experience: 'Get word data',
        asyncWrapper: ExperienceMonitor.recordExperience
      }
    ]
  )

  contentProcess.initialize()
})

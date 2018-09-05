/* eslint-disable no-unused-vars */
/* global safari */

import { Constants } from 'alpheios-data-models'
import { UIController, HTMLSelector, LexicalQuery, LanguageOptionDefaults, ContentOptionDefaults,
  UIOptionDefaults, Options, AnnotationQuery, ExtensionSyncStorage, MouseDblClick } from 'alpheios-components'

import TabScript from '@/lib/content/tab-script'

export default class ContentProcess {
  constructor () {
    this.state = new TabScript()
    this.state.status = TabScript.statuses.script.PENDING
    this.state.panelStatus = TabScript.statuses.panel.CLOSED

    this.options = new Options(ContentOptionDefaults, ExtensionSyncStorage)
    this.resourceOptions = new Options(LanguageOptionDefaults, ExtensionSyncStorage)
    this.uiOptions = new Options(UIOptionDefaults, ExtensionSyncStorage)

    this.ui = new UIController(this.state, this.options, this.resourceOptions, this.uiOptions)
    console.info('*******************ContentProcess constructor', this.ui)
  }

  initialize () {
    safari.self.addEventListener('message', this.messageHandler)

    this.test()
    this.ui.panel.open()
  }

  test () {
    console.info('Hello from web page!', Constants.LANG_LATIN)
    safari.extension.dispatchMessage('HelloBackground!')
  }

  messageHandler (event) {
    if (event.name === 'helloFromBackground') {
      console.info('Hello from application!', ContentOptionDefaults)
    }
  }
}

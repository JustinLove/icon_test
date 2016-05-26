api.memory.list('icon_test_number').then(function(list) {
  if (list.length < 1) {
    api.settings.definitions.ui.settings['icon_test_number'] = {
      title: 'Min Icons',
      type: 'text',
      default: ''
    }
    api.settings.definitions.ui.settings['icon_test_delay'] = {
      title: 'Delay Seconds',
      type: 'text',
      default: '5'
    }
    var number = api.settings.isSet('ui', 'icon_test_number', true)
    var delay = api.settings.isSet('ui', 'icon_test_delay', true)
    api.memory.store('icon_test_number', number).then(function() {
      api.memory.store('icon_test_delay', delay).then(function() {
        api.file.mountMemoryFiles({})
      })
    })
  }
})


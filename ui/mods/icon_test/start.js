api.memory.list('icon_test_number').then(function(list) {
  if (list.length < 1) {
    api.settings.definitions.ui.settings['icon_test_number'] = {
      title: 'Min Icons',
      type: 'text',
      default: ''
    }
    var value = api.settings.isSet('ui', 'icon_test_number', true)
    api.memory.store('icon_test_number', value).then(function() {
      api.file.mountMemoryFiles({})
    })
  }
})

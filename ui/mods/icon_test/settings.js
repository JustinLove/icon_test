(function() {
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

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)

  model.iconTestNumber = model.settingsItemMap()['ui.icon_test_number'].value
  model.iconTestNumber.subscribe(function(value) {
    api.memory.store('icon_test_number', value).then(function() {
      api.file.mountMemoryFiles({})
    })
  })

  model.iconTestDelay = model.settingsItemMap()['ui.icon_test_delay'].value
  model.iconTestDelay.subscribe(function(value) {
    api.memory.store('icon_test_delay', value).then(function() {
      api.file.mountMemoryFiles({})
    })
  })


  var settingsHtml = 
    '<div class="form-group">' +
      '<div class="sub-group">' +
        '<div class="option">' +
          '<label>Min Icons</label>' +
          '<input type="text" class="form-control" value="" data-bind="value: iconTestNumber" />' +
        '</div>' + 
        '<div class="option">' +
          '<label>Delay Seconds</label>' +
          '<input type="text" class="form-control" value="" data-bind="value: iconTestDelay" />' +
        '</div>' + 
      '</div>' + 
    '</div>'
  var $group = $(settingsHtml).appendTo('.option-list.ui')
})()

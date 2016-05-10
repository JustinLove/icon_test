(function() {
  api.settings.definitions.ui.settings['icon_test_number'] = {
    title: 'Min Icons',
    type: 'text',
    default: ''
  }

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)

  model.iconTestNumber = model.settingsItemMap()['ui.icon_test_number'].value
  model.iconTestNumber.subscribe(function(value) {
    api.memory.store('icon_test_number', value).then(function() {
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
      '</div>' + 
    '</div>'
  var $group = $(settingsHtml).appendTo('.option-list.ui')
})()

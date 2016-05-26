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

  var canvas = document.createElement('canvas')
  var gl = canvas.getContext("webgl");
  gl.viewportWidth = canvas.width;
  gl.viewportHeight = canvas.height;
  var max_texture_size = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  var max_renderbuffer_size = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)
  gl = canvas = undefined

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
        '<div class="option">' +
          '<label>MAX_TEXTURE_SIZE</label>' +
          '<p>' + max_texture_size + '</p>' +
        '</div>' + 
        '<div class="option">' +
          '<label>MAX_RENDERBUFFER_SIZE</label>' +
          '<p>' + max_renderbuffer_size + '</p>' +
        '</div>' + 
        '<div class="option">' +
          '<label>Online WebGL Test</label>' +
          '<p><a href="https://www.browserleaks.com/webgl">https://www.browserleaks.com/webgl</p>' +
        '</div>' + 
      '</div>' + 
    '</div>'
  var $group = $(settingsHtml).appendTo('.option-list.ui')
})()

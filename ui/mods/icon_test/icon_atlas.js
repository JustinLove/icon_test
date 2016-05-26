api.memory.load('icon_test_number').then(function(numberText) {
  api.memory.load('icon_test_delay').then(function(delayText) {
    var number = parseInt(numberText, 10)
    console.log(numberText, number)
    var delay = parseInt(delayText, 10) * 1000
    console.log(delayText, delay)

    var icons = model.strategicIcons()
    for (var i = icons.length;i < number;i++) {
      icons.push('icon_' + i.toString())
    }
    model.strategicIcons.valueHasMutated()
    setTimeout(model.sendIconList, delay)
  })
})

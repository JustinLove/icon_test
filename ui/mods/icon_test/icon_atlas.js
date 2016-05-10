api.memory.load('icon_test_number').then(function(value) {
  var number = parseInt(value, 10)
  console.log(value, number)

  var icons = model.strategicIcons()
  for (var i = icons.length;i < number;i++) {
    icons.push('icon_' + i.toString())
  }
  model.strategicIcons.valueHasMutated()
  setTimeout(model.sendIconList, 5000)
})

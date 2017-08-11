var h = require('mutant/h')
var PullObv = require('pull-obv')

function More(reduce, stream, render, initial) {
  var obv = PullObv(reduce, stream, initial)
  var nextScreen = window.innerHeight
  var el
  function _obv (fn) {
    if(!fn) return el

    obv(function (state) {
      fn(el = render(state, el))
      var height = parseInt(getComputedStyle(el).height)
      if(nextScreen && height < Math.max(nextScreen, window.innerHeight))
        setTimeout(obv.more)
    })

    setTimeout(obv.more)
    return el
  }

  _obv.more = function () {
    nextScreen = parseInt(getComputedStyle(el).height) + window.innerHeight
    obv.more()
  }

  return _obv
}

module.exports = More


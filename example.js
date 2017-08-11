
var HyperMore = require('./')
var h = require('mutant/h')

var hmore = HyperMore(function (state, item) {
  if(!state) return state = {log:[], append:[]}
  state.log.push(item)
  state.append.push(item)
  return state
}, function (_, cb) {
  cb(null, Math.random())
},
function (state, el) {
  function render (e) { return h('h1', '#'+e) }
  if(!el)
    return h('div.more', (state ? state.log : []).map(render))
  else
    while(state.append.length)
      el.appendChild(render(state.append.shift()))
  return el
})

document.body.appendChild(
  h('div', [
    hmore,
    h('button', {'ev-click': hmore.more}, ['Show More'])
  ])
)


# hypermore

more hyper when you click a button.

## example

provide a reduce function, a pull stream, and a render function.
and then attach `obv.more()` to a button.

``` js
var More = require('hypermore')
var h = require('mutant/h') //or hyperscript
var pull = require('pull-stream')

var obv = More(function (ary, item) {
  return [].concat(ary).concat(item)
}, pull.infinite(),
function (list, el) {
  //you might also use morphdom or just mutate the same element.
  return h('ol', list.map(function (n) { return h('li', ''+n) }))
})

document.body.appendChild(
  h('div.content', obv, h('button', {'ev-click': obv.more}, ['Show More']))
)
```

when you hit call `obv.more()` it will stream data until the target element
takes up the current size + screen height.

## License

MIT



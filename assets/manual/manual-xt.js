const button = document.getElementById('toc-button')
const list = document.getElementById('toc-list')
const tocWrapper = document.getElementById('toc-wrapper')
const mediaQuery = window.matchMedia('(max-width: 800px)')
const ariaExpanded = document.getElementById('toc-button').getAttribute('aria-expanded')

const initToc = function() {
  if (mediaQuery.matches) list.addEventListener('click', toggleToc)
  let width = sessionStorage.getItem('width')
  if (width == null) { width = 'fit-content' }
  else width=JSON.parse(width)
  tocWrapper.style.width = width
  let state = sessionStorage.getItem('button')
  if (state == null) { state = 'none' }
  else state=JSON.parse(state)
  list.style.display = state
  let html = sessionStorage.getItem('buttonhtml')
  if (html == null) { html = 'Contents &#11015;' }
  else html=JSON.parse(html)
  button.innerHTML = html
  let aria = sessionStorage.getItem('aria')
  if (aria == null) { aria = 'false' }
  else aria=JSON.parse(aria)
  button.setAttribute('aria-expanded', aria)
}

const toggleToc = function() {
  if (list.style.display == 'none') {
    list.style.display = 'block'
    button.innerHTML = `Contents &#11014;`
    button.setAttribute('aria-expanded', 'true')
    sessionStorage.setItem('button', JSON.stringify(list.style.display))
    sessionStorage.setItem('buttonhtml', '"Contents &#11014;"')
    sessionStorage.setItem('aria', '"true"')
  }
  else {
    list.style.display = 'none'
    button.innerHTML = `Contents &#11015;`
    button.setAttribute('aria-expanded', 'false')
    sessionStorage.setItem('button', JSON.stringify(list.style.display))
    sessionStorage.setItem('buttonhtml', '"Contents &#11015;"')
    sessionStorage.setItem('aria', '"false"')
  }
}

$(document).ready(function() {
  initToc()
  $("#toc-wrapper").resizable({
    handles: 'e',
    resize: function() { sessionStorage.setItem('width', JSON.stringify(this.style.width)) }
  })
  button.addEventListener('click', toggleToc)
})

mediaQuery.addEventListener('change', event => {
  if (event.matches) list.addEventListener('click', toggleToc)
  else list.removeEventListener('click', toggleToc)
})

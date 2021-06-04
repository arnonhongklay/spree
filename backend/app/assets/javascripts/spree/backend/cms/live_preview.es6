document.addEventListener('DOMContentLoaded', function() {
  const LiveViewSwitcher = document.getElementById('LiveViewSwitcher')

  if (!LiveViewSwitcher) return

  LiveViewSwitcher.addEventListener('click', function(event) {
    if (event.target && event.target.matches("input[type='radio']")) {
      switchLiveViewClass(event.target.id)
    }
  })

  function switchLiveViewClass(value) {
    const liveViewCont = document.getElementById('liveViewCont')

    liveViewCont.classList = ''
    liveViewCont.classList.add(value)
  }

  const cmsSectionEditorFullScreen = document.getElementById('cmsSectionEditorFullScreen')

  cmsSectionEditorFullScreen.addEventListener('click', function(event) {
    if (event.target.getAttribute('aria-pressed') === 'true') {
      document.body.classList.remove('cmsSectionFullScreenMode')
    } else {
      document.body.classList.add('cmsSectionFullScreenMode')
    }
  })
})
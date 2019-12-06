import juejin from './images/juejin.svg'
import sifou from './images/sifou.png'

const $siteList = $('.site-list')
const $lastLi = $('.site-item').last()
const data = JSON.parse(localStorage.getItem('hasMap')) || [
  {
    logo: juejin,
    logoType: 'img',
    url: 'https://juejin.im'
  },
  {
    logo: sifou,
    logoType: 'img',
    url: 'https://segmentfault.com'
  }
]
const hasMap = data

let timer = null

let startTime = null

let endTime = null

let isMove = false

const render = () => {
  $siteList.find('li:not(:last())').remove()
  hasMap.forEach((node, index) => {
    const $li = $(`<li class="site-item">
      <a href="${node.url}">
        <div class="website">
          <p class="logo">
            ${node.logoType === 'img' ? '<img src="' + node.logo + '">' : parseUrl(node.url)[0]}
          </p>
          <span class="title">${parseUrl(node.url)}</span>
          <span class="close">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hebingxingzhuang"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>`)
    $li.insertBefore($lastLi)
    $li.on('click', '.close', (e) => {
      e.preventDefault()
      hasMap.splice(index, 1)
      render()
    })
    $li.on('touchstart', function (e) {
      startTime = +new Date()
      timer = setTimeout(() => {
        $($('.close').get(index)).addClass('close-hover')
        $li.addClass('move')
      }, 700)
    })
    $li.on('touchmove', function (e) {
      if (e.changedTouches[0].clientY > 10) {
        clearTimeout(timer)
      }
    })
    $li.on('touchend', function () {
      endTime = +new Date()
      clearTimeout(timer)
      if (endTime - startTime < 700) {
        $('.close').removeClass('close-hover')
        $li.removeClass('move')
      }
    })
    const string = JSON.stringify(hasMap)
    localStorage.setItem('hasMap', string)
  })
}
const parseUrl = (url) => {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '')
}
render()
$('.add-wrap').on('click', function () {
  let url = window.prompt('请输入要添加的网址')
  if (url === '') {
    alert('url不能为空')
    return
  }
  if (url.indexOf('http') !== 0) {
    url = `https://${url}`
  }
  hasMap.push({
    logo: parseUrl(url)[0],
    logoType: 'text',
    url
  })
  render()
})

$(document).on('keyup', function (e) {
  const { key } = e
  hasMap.forEach((item) => {
    if (key === item.logo) {
      window.open(item.url)
    }
  })
})

$(document).on('click', function () {
  $('.site-item').removeClass('move')
  $('.site-item .close').removeClass('close-hover')
})

$('.search-text').on('keyup', function (e) {
  e.stopPropagation();
})

$('.site-list').sortable().disableSelection();

// 页面关闭之前触发
// window.onbeforeunload = function () {
//   const string = JSON.stringify(hasMap)
//   localStorage.setItem('hasMap', string)
// }

$(document).on('scroll', function () {
  const scrollTop = $(this).scrollTop()
  const $header = $('.global-header')
  const $fixedHeader = $('.fixed-header')
  const $headerTop = $header.offset().top
  if (scrollTop > $headerTop) {
    $fixedHeader.show()
  }

  if (scrollTop === 0) {
    $fixedHeader.hide()
  }
})
import juejin from './images/juejin.svg'
import sifou from './images/sifou.png'
import vue from './images/Vue.png'
import react from './images/React.png'
import angular from './images/Angular.png'
import antDesign from './images/ant design.svg'
import iview from './images/iview.svg'
import element from './images/element.png'

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
  },
  {
    logo: vue,
    logoType: 'img',
    url: 'https://cn.vuejs.org/'
  },
  {
    logo: react,
    logoType: 'img',
    url: 'https://zh-hans.reactjs.org/'
  },
  {
    logo: angular,
    logoType: 'img',
    url: 'https://angular.io/'
  },
  {
    logo: antDesign,
    logoType: 'img',
    url: 'https://ant.design/index-cn'
  },
  {
    logo: iview,
    logoType: 'img',
    url: 'https://www.iviewui.com/'
  },
  {
    logo: element,
    logoType: 'img',
    url: 'https://element.eleme.io/#/zh-CN'
  },
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

const handleCancel = () => {
  $('.popup-box-wrap').fadeOut()
  $('.popup-box').css({
    'opacity': 0,
    'transform': 'translate3d(-50%, -150%, 0)'
  })
  clearText()
}

const clearText = () => {
  $('#url').val('')
  $('#logo').val('')
}

render()
$('.add-wrap').on('click', function () {
  $('.popup-box-wrap').fadeIn()
  $('.popup-box').css({
    'opacity': 1,
    'transform': 'translate3d(-50%, -50%, 0)'
  })
})

$('.btn-ok').on('click', function () {
  // let url = window.prompt('请输入要添加的网址')
  const $url = $('#url')
  const $logo = $('#logo')
  let $urlVal = $url.val()
  let $logoVal = $logo.val()

  if ($urlVal === '') {
    alert('url不能为空')
    return
  }
  if ($urlVal.indexOf('http') !== 0) {
    $urlVal = `https://${$urlVal}`
  }
  hasMap.push({
    logo: !$logoVal ? parseUrl($urlVal)[0] : $logoVal,
    logoType: !$logoVal ? 'text' : 'img',
    url: $urlVal
  })
  render()
  handleCancel()
})

$('.btn-cancel').on('click', handleCancel)

$('.popup-box-wrap').on('keyup', '#url', '#logo', function (e) {
  e.stopPropagation()
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

let startIndex
let endIndex

$('.site-list').sortable({
  containment: 'parent',
  cursor: 'move',
  start(ev, { item }) {
    startIndex = $(item).index()
  },
  stop(ev, { item }) {
    endIndex = $(item).index()
    hasMap.splice(endIndex, 1, ...hasMap.splice(startIndex, 1, hasMap[endIndex]));
    render()

  }
}).disableSelection()

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

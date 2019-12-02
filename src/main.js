const $siteList = $('.site-list')
const $lastLi = $('.site-item').last()
const data = JSON.parse(localStorage.getItem('hasMap')) || [
  {
    logo: './images/juejin.svg',
    logoType: 'img',
    url: 'https://juejin.im'
  },
  {
    logo: './images/sifou.png',
    logoType: 'img',
    url: 'https://segmentfault.com'
  }
]
const hasMap = data

const render = () => {
  $siteList.find('li:not(:last())').remove()
  hasMap.forEach(node => {
    const $li = $(`<li class="site-item">
      <a href="${node.url}">
        <div class="website">
          <p class="logo">
            ${node.logoType === 'img' ? '<img src="' + node.logo + '">' : node.url[0]}
          </p>
          <span class="title">${node.url}</span>
        </div>
      </a>
    </li>`)
    $li.insertBefore($lastLi)
    const string = JSON.stringify(hasMap)
    localStorage.setItem('hasMap', string)
  })
}

render()

$('.add-wrap').on('click', function () {
  let url = window.prompt('请输入要添加的网址')
  if (url.indexOf('http') !== 0) {
    url = `https://${url}`
  }
  hasMap.push({
    logo: url[0],
    logoType: 'text',
    url
  })
  render()
})

// 页面关闭之前触发
window.onbeforeunload = function () {
  const string = JSON.stringify(hasMap)
  localStorage.setItem('hasMap', string)
}
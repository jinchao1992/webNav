const bgList = []
const url = 'https://img.xjh.me/random_img.php'

const handleRandomBg = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      data: {
        return: 'json',
        type: 'bg',
        ctype: 'nature'
      },
      success(res) {
        resolve(res)
      },
      error (err) {
        reject(err)
      }
    })
  })
}

const getRandomBg = () => {
  handleRandomBg().then((data) => {
    const { result } = data
    if (result === 200) {
      $(document.body).css({
        'background-image': `url(https:${data.img})`
      })
    }
  }, (err) => {
    console.log(err)
  })
}

getRandomBg()

$('.btn-reload').on('click', getRandomBg)


Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548917590712&di=c4c963d39ff285e270195c4856e5872b&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2016%2F09%2F04%2F2555005246233016839_580x580.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548917590952&di=4e073d9eff7006f93b1285c130c70b68&imgtype=0&src=http%3A%2F%2Fimg3.c.yinyuetai.com%2Fothers%2Fadmin%2F170410%2F0%2F4e13b0733ba378f314fb733a62b6e309_0x0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548917590951&di=514ecd820ff233ac5919721783c8e08d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160923%2F4caaf73e097240ff8fcd2ed67203e91f_th.jpeg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad:function(options){
    console.log(options)
  }
  

})
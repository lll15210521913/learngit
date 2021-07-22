Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    list:[]
  },
  onLoad() {
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list : data
        })
      }
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  //监听其他事件
  //监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  }
})
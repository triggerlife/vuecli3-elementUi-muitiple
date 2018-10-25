import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userInfo:{},
      schoolInfo:{},
      leaveType: {},
      // --TODO 动态引入默认头像图片有问题。所以目前是这么操作的。后续待优化
      defaultAvatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NERFODI3Q0I3NjExRThCMThGQURCRjc0NzRCOTMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1NERFODI4Q0I3NjExRThCMThGQURCRjc0NzRCOTMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU0REU4MjVDQjc2MTFFOEIxOEZBREJGNzQ3NEI5MzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTU0REU4MjZDQjc2MTFFOEIxOEZBREJGNzQ3NEI5MzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qBioPAAADlklEQVR42sxZTUxTQRCePvoDLaUgJdDY9kIi4eBJuAtngjEmGpWTHqy/Zw/Gi168axRjPPl7MjExXozcpd6VhJMSDuW/LYFXKM73nEdqbV93t1Cd5Lv07cx8u7M7O7P1ZbNZMhCLMcoYY4wwjjGOMiLyvchYYMwx4GCGMcso6zrya45PMq4zLjJSHuNCjCOM44wz8tsPxkvGI8ZPnZVQkV4xPM+43YBcPUmJ7rzY6j0ogmcZ3xjXGEFqXoJiCzbPNUMQ4X/MeMuI08ELbL4RH35dgmHGO0aGDl8y4iusShCzec2YoNbJhPj0qxB8yJik1suk+PYkiE17hf6dwPf5enmwt9YMGiZSv59isRiFw2EKBAJkWRbt7u7S5uYmLS8v087Ojq5JcPjEyFUTvK97WkEsHo+Tz+f74/e2tjaKRqPU0dFB+Xye1tfXdYgiwd9zD6gb4jTjsg45EOjr6/uLXPXq9vT0UDqdplAopGP+knDaJ3iVEVC+fjiMIKczvr+/X4dgQDg5BIEpHe3Ozk7Hqdb1EQw6IdeQKWduUpUkdTTb29uNjqgmQXAaBcFxXUc4rUaXcFD7Kh8DwROtSnJeB6qOjIDgkK7W3t6eEUEDvSEQTOhqbW9vGxE0SNoJEIy2KsQGKxi1TBwhzbRKDwTzukrlctmIoIFeHgQXtbXyeSOCuJM1ZREEv+tqra2t0cbGxqHrgBsIfjVZDThU3fQYZ7B6kKwlTbW22Lbt1HsqksvlqFQqmbiZAcEvOo109SqurKx4jsEkDEJLwmnWkueIF6a5rVgsen5HZW0o4FR28yA6fZv+H7GF037BiuV8ZmIJ5X2jYtVAnrvbrlL7LraMbnXS3d3tOQYlv2YVAw53arWd+HBDlVgkEqFkMul0c16C76lUyulhFIneqlyo6k4ebyUn6/XGKDjhqKurq2Foq/XQk6CPKRQKzqne2tqqNfQp41W9vrhyBonK1wVU0GgvsWrNCPYjJgeAIPJjRen2nnFT5enDlu7+o9t/IETNkqvV12CLiN0P4tNWfd1C8jrFYZxOJBKmJ1FpLw8MDExzhE6LT1IlCCnFYrEMk8TMlg6BH2xeYJIZ9lPyqgcbFZg4OMOMJweUzG2xNSxPbp7bx1JsL5ek0x9kPKDfL/i6siC6g2JrqfKJpO42UP0bAvsQSVdSjNvwj0vbekwabbemL8hNMCfl3GeSvyHw8oU0s7q6qlRh/xJgADTn8mnVY0heAAAAAElFTkSuQmCC',
      groupData: []
  },

  mutations: {
      /**
       * 设置用户信息
       */
    setUserInfo (state, payload) {
      state.userInfo = payload
    },
      /**
       * 设置学校信息
       */
      setSchoolInfo (state, payload) {
          state.schoolInfo = payload
      },
      /**
       * 设置请假类型
       */
      setLeaveType (state, payload) {
          state.leaveType = payload
      },
      /**
       * 设置考勤组
       */
      setGroupData (state,payload) {
          state.groupData = payload
      }
  },
  getters: {
      /**
       * 获取用户信息
       */
    getUserInfo (state) {
          return state.userInfo
      },
      /**
       * 获取学校信息
       */
      getSchoolInfo (state) {
          return state.schoolInfo
      },
      /**
       * 获取请假信息
       */
      getLeaveType (state) {
          return state.leaveType
      },
      /**
       * 获取默认图片
       */
      getDefaultAvatar (state) {
          return state.defaultAvatar
      },
      /**
       * 获取学校考勤组
       */
      getGroupData (state) {
          return state.groupData
      }
  }
})

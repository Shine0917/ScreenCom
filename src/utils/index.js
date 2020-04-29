import Taro, { useState, useEffect } from '@tarojs/taro'
import { useDispatch } from '@tarojs/redux'
import { AtButton } from 'taro-ui'

import './index.scss'
import { LOGIN } from '../../constants'

export default function WeappLoginButton() {
  const [isLogin, setIsLogin] = useState(false)

  const dispatch = useDispatch()

  // async function onGetUserInfo(e) {
  //   setTimeout(() => {
  //     setIsLogin(true)
  //   }, 0);

  //   const { avatarUrl, nickName } = e.detail.userInfo
  //   const userInfo = { avatar: avatarUrl, nickName }

    // dispatch({
    //   type: LOGIN,
    //   payload: {
    //     userInfo: userInfo,
    //   },
    // })

  //   setIsLogin(false)
  // }

  useEffect(() => {
setIsLogin(true);
   const { avatarUrl, nickName } = e.detail.userInfo
    const userInfo = { avatar: avatarUrl, nickName }

    // dispatch({
    //   type: LOGIN,
    //   payload: {
    //     userInfo: userInfo,
    //   },
    // })
// dispatch 放到外面去，成功之后执行下面一句

    setIsLogin(false)

  },[useInfo])

  return (
    <AtButton
      openType='getUserInfo'
      onGetUserInfo={onGetUserInfo}
      type='primary'
      className='login-button'
      loading={isLogin}
    >
      微信登录{isLogin}
    </AtButton>
  )
}
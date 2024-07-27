import { userInfoStore } from "./userInfo";


const useStore = () => {
  return {
    userInfo: userInfoStore()
  }
}

export default useStore
import {getUser} from '@/service/user.service.js'

class User {
  data = null

  allData() {
    if(!this.data) {
        this.loadUser()
    }
    return this.data
  }

  async getUser() {
    const data2 = await getUser()

    if(!data2.id) return

    this.data = data2
    localStorage.setItem('user', JSON.stringify(data2)) // we could also use IndexDB xD
  }

  loadUser() {
      const user = JSON.parse(localStorage.getItem('user')) // we could also use IndexDB xD
      this.data = user
  }

  hasData() {
      return this.data ? 'Yep! ;D' : 'no way :/'
  }

}

const userConfig = new User()

export default userConfig
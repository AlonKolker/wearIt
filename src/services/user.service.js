export const userService = { login,getLoggedInUser,setLogout }
const STORAGE_KEY = 'loggedin'

function login(user) {
  console.log(user)
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}
function getLoggedInUser() {
  const user = JSON.parse(sessionStorage.getItem(STORAGE_KEY))
  return user
}

async function setLogout() {

      sessionStorage.clear()
}
export const fetchUser = async (userId) => {
  try{
    const response = await fetch(`https://api.github.com/users/${userId}`)
    if(!response.ok) {
      return null
    }
    const userData = await response.json()
    return userData
  } catch (err) {
    return Promise.reject(err.message)
  }
}
/*fetchUser('google')
  .then(userData => console.log(userData))
  .catch(err => Promise.reject())*/
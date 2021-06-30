export const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return Promise.resolve(userData);
  } catch (err) {
    const res = Promise.reject(new Error('Error'))
    return res
  }
};
//fetchUser('google')
  //.then(userData => console.log(userData))

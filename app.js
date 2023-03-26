import axios from 'axios'

//Getdata function lists data based on userid
async function getData(userId) {
    
  //A request was made to the users API.
  const { data: user } = await axios(
    'https://jsonplaceholder.typicode.com/users/' + userId
  )
  console.log(user)

  //A request was made to the posts API.
  const { data: post } = await axios(
    'https://jsonplaceholder.typicode.com/posts/' + userId
  )
  console.log(post)
}

export default getData

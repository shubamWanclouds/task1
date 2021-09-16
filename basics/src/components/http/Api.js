import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const getApi = ({callback}) => {
  axios.get(BASE_URL+'posts')
  .then( response => {
    callback(null, response.data);
  })
  .catch(error => {
    console.log(error);
    callback(error)
  })
};

export const updateApi = ({callback, postId, data}) => {
  axios.patch(BASE_URL+ 'posts/'+ postId, data)
    .then( response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error)
    })
}

export const deleteApi = ({callback, postId}) => {
  axios.delete(BASE_URL+ 'posts/'+ postId)
      .then( response => {
        callback(null, response.data)
      })
      .catch(error => {
        callback(error)
      })
}

export const postApi = ({callback, data}) => {
  axios.post(BASE_URL+ 'posts', data)
      .then( response => {
        callback(null, response.data)
      })
      .catch(error => {
        callback(error)
      })
}


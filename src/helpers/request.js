// export default async function (path, opt) {
//   const url = 'https://www.easy-mock.com/mock/5cfa472b40971927560c5d71/blog/' + path
//   const options = Object.assign({
//     method: 'GET',
//   }, opt)

//   try {
//     const response = await fetch(url, options)
//     const { data, code } = await response.json()

//     if (code === '0') {
//       return data
//     } else {
//       // console.log(code)
//     }
//   }
//   catch (e) {
//     // console.log(e)
//   }
// }

import axios from 'axios'

export default function (path, callback) {
  const url = 'https://www.easy-mock.com/mock/5cfa472b40971927560c5d71/blog/' + path
  axios.get(url)
    .then((response) => {
      const { data, status } = response
      const result = data.data
      if (status === 200) {
        callback(result)
      } else {
        console.log('Fail')
      }
    })
    .catch((err) => {
      console.log('Fail!', err)
    })
}
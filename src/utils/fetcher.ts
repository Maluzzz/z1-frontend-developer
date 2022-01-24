const url = 'https://front-exercise.z1.digital/evaluations'

function timeout(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const fakeRequest = async () => {
  /**
  * To prevent to many requesto to the production endpoint
  * in real life we should have an local endpoint o stage server
  */
  const results = ['Too much Glance', 'Approved']
  const random = Math.floor(Math.random() * 2)
  await timeout(3000)
  return { summary: { outcome: results[random] } }
}

export const fetchApi = async (img: string) => {
  if (process.env.NODE_ENV === 'development') return fakeRequest()
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idCard: img,
    }),
  })
  const res = await response.json()
  return res
}

export default fetchApi

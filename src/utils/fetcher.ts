

const url = 'https://front-exercise.z1.digital/evaluations'

export const fetchApi = async (img: string) => {
  await timeout(3000)

  
  // const response = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     idCard: img
  //   })
  // })
  //const res = await response.json()
  return {"summary": {"outcome": 'Approved'}}
}


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default fetchApi

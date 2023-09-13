const url = 'https://pogoapi.net/api/v1/pokemon_names.json'
const options = {
  method: 'GET',
}
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options)

    // 檢查響應狀態碼，通常 200 表示成功
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // 解析 JSON 響應數據
    const data = await response.json()
    // console.log(data)
    return data
  } catch (error) {
    // 處理錯誤
    console.error('Fetch error:', error)
    throw error // 可選：將錯誤再次拋出，以便外部代碼處理
  }
}
const responseData = await fetchData(url, options)

export default responseData

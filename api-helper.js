async function hitApiWithGetMethod(url = '') {
  // 'tembak' api-nya
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  })

  // Kembalikan respon dari API-nya sebagai JSON / TEXT
  const clone = response.clone()
  try {
    return await response.json()
  } catch (error) {
    return await clone.text()
  }
}

async function hitApiWithPostMethod(url = '', data = {}) {
  // 'tembak' api-nya
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })

  // Kembalikan respon dari API-nya sebagai JSON / TEXT
  const clone = response.clone()
  try {
    return await response.json()
  } catch (error) {
    return await clone.text()
  }
}
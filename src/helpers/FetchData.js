const DEFAULT_ITEMS_LIMIT = 10
export const fetchData = ({ setLoading, setData, activeTab }) => {
  const url = `https://api.spaceflightnewsapi.net/v3/${activeTab}?_limit=${DEFAULT_ITEMS_LIMIT}`
  const existentResults = JSON.parse(localStorage.getItem(url))
  if (existentResults) {
    setData(existentResults)
    return
  }
  setLoading(true)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(url, JSON.stringify(data))
      setData(data)
    })
    .catch(e => alert(e))
    .finally(() => setLoading(false))
}

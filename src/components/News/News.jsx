import { useEffect, useState } from 'react'
import { New } from '../New'
import { fetchData } from '../../helpers/FetchData'
import { Loader } from '../Loader'

export default function News({ activeTab }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData({ setLoading, setData, activeTab })
  }, [activeTab])

  return (
    <div className="w-screen">
      {loading && <Loader label={activeTab} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-12">
        {!loading &&
          data?.map(content => <New key={content.id} data={content} />)}
      </div>
    </div>
  )
}

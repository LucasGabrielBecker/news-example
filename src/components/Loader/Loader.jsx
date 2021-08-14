import SyncLoader from 'react-spinners/SyncLoader'
export default function Loader({ label }) {
  return (
    <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center">
      <p className="mb-4 font-bold">Fetching {label}</p>
      <SyncLoader size={20} color="#910d0d" margin={10} />
    </div>
  )
}

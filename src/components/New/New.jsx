import { format } from 'date-fns'

export default function New({ data }) {
  return (
    <div className="w-96 rounded-xl relative bg-cover object-contain shadow-md ">
      <div
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          objectFit: 'contain',
        }}
        className="h-24 bg-contain rounded-md rounded-b-none"
      />
      <div className="px-6 h-auto flex flex-col justify-between">
        <div className="">
          <a href={data.url}>
            <h1 className="text-lg break-normal md:break-all font-bold text-red-800 my-4">
              {data.title}
            </h1>
          </a>
          <p className="text-md text-gray-700 font-bold mb-2">{data.summary}</p>
        </div>
        <div className="my-2 text-sm text-gray-700">
          {format(new Date(data.publishedAt), 'MM/dd/yyyy - HH:mm')}
        </div>
      </div>
    </div>
  )
}

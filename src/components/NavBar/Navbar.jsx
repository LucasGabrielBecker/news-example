export default function NavBar({ activeTab, handleTab }) {
  const correctClassName = tab =>
    activeTab === tab
      ? 'ml-4 font-bold cursor-pointer text-gray-700'
      : 'ml-4 cursor-pointer text-gray-600'

  return (
    <div className="w-full h-24 shadow-md mb-8 flex items-center">
      <ul className="list-none inline-flex mt-4 ml-12 font-sans">
        <li
          onClick={() => handleTab('Blogs')}
          className={correctClassName('Blogs')}
        >
          Blogs
          {activeTab === 'Blogs' && (
            <div className="w-14 h-1 bg-gray-800 rounded-lg" />
          )}
        </li>
        <li
          onClick={() => handleTab('Articles')}
          className={correctClassName('Articles')}
        >
          Articles
          {activeTab === 'Articles' && (
            <div className="w-14 h-1 bg-gray-800 rounded-lg" />
          )}
        </li>
        <li
          onClick={() => handleTab('Reports')}
          className={correctClassName('Reports')}
        >
          Reports
          {activeTab === 'Reports' && (
            <div className="w-14 h-1 bg-gray-800 rounded-lg" />
          )}
        </li>
      </ul>
    </div>
  )
}

import { useState, useMemo } from 'react'
import './SearchableList.css'

export default function SearchableList({ items, searchFields = [], onSelect, selectedItem, renderDetails }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items

    const term = searchTerm.toLowerCase()
    return items.filter(item =>
      searchFields.some(field => {
        const value = item[field]
        return value && value.toString().toLowerCase().includes(term)
      })
    )
  }, [items, searchTerm, searchFields])

  const handleSelect = (item) => {
    onSelect(selectedItem?.id === item.id ? null : item)
  }

  return (
    <div className="searchable-list">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="list-container">
        <ul className="item-list">
          {filteredItems.length > 0 ? (
            filteredItems.sort((a,b) => a.name > b.name).map(item => (
              <li key={item.id} className="list-item-wrapper">
                <div
                  className={`list-item ${selectedItem?.id === item.id ? 'selected' : ''}`}
                  onClick={() => handleSelect(item)}
                >
                  <div className="item-name">{item.name}</div>
                  {item.description && (
                    <div className="item-description">{item.description}</div>
                  )}
                </div>
                {selectedItem?.id === item.id && renderDetails && (
                  <div className="item-details">
                    {renderDetails(item)}
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="no-results">No results found</li>
          )}
        </ul>
      </div>

      {filteredItems.length > 0 && (
        <div className="result-count">
          Showing {filteredItems.length} of {items.length}
        </div>
      )}
    </div>
  )
}

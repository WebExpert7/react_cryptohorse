import React from 'react'

const BrowseSearchBar = () => (
  <div className='Container Container--lg'>
    <div className='InputButtons InputButtons--searchSmall'>
      <input
        type='text'
        className='InputButtons-input'
        placeholder='Search Kitties...'
        defaultValue
        maxLength={200}
      />
      <div className='InputButtons-buttons'>
        <button className='InputButtons-button InputButtons-button--primary'>
          Search
        </button>
        <button className='InputButtons-button InputButtons-button--dismiss'>
          Clear
        </button>
      </div>
    </div>
  </div>
)

export default BrowseSearchBar

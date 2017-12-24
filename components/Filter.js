import React, { Fragment } from 'react'
import Link from 'next/link'

const Filter = ({ url: { query: { title = 'marketplace' } } } = {}) => (
  <Fragment>
    <div className='Filter'>
      <div className='Filter-container'>
        <div className='Filter-selectors'>
          <select className='Filter-select' placeholder='Sorting order'>
            <option value>Youngest first</option>
            <option value='old-first'>Oldest first</option>
            <option value='cheap'>Cheapest first</option>
            <option value='expensive'>Most expensive first</option>
          </select>
        </div>
        <div className='Filter-sortBy'>Sort by</div>
        <div className='Filter-tabs'>
          <Link as={`/marketplace`} href='/marketplace'>
            <span
              className={`Filter-tab ${title === 'marketplace' ? 'Filter-tab--active' : ''}`}
            >
              Marketplace
            </span>
          </Link>
          <Link as={`/marketplace/Siring`} href='/marketplace?title=Siring'>
            <span
              className={`Filter-tab ${title === 'Siring' ? 'Filter-tab--active' : ''}`}
            >
              Siring
            </span>
          </Link>
          <Link as={`/marketplace/Gen0`} href='/marketplace?title=Gen0'>
            <span
              className={`Filter-tab ${title === 'Gen0' ? 'Filter-tab--active' : ''}`}
            >
              Gen 0
            </span>
          </Link>
          <Link as={`/marketplace/All`} href='/marketplace?title=all'>
            <span
              className={`Filter-tab ${title === 'all' ? 'Filter-tab--active' : ''}`}
            >
              All
            </span>
          </Link>
        </div>
      </div>
    </div>
    <div className='BrowseFilterBar-filterResults'>
      <div className='KittiesFilter'>
        <div className='KittiesFilter-header'>
          <span className='KittiesFilter-header-count'>
            66&nbsp;184 results
          </span>
          <span className='KittiesFilter-header-toggle' role='button'>
            <svg
              className='KittiesFilter-header-toggle-icon'
              width={18}
              height={12}
              viewBox='0 0 18 12'
            >
              <g
                fill='none'
                fillRule='evenodd'
                strokeLinecap='round'
                strokeWidth={2}
              >
                <path d='M1.5 1h15M4.5 6h10M7.5 11h3' />
              </g>
            </svg>
            {/* react-text: 100 */}Filter results
            {/* /react-text */}
          </span>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Filter

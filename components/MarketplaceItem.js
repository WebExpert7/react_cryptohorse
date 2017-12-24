import React, { Fragment } from 'react'
import Link from 'next/link'

const MarketplaceItem = ({ id = '288755' }) => (
  <Fragment>
    <div className='KittiesGrid-item'>
      <Link as={`/kitty/${id}`} href='/kittyProfile'>
        <a aria-current='false'>
          <div className='KittyCard-wrapper'>
            <div className='KittyCard u-bg-alt-topaz KittyCard--responsive'>
              <img
                className='KittyCard-image'
                src='https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/288755.svg'
                alt='Kitty #288755 - null'
              />
              <div className='KittyCard-status'>
                <div className='KittyStatus'>
                  <div className='KittyStatus-item'>
                    <span className='KittyStatus-itemIcon'>
                      <i className='Icon Icon--tag' />
                    </span>
                    <span className='KittyStatus-itemText'>
                      {/* react-text: 115 */}For sale
                      {/* /react-text */}
                      <span className='KittyStatus-note'>
                        <small>Ξ</small>
                        {/* react-text: 118 */}
                        {/* /react-text */}
                        {/* react-text: 119 */}2.4487
                        {/* /react-text */}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <span className='KittyCard-newBadge'>
                <svg
                  className='NewBadge'
                  width='100%'
                  height='100%'
                  viewBox='0 0 38 38'
                >
                  <g fill='none' fillRule='evenodd'>
                    <path d='M37.985 0L0 37.985V0h37.985z' fill='#E96BD4' />
                    <text
                      fill='#FFF'
                      fontFamily='Calibre-Semibold, Calibre'
                      fontSize={12}
                      fontWeight={500}
                      letterSpacing='.4'
                      transform='rotate(-45 13.581 14.581)'
                    >
                      <tspan x='3.081' y='16.581'>New</tspan>
                    </text>
                  </g>
                </svg>
              </span>
            </div>
            <div className='KittyCard-details'>
              <div className='KittyCard-subname'>
                Kitty {id} · Gen 0
              </div>
              <div className='KittyCard-coldown'>Fast</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  </Fragment>
)

export default MarketplaceItem

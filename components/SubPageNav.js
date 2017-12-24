import React from 'react'
import Link from 'next/link'

const SubPageNav = ({ url }) => (
  <div className='SubpageNav'>
    <Link as={'/about'} href='/about'>
      <a
        className={`SubpageNav-btn ${url.pathname === '/about' ? 'SubpageNav-btn--active' : ''}`}
        aria-current='true'
      >
        <img src='../static/icons/logo.svg' />
        {/* react-text: 20 */}About
        {/* /react-text */}
      </a>
    </Link>
    <Link as={'/press'} href='/press'>
      <a
        className={`SubpageNav-btn ${url.pathname === '/press' ? 'SubpageNav-btn--active' : ''}`}
        aria-current='false'
      >
        <img src='../static/icons/press.svg' />
        {/* react-text: 23 */}Press
        {/* /react-text */}
      </a>
    </Link>
    <Link as={'/technical-details'} href='/technicalDetails'>
      <a
        className={`SubpageNav-btn ${url.pathname === '/technicalDetails' ? 'SubpageNav-btn--active' : ''}`}
        aria-current='false'
      >
        <img src='../static/icons/wrench.svg' />
        {/* react-text: 26 */}Technical Details
        {/* /react-text */}
      </a>
    </Link>
    <a
      href='https://www.dropbox.com/s/a5h3zso545wuqkm/CryptoKitties_WhitePapurr_V2.pdf?dl=0'
      target='_blank'
      rel='noopener noreferrer'
      className='SubpageNav-btn'
    >
      <img src='../static/icons/paper.svg' />
      {/* react-text: 29 */}White Pa-purr
      {/* /react-text */}
    </a>
  </div>
)

export default SubPageNav

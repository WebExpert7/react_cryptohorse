import React from 'react'

const ProfileBanner = () => (
  <div className='Container Container--full'>
    <div className='KittyBanner-container'>
      <a className='active' aria-current='true'>
        <img
          className='KittyBanner-image'
          src='https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/258666.svg'
          alt='Kitty #258666 - null'
        />
      </a>
      <div className='KittyBanner-status'>
        {/* react-empty: 76 */}
      </div>
      <div className='KittyBanner-share'>
        <img
          className='KittyBanner-shareBtn'
          src='../static/icons/share.svg'
          alt='Share me!'
          role='button'
        />
        {/* react-empty: 79 */}
      </div>
    </div>
  </div>
)

export default ProfileBanner

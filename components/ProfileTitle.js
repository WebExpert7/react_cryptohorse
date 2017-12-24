import React from 'react'

const ProfileTitle = (props) => (
  <div className='KittySection-content'>
    <div className='KittyHeader'>
      <div className='KittyHeader-main'>
        <div className='KittyHeader-name'>
          <h1 className='KittyHeader-name-text'>Kitty {props.id}</h1>
        </div>
        <div className='KittyHeader-details'>
          <span>Kitty 258666</span>
          <span className='Separator' />
          <a
            className='KittyHeader-details-generation'
            aria-current='false'
            href='/marketplace/all?search=gen:4'
          >
            <span>
              {/* react-text: 94 */}Gen
              {/* /react-text */}
              {/* react-text: 95 */}4
              {/* /react-text */}
            </span>
          </a>
          <span className='Separator' />
          <span className='KittyHeader-details-condition'>
            {/* react-text: 98 */}Brisk Cooldown
            {/* /react-text */}
            <img
              src='../static/icons/info.svg'
              className='KittyHeader-details-conditionInfo'
            />
          </span>
        </div>
      </div>
      <div className='KittyHeader-owner'>
        <a
          className='KittyHeader-owner-imageLink'
          aria-current='false'
          href='/profile/0x3fe6c312ac434c8d563ca99fcf66d630b7fe120d'
        >
          <div className='KittyHeader-owner-image'>
            <img src='../static/images/profile.png' />
          </div>
        </a>
        <span className='KittyHeader-owner-details'>
          <a
            className='KittyHeader-owner-name'
            aria-current='false'
            href='/profile/0x3fe6c312ac434c8d563ca99fcf66d630b7fe120d'
          >
            chun
          </a>
          <span>Owner</span>
        </span>
      </div>
    </div>
  </div>
)

export default ProfileTitle

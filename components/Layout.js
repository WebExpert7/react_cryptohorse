import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children, isHomePage, url } = {}) => (
  <Fragment>
    <Head>
      <meta charSet='UTF-8' />
      <title>CryptoKitties | Collect and breed digital cats!</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      {/* Main style */}
      <link href='../static/sass/main.css' rel='stylesheet' />
    </Head>
    {isHomePage &&
      <div className='Container Container--half'>
        <div className='Header'>
          <a className='Header-home active' aria-current='true' href='/'>
            <div className='Header-logoWrapper'>
              <div className='Header-logo' />
            </div>
            <h1 className='Header-wordmark'>CryptoKitties</h1>
          </a>
          <nav className='Header-navigation'>
            <Link href='/signIn'>
              <a
                className={`Header-navigation-item ${url.pathname === '/signIn' ? 'Header-navigation-item--active' : ''}`}
                aria-current='false'
              >
                Sign in
              </a>
            </Link>
            <Link href='/marketplace'>
              <a
                className={`Header-navigation-item ${url.pathname === '/marketplace' ? 'Header-navigation-item--active' : ''}`}
                aria-current='false'
              >
                Marketplace
              </a>
            </Link>
          </nav>
        </div>
      </div>}
    {!isHomePage &&
      <div className='Container Container--full'>
        <div className='Header'>
          <Link href='/'>
            <a className='Header-home' aria-current='false'>
              <div className='Header-logoWrapper'>
                <div className='Header-logo' />
              </div>
              <h1 className='Header-wordmark'>CryptoKitties</h1>
            </a>
          </Link>
          <div className='Header-networkStatus'>
            {/* react-empty: 11 */}
          </div>
          <nav className='Header-navigation'>
            <Link href='/signIn'>
              <a
                className={`Header-navigation-item ${url.pathname === '/signIn' ? 'Header-navigation-item--active' : ''}`}
                aria-current='false'
              >
                Sign in
              </a>
            </Link>
            <Link href='/marketplace'>
              <a
                className={`Header-navigation-item ${url.pathname === '/marketplace' ? 'Header-navigation-item--active' : ''}`}
                aria-current='true'
              >
                Marketplace
              </a>
            </Link>
          </nav>
        </div>
      </div>}
    <main className='Main'>
      {children}
    </main>
    <footer className='Footer'>
      <div className='Container Container--lg'>
        <div className='Footer-primary'>
          <div className='Footer-nav Footer-nav--primary'>
            <ul className='Footer-nav-items'>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--mykitties'
                  aria-current='false'
                  href='/my-kitties'
                >
                  My Kitties
                </a>
              </li>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--activity'
                  aria-current='false'
                  href='/activity'
                >
                  Activity
                </a>
              </li>
              <li className='Footer-nav-item'>
                <Link href='/marketplace'>
                  <a
                    className='Footer-nav-link Footer-nav-link--marketplace'
                    aria-current='false'
                    href='/marketplace'
                  >
                    Marketplace
                  </a>
                </Link>
              </li>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--faq'
                  aria-current='false'
                  href='/faq'
                >
                  FAQs
                </a>
              </li>
              <li className='Footer-nav-item'>
                <Link href='/help'>
                  <a
                    className='Footer-nav-link Footer-nav-link--help'
                    aria-current='false'
                  >
                    Help & Support
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='Footer-nav Footer-nav--secondary'>
            <ul className='Footer-nav-items'>
              <li className='Footer-nav-item'>
                <Link href='/about'>
                  <a
                    className='Footer-nav-link Footer-nav-link--about'
                    aria-current='false'
                    href='/about'
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className='Footer-nav-item'>
                <Link href='/press'>
                  <a
                    className='Footer-nav-link Footer-nav-link--press'
                    aria-current='false'
                  >
                    Press
                  </a>
                </Link>
              </li>
              <li className='Footer-nav-item'>
                <Link as={'/technical-details'} href='/technicalDetails'>
                  <a
                    className='Footer-nav-link Footer-nav-link--technical-details'
                    aria-current='false'
                  >
                    Tech details
                  </a>
                </Link>
              </li>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--white-pa-purr'
                  href='https://www.dropbox.com/s/a5h3zso545wuqkm/CryptoKitties_WhitePapurr_V2.pdf?dl=0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  White Pa-purr
                </a>
              </li>
            </ul>
          </div>
          <div className='Footer-nav Footer-nav--social'>
            <ul className='Footer-nav-items'>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--facebook'
                  href='https://www.facebook.com/CryptoKitties/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--reddit'
                  href='https://www.reddit.com/r/CryptoKitties/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Reddit
                </a>
              </li>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--twitter'
                  href='https://twitter.com/cryptokitties'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
              <li className='Footer-nav-item'>
                <a
                  className='Footer-nav-link Footer-nav-link--discord'
                  href='https://discord.gg/3GvT66U'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className='Footer-primary-az'>
            {/* react-text: 117 */}Pick of the litter at
            {/* /react-text */}
            <a
              href='https://www.axiomzen.co/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Axiom Zen
            </a>
            {/* react-text: 119 */}
            {/* /react-text */}
            <img src='../static/icons/paw.svg' alt='Purrrrr' />
          </div>
        </div>
        <div className='Footer-secondary'>
          <a
            className='Footer-secondary-link'
            aria-current='false'
            href='/terms-of-use'
          >
            Terms of use
          </a>
          <a
            className='Footer-secondary-link'
            aria-current='false'
            href='/privacy-policy'
          >
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
    <a
      className='FloatingSupportLink'
      href='https://discord.gg/3GvT66U'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        className='FloatingSupportLink-icon FloatingSupportLink-icon--message'
        src='../static/icons/icon-message.svg'
      />
      <img
        className='FloatingSupportLink-icon FloatingSupportLink-icon--plane'
        src='../static/icons/icon-discord-white.svg'
      />
      <div className='FloatingSupportLink-text'>
        <span>
          {/* react-text: 129 */}Talk to us on
          {/* /react-text */}
          <br />
          <strong>Discord</strong>
        </span>
      </div>
    </a>
  </Fragment>
)

export default Layout

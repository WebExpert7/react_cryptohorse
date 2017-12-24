import Layout from '../components/Layout'
import FaqGroup from '../components/FaqGroup'

const signIn = props => (
  <Layout url={props.url}>
    <div className='Hero'>
      <div className='Container Container--sm'>
        <div className='u-center u-margin-bottom-xl'>
          <h1 className='Hero-h1'>Wanna play?</h1>
          <p className='Hero-description'>
            You’ll need a safe place to store all of your adorable CryptoKitties! The perfect place is in
            a secure wallet like MetaMask. This will also act as your login to the game (no extra password
            needed).
          </p>
          <a
            className='Button Button--largest Button--love Button--cta u-margin-bottom-sm'
            href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
            rel='noopener noreferrer'
            target='_blank'
          >
            Install MetaMask
          </a>
        </div>
        <div className='FaqGroup'>
          <h2 className='FaqGroup-title'>Getting started</h2>
          <FaqGroup />
        </div>
        <div className='CtaFaq'>
          <img src='../static/images/kitty-confused.svg' />
          <h1 className='CtaFaq-title'>Still confused?</h1>
          <a
            className='Button Button--larger Button--buy Button--cta'
            aria-current='false'
            href='/faq'
          >
            View full FAQ
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default signIn

// import Link from 'next/link'
import Layout from '../components/Layout'

const Index = props => (
  <Layout isHomePage url={props.url}>
    <div className='Landing'>
      <div className='Landing-description'>
        <h1 className='Landing-headline'>Collectible.</h1>
        <h1 className='Landing-headline'>Breedable.</h1>
        <h1 className='Landing-headline'>Adorable.</h1>
        <p className='Landing-subheadline'>
          Collect and breed digital cats.
        </p>
        <a
          className='Button Button--largest Button--love Button--cta'
          aria-current='false'
          href='/my-kitties'
        >
          Start meow
        </a>
      </div>
      <div className='Landing-slots'>
        <div className='Landing-pattern'>
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty01.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty02.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty03.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty04.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty05.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty16.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty06.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty07.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty08.svg'
          />
        </div>
        <div className='Landing-pattern'>
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty06.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty07.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty08.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty09.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty11.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty17.png'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty14.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty15.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty18.svg'
          />
        </div>
        <div className='Landing-pattern'>
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty11.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty12.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty13.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty14.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty15.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty18.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty01.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty02.svg'
          />
          <img
            className='Landing-kitty'
            src='../static/images/landing-kitty03.svg'
          />
        </div>
      </div>
    </div>
    <div className='Explainer'>
      <div className='Explainer-bg'>
        <div className='Container Container--lg'>
          <div className='Explainer-what'>
            <div className='Explainer-ethKitty'>
              <img src='../static/images/kitty-eth.svg' />
            </div>
            <div className='Explainer-what-text'>
              <h2 className='Explainer-headline'>What is CryptoKitties?</h2>
              <p className='Explainer-description'>
                CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable
                creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by
                you; it cannot be replicated, taken away, or destroyed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='Container Container--center'>
        <div className='Explainer-why'>
          <h2 className='Explainer-headline'>What’s the big deal?</h2>
          <p className='Explainer-description'>
            CryptoKitties is one of the world’s first games to be built on blockchain technology—the
            same breakthrough that makes things like Bitcoin and Ethereum possible. Bitcoin and ether
            are cryptocurrencies but CryptoKitties are cryptocollectibles. You can buy, sell, or
            trade your CryptoKitty like it was a traditional collectible, secure in the knowledge
            that blockchain will track ownership securely.
          </p>
        </div>
      </div>
      <div className='Explainer-bg'>
        <div className='Container Container--lg'>
          <div className='Explainer-breed'>
            <div className='Explainer-breedKitty'>
              <img src='../static/images/kitty-love-1.svg' />
            </div>
            <div className='Explainer-breedKitty Explainer-breedKitty--icons'>
              <img src='../static/images/kitty-love-2.svg' />
            </div>
            <div className='Explainer-breedKitty'>
              <img src='../static/images/kitty-love-3.svg' />
            </div>
          </div>
        </div>
      </div>
      <div className='Container Container--center'>
        <div className='Explainer-cta'>
          <p className='Explainer-description2'>
            But, unlike traditional collectibles, you can breed two CryptoKitties to create a brand-new,
            genetically unique offspring.
          </p>
          <p className='Explainer-description2'>
            <strong>It results in something special—just like you!</strong>
          </p>
          <a
            className='Button Button--largest Button--love Button--cta'
            aria-current='false'
            href='/my-kitties'
          >
            Start meow
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index

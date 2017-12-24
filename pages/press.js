import Layout from '../components/Layout'
import SubPageNav from '../components/SubPageNav'

const Press = props => (
  <Layout url={props.url}>
    <div className='PressPage'>
      <SubPageNav url={props.url} />
      <div className='Container Container--sm'>
        <div className='PressPage-section'>
          <h1 className='u-margin-bottom-md'>For Press</h1>
          <p>
            CryptoKitties are collectible and breedable digital cats. It’s the world’s first game built on the Ethereum network. When two CryptoKitties breed, their offspring’s appearance and cattributes are determined by each parent’s 256-bit genome and an element of chance, leading to 4-billion possible genetic variations.
          </p>
          <p>
            {/* react-text: 4467 */}
            CryptoKitties was created to explore the concept of digital scarcity, implement a non-fungible token within smart contracts&nbsp;
            {/* /react-text */}
            <span className='PressPage-highlight'>ERC #721</span>
            {/* react-text: 4469 */}
            , and make blockchain technology accessible to everyday consumers.
            {/* /react-text */}
          </p>
        </div>
        <div className='PressPage-section PressPage-cardWrapper PressPage-cardWrapper--expandMd'>
          <div className='PressPage-card'>
            <img src='../static/icons/celebrate.svg' />
            <p className='PressPage-card-p'>Founded:</p>
            <h2 className='PressPage-card-h2'>2017</h2>
          </div>
          <div className='PressPage-card'>
            <img src='../static//icons/location.svg' />
            <p className='PressPage-card-p'>Location:</p>
            <h2 className='PressPage-card-h2'>Vancouver, BC</h2>
          </div>
          <div className='PressPage-card'>
            <img src='../static//icons/plant.svg' />
            <p className='PressPage-card-p'>Funding:</p>
            <h2 className='PressPage-card-h2'>Sustainable Revenue Model</h2>
            <p className='PressPage-card-p'>Instead of an ICO.</p>
          </div>
        </div>
      </div>
      <div className='PressPage-section PressPage-bg'>
        <div className='Container Container--center'>
          <h1 className='u-margin-bottom-md'>CryptoKitties Team</h1>
          <p>
            The CryptoKitties team includes over a dozen startup founders, crypto-enthusiasts, and award-winning developers. While premiering the CryptoKitties alpha at ETHWaterloo, the team won the world’s largest Ethereum hackathon with their project.
          </p>
          <p>
            {/* react-text: 4489 */}
            CryptoKitties was created by
            {' '}
            {/* /react-text */}
            <a
              className='u-link-text'
              href='https://www.axiomzen.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              Axiom Zen
            </a>
            {/* react-text: 4491 */}
            .
            {/* /react-text */}
          </p>
        </div>
      </div>
      <div className='Container'>
        <div className='PressPage-section'>
          <h1 className='u-margin-bottom-lg'>Product and brand assets</h1>
          <div className='PressPage-assetWrapper'>
            <a
              className='PressPage-asset PressPage-asset--wide'
              href='/downloads/logo.zip'
            >
              <img className='PressPage-asset-img' src='/downloads/logo.svg' />
              <div className='PressPage-asset-footer'>CryptoKitties logo</div>
            </a>
            <a className='PressPage-asset' href='/downloads/logomark.zip'>
              <img
                className='PressPage-asset-img'
                src='/downloads/logomark.svg'
              />
              <div className='PressPage-asset-footer'>
                CryptoKitties logomark
              </div>
            </a>
            <a className='PressPage-asset' href='/downloads/mascot01.png'>
              <img
                className='PressPage-asset-img'
                src='/downloads/mascot01.png'
              />
              <div className='PressPage-asset-footer'>Twitch</div>
            </a>
            <a className='PressPage-asset' href='/downloads/mascot02.png'>
              <img
                className='PressPage-asset-img'
                src='/downloads/mascot02.png'
              />
              <div className='PressPage-asset-footer'>Lola</div>
            </a>
            <a className='PressPage-asset' href='/downloads/mascot03.png'>
              <img
                className='PressPage-asset-img'
                src='/downloads/mascot03.png'
              />
              <div className='PressPage-asset-footer'>Panthar</div>
            </a>
            <a
              className='PressPage-asset PressPage-asset--full'
              href='/downloads/team.jpg'
            >
              <img className='PressPage-asset-img' src='/downloads/team.jpg' />
              <div className='PressPage-asset-footer'>The Team</div>
            </a>
            <a
              className='PressPage-asset PressPage-asset--full'
              href='/images/share.png'
            >
              <img className='PressPage-asset-img' src='/images/share.png' />
              <div className='PressPage-asset-footer'>Banner</div>
            </a>
            <a
              className='PressPage-asset PressPage-asset--full'
              href='/downloads/screenshot01.png'
            >
              <img
                className='PressPage-asset-img'
                src='/downloads/screenshot01.png'
              />
              <div className='PressPage-asset-footer'>Screenshot 01</div>
            </a>
            <a
              className='PressPage-asset PressPage-asset--full'
              href='/downloads/screenshot02.png'
            >
              <img
                className='PressPage-asset-img'
                src='/downloads/screenshot02.png'
              />
              <div className='PressPage-asset-footer'>Screenshot 02</div>
            </a>
            <a
              className='PressPage-asset PressPage-asset--full'
              href='/downloads/screenshot03.png'
            >
              <img
                className='PressPage-asset-img'
                src='/downloads/screenshot03.png'
              />
              <div className='PressPage-asset-footer'>Screenshot 03</div>
            </a>
            <a
              className='PressPage-asset PressPage-asset--full'
              href='/downloads/avatar.png'
            >
              <img
                className='PressPage-asset-img'
                src='/downloads/avatar.png'
              />
              <div className='PressPage-asset-footer'>
                CryptoKitties avatar
              </div>
            </a>
          </div>
        </div>
        <div className='PressPage-section PressPage-section--spelling'>
          <h1 className='u-margin-bottom-md'>Spelling</h1>
          <p className='u-margin-bottom-md'>
            {/* react-text: 4532 */}
            When referencing us, CryptoKitties is always written as a single word, with an uppercase
            {' '}
            {/* /react-text */}
            <span className='PressPage-highlight'>C</span>
            {/* react-text: 4534 */}
            {' '}
            and an uppercase
            {' '}
            {/* /react-text */}
            <span className='PressPage-highlight'>K</span>
            {/* react-text: 4536 */}
            .
            {/* /react-text */}
          </p>
          <img className='u-margin-top-md' src='/images/spelling.svg' />
        </div>
      </div>
      <div className='PressPage-bg PressPage-section'>
        <div className='Container Container--lg Container--center'>
          <h1 className='u-margin-bottom-md'>Press and Coverage</h1>
          <div className='PressPage-cardWrapper PressPage-cardWrapper--expandMd'>
            <a
              className='PressPage-card'
              href='http://www.bbc.com/news/technology-42237162'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='PressPage-outlet' src='/images/logoBBC.svg' />
              <h2 className='PressPage-card-h2'>
                CryptoKitties craze slows down transactions on Ethereum
              </h2>
              <p className='u-margin-top-lg'>—&nbsp;BBC</p>
            </a>
            <a
              className='PressPage-card'
              href='https://www.bloomberg.com/news/articles/2017-12-04/cryptokitties-quickly-becomes-most-widely-used-ethereum-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='PressPage-outlet'
                src='/images/logoBloomberg.svg'
              />
              <h2 className='PressPage-card-h2'>
                CryptoKitties Mania Overwhelms Ethereum Network’s Processing
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;Olga Kharif for Bloomberg
              </p>
            </a>
            <a
              className='PressPage-card'
              href='https://blogs.wsj.com/cio/2017/12/07/ethereum-network-copes-with-surge-of-activity-as-virtual-kitten-game-goes-viral/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='PressPage-outlet' src='/images/logoWSJ.svg' />
              <h2 className='PressPage-card-h2'>
                Ethereum Network Copes With Surge of Activity as Virtual Kitten Game Goes Viral
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;The Wall Street Journal
              </p>
            </a>
            <a
              className='PressPage-card'
              href='https://www.youtube.com/watch?v=qk7gRljIKww&feature=youtu.be'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='PressPage-outlet' src='/images/logoVice.svg' />
              <h2 className='PressPage-card-h2'>
                This Game Combines The Internet’s Favorite Things: Cats & Cryptocurrency
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;Elle Reeve for Vice News
              </p>
            </a>
            <a
              className='PressPage-card'
              href='http://fortune.com/2017/12/04/blockchain-cryptokitties-ethereum/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='PressPage-outlet' src='/images/logoFortune.svg' />
              <h2 className='PressPage-card-h2'>
                Introducing “CryptoKitties,” the New Digital Pets Taking Ethereum by Storm
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;Joseph Hincks for Fortune
              </p>
            </a>
            <a
              className='PressPage-card'
              href='https://cointelegraph.com/news/cryptokitties-sales-hit-12-million-could-be-ethereums-killer-app-after-all'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='PressPage-outlet'
                src='/images/logoCointelegraph.svg'
              />
              <h2 className='PressPage-card-h2'>
                CryptoKitties Sales Hit $12 Million, Could be Ethereum’s Killer App After All
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;Joseph Young for Cointelegraph
              </p>
            </a>
            <a
              className='PressPage-card'
              href='https://qz.com/1144169/the-ethereum-world-is-now-obsessed-with-breeding-cartoon-cats/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='PressPage-outlet' src='/images/logoQuartz.svg' />
              <h2 className='PressPage-card-h2'>
                The ethereum world is now obsessed with breeding cartoon cats
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;Joon Ian Wong for Quartz
              </p>
            </a>
            <a
              className='PressPage-card'
              href='https://motherboard.vice.com/en_us/article/bj78jv/cryptokitties-blockchain-cats-axiom-zen-game'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='PressPage-outlet'
                src='/images/logoMotherboard.svg'
              />
              <h2 className='PressPage-card-h2'>
                I Bred ‘Crypto Kitties’ on the Ethereum Blockchain
              </h2>
              <p className='u-margin-top-lg'>
                —&nbsp;Daniel Oberhaus for Motherboard
              </p>
            </a>
            <a
              className='PressPage-card'
              href='https://www.forbes.com/sites/ksamani/2017/10/20/what-happens-when-you-lock-400-crypto-nerds-in-a-room-for-the-weekend/#693b6bff4feb'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='PressPage-outlet' src='/images/logoForbes.svg' />
              <h2 className='PressPage-card-h2'>
                What Happens When You Lock 400 Crypto Nerds In A Room For The Weekend
              </h2>
              <p className='u-margin-top-lg'>—&nbsp;Kyle Samani for Forbes</p>
            </a>
          </div>
        </div>
      </div>
      <div className='Container Container--sm'>
        <div className='PressPage-section'>
          <h1 className='u-margin-bottom-lg'>News and Insights</h1>
          <a
            href='http://www.newswire.ca/news-releases/cryptokitties-the-worlds-first-ethereum-game-launches-today-660494073.html'
            className='PressPage-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='u-link-text'>
              CryptoKitties: The World’s First Ethereum Game Launches
            </span>
          </a>
          <a
            href='https://hackernoon.com/building-a-bridge-between-blockchain-and-consumers-with-cats-104ac6655563'
            className='PressPage-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='u-link-text'>
              Building a Bridge Between Blockchain and Consumers with Cats
            </span>
          </a>
          <a
            href='https://medium.com/@bennygiang/why-were-not-doing-an-initial-coin-offering-ico-5a6d6dfedca1'
            className='PressPage-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='u-link-text'>
              Why We’re Not Doing An Initial Coin Offering (ICO)
            </span>
          </a>
          <a
            href='http://www.newswire.ca/news-releases/cats-invade-worlds-largest-ethereum-hackathon-651263343.html'
            className='PressPage-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='u-link-text'>
              Cats Invade World’s Largest Ethereum Hackathon
            </span>
          </a>
        </div>
      </div>
      <div className='Container Container--sm Container--center'>
        <div className='PressPage-section'>
          <p>Want additional quotes or context?</p>
          <a
            className='Button Button--larger Button--buy Button--cta'
            href='mailto:press@axiomzen.co'
          >
            Please get in touch
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Press

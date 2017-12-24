import Layout from '../components/Layout'
import SubPageNav from '../components/SubPageNav'

const About = props => (
  <Layout url={props.url}>
    <div className='AboutPage'>
      <SubPageNav url={props.url} />
      <div className='AboutPage-section'>
        <div className='AboutPage-header'>
          <div className='AboutPage-letterHead'>
            <img src='../static/images/letterHead.png' />
          </div>
          <p className='AboutPage-bodyText'>
            In CryptoKitties, users collect and breed oh-so-adorable creatures that we call CryptoKitties!
            Each kitty has a unique genome that defines its appearance and traits. Players can breed
            their kitties to create new furry friends and unlock rare cattributes.
          </p>
          <p className='AboutPage-bodyText'>
            CryptoKitties is one of the world’s first blockchain games. ‘Blockchain’ is the technology that
            makes things like Bitcoin possible. While CryptoKitties isn’t a digital currency, it does
            offer the same security: each CryptoKitty is one-of-a-kind and 100% owned by you. It cannot
            be replicated, taken away, or destroyed.
          </p>
        </div>
      </div>
      <div className='AboutPage-section'>
        <div className='AboutPage-catifesto'>
          <h4 className='AboutPage-label'>The CryptoKitties Catifesto</h4>
          <h2 className='AboutPage-headline'>
            What we believe in, what we stand for, and why we’re building CryptoKitties.
          </h2>
          <div className='AboutPage-columns'>
            <p className='AboutPage-bodyText'>
              <strong>The future is exciting.</strong>
            </p>
            <p className='AboutPage-bodyText'>
              And we believe that blockchain is the future—but blockchain is about as approachable as a
              bunch of ones and zeroes.
            </p>
            <p className='AboutPage-bodyText'>
              We want a future for everyone, not one exclusive to Bitcoin miners, VCs, ICOs, and other
              equally fun acronyms.
            </p>
            <p className='AboutPage-bodyText'>
              <strong>So why cats?</strong>
            </p>
            <p className='AboutPage-bodyText'>Pop quiz, hotshot: why not?</p>
            <p className='AboutPage-bodyText'>
              Cats are impossible to understand. They’re ambassadors for pharaohs, memes, and your mom’s
              facebook page. They don’t discriminate; they despise everyone equally.
            </p>
            <p className='AboutPage-bodyText'>
              Cats are perfect killing machines, with retractable claws, night vision, and teeth on their
              tongue. But cats also nap whenever they feel like it, and we respect that.
            </p>
            <p className='AboutPage-bodyText'>
              More than anything, cats are different. They’re weird, funny, and hopelessly entertaining.
              You don’t have to understand cats to appreciate them.
            </p>
            <p className='AboutPage-bodyText'>
              We’re not trying to build the future—we’re trying to have fun with it.
            </p>
          </div>
          <p className='AboutPage-signature'>The future is meow.</p>
        </div>
      </div>
    </div>

  </Layout>
)

export default About

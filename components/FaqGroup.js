import React from 'react'
import Toggle from 'react-toggled'

const Faq = ({ children }) => (
  <Toggle defaultOn={false}>
    {({ on, toggle }) => (
      <div
        className={`Faq ${on ? 'Faq Faq--open' : ''}`}
        role='button'
        id='What-do-I-need-to-play-CryptoKitties'
        onClick={toggle}
      >
        {children}
      </div>
    )}
  </Toggle>
)

const FaqGroup = () => (
  <div className='FaqGroup-questions'>
    <Faq>
      <h3 className='Faq-question'>
        What do I need to play CryptoKitties?
      </h3>
      <p className='Faq-answer'>
        <p>Here’s what you need to get started:</p>
        <ul>
          <li>
            A computer or laptop running the desktop version of Chrome or Firefox
          </li>
          <li>
            MetaMask, a digital wallet used specifically with web apps
          </li>
          <li>
            Ether, a form of digital payment that powers CryptoKitties
          </li>
        </ul>
      </p>
    </Faq>
    <Faq>
      <h3 className='Faq-question'>
        Installing MetaMask, your digital wallet
      </h3>
      <p className='Faq-answer'>
        To use CryptoKitties, you will need to install MetaMask, a digital wallet. You will
        need to put money in it to make your first purchase.
        <p>
          <strong>Note:</strong>
          A digital wallet like MetaMask acts like a bank account—treat
          it with respect and make sure you don’t forget your password or the seed words.
        </p>
        <iframe
          width='100%'
          height={315}
          src='https://www.youtube.com/embed/tfETpi-9ORs?rel=0&showinfo=0'
          frameBorder={0}
          allowFullScreen
        />
      </p>
    </Faq>
    <Faq>
      <h3 className='Faq-question'>
        Why is MetaMask locked?
      </h3>
      <p className='Faq-answer'>
        Occasionally the ‘My Kitties’ page displays a lock screen. This happens because MetaMask
        locks your account after a certain period of time automatically. To unlock simply
        click on the MetaMask extension and type in your password.
        <img src='../static/images/screenshot-locked.png' />
      </p>
    </Faq>
    <Faq>
      <h3 className='Faq-question'>
        Getting Ether, your digital currency
      </h3>
      <p className='Faq-answer'>
        <strong>For U.S. citizens only:</strong>
        you can buy ether (ETH) in MetaMask. ETH is
        a digital currency that enables our game to run.
        <img src='../static/images/screenshot-buy-usa.png' />
        <p>
          <strong>For everyone else:</strong>
          you will need to purchase ETH from an exchange. The
          easiest way is using Coinbase and then transferring the ETH from your Coinbase
          wallet to your MetaMask wallet. Unfortunately, you cannot play CryptoKitties
          with a Coinbase wallet or any other wallets.
        </p>
        <p>
          You cannot use USD/CAD to buy a CryptoKitty—currencies need to be converted into
          ETH first.
        </p>
      </p>
    </Faq>
    <Faq>
      <h3 className='Faq-question'>
        How to send ETH to MetaMask
      </h3>
      <p className='Faq-answer'>
        <strong>For U.S. citizens only:</strong>
        you are able to purchase ETH directly from the
        MetaMask wallet using the Coinbase widget. This is more convenient and doesn’t
        require you to create two accounts.
        <p>
          <strong>For everyone else:</strong>
          you need to buy ETH from an exchange using normal
          fiat currency. Coinbase is the easiest to setup however the choice is ultimately
          up to you. Copy your MetaMask address but clicking on the ‘...’ then ‘Copy Address
          to clipboard’. Go to Coinbase and click ‘Accounts’ and select your ETH Wallet
          and then click ‘send’. Paste the MetaMask address in the box with the amount
          you’d like to transfer.
        </p>
        <iframe
          width='100%'
          height={315}
          src='https://www.youtube.com/embed/PtdMDtCVck0?rel=0&showinfo=0'
          frameBorder={0}
          allowFullScreen
        />
      </p>
    </Faq>
  </div>
)

export default FaqGroup

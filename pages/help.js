import Layout from '../components/Layout'
import Toggle from 'react-toggled'

const HelpFaq = ({ children }) => (
  <Toggle defaultOn={false}>
    {({ on, toggle }) => (
      <div
        className={`Faq ${on ? 'Faq--open' : ''}`}
        role='button'
        id="I-can't-get-Kitties"
        onClick={toggle}
      >
        {children}
      </div>
    )}
  </Toggle>
)

const Help = props => (
  <Layout url={props.url}>
    <div className='FaqPage'>
      <div className='Container Container--sm'>
        <div className='FaqGroup'>
          <h2 className='FaqGroup-title'>Help with CryptoKitties</h2>
          <div className='FaqGroup-questions'>
            <HelpFaq>
              <h3 className='Faq-question'>I can’t get Kitties</h3>
              <p className='Faq-answer'>
                There are a few ways to get new CryptoKitties. You can either get a kitty from the
                <a href='/marketplace'>Marketplace</a>
                , or ask another user to gift you a Kitty. You can also breed
                CryptoKitties that you already own. You will need Ether to buy a new kitty, you
                can learn more about how to get Ether
                <a href='/faq#Getting-Ether-your-digital-currency'>here</a>.
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                Can you recover my lost CryptoKitties? I can’t access my wallet...
              </h3>
              <p className='Faq-answer'>
                <p>Unfortunately, no.</p>
                <p>
                  If you lose access to your MetaMask wallet, we cannot recover your cats. It’s not
                  an issue of it being against our policy or difficulty; it is simply not possible.
                </p>
                <p>
                  Our smart contracts secure each CryptoKitty so that the developers can’t edit, access,
                  or reassign them. This protects your Kitties from hackers and anyone else who
                  would steal them. Unfortunately, it also means we can’t simply ‘recover’ any
                  CryptoKitties you lose.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>I Can’t Sign Up / Log In</h3>
              <p className='Faq-answer'>
                <p>Trouble signing in can usually be fixed by:</p>
                <ol>
                  <li>Using either Chrome or Firefox from a desktop.</li>
                  <li>
                    Sign in and out of MetaMask before attempting to log in.
                  </li>
                  <li>
                    If you’re using a different computer than the one you originally registered
                    on, you need to copy your MetaMask seed phrase from the old computer
                    to the new computer to ensure you have the same secure keys.
                  </li>
                </ol>
                <p>
                  These steps solve login problems for most people, but if you still have problems, you can help us debug the issue by turning
                  “background logs” on in Chrome.
                  <a
                    href='https://github.com/MetaMask/faq/blob/master/LOGS.md#background-logs-chrome'
                    target='_blank'
                  >
                    Learn how here.
                  </a>
                </p>
                <p>
                  We’ve seen intermittent login problems for some of our users, but the problem usually solves itself before we can reproduce
                  it. Your CryptoKitties account is linked to MetaMask, so logs can help us
                  solve the problem.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                I Can’t Log In From a Mobile Device
              </h3>
              <p className='Faq-answer'>
                We don’t recommend playing CryptoKitties on mobile devices. Although Firefox for
                Android supports the MetaMask add-on, many users experience performance issues
                on mobile
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                I Can’t Log In From a New Computer
              </h3>
              <p className='Faq-answer'>
                <p>
                  You can use CryptoKitties from multiple computers as long as you have MetaMask installed on both, with the same secure keys.
                  When you log in to MetaMask on a new computer, it will request your Seed
                  Phrase for verification. Copy your MetaMask seed phrase from the old computer
                  to the new computer, to ensure you have the same secure keys.
                </p>
                <p>
                  Don’t worry about your email or username: if you have the same secret keys on different computers, CryptoKitties will know
                  you’re the same user and show you all the same info (and Kitties!).
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                My Cat’s Bun Is Still In The Oven
              </h3>
              <p className='Faq-answer'>
                <p>
                  Sorry to hear your kitty is stuck with bun in the oven. That’ can’t be comfortable for your Kitty. The issue is that CryptoKitties
                  became so popular that the Ethereum network is having troubles processing
                  all transactions (including the birth of your kitty).
                </p>
                <p>
                  We are looking for a work-around this congestion problem, but the only solution so far has been increasing gas prices to
                  improve the likeliness of transactions being processed.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                Can Two Kitties Have The Same Name?
              </h3>
              <p className='Faq-answer'>
                Yes, two Kitties can have the same name. Names are not unique, but Kitty ID numbers are.
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>My Cat Disappeared</h3>
              <p className='Faq-answer'>
                <p>
                  The good news is that your kitty hasn’t run away. It will be forever owned by you in the blockchain (unless you sell it,
                  of course). Unfortunately, it sometimes takes a while for transactions such
                  as auctions to become visible on the website, even after being processed
                  by the blockchain.
                </p>
                <p>
                  If you look at the
                  <a href='https://etherscan.io/' target='_blank'>Etherscan</a>
                  {' '}
                  details of your transaction, you will see the ownership of
                  the kitty is passing from your address to our CK contract address during
                  siring until the auction is finalized. This contract has been carefully audited
                  to ensure that the only thing it can do is offer your cat from siring, and
                  immediately return it to you if the auction succeeds or is cancelled.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                I Participated in the Alpha. Can I Get Those Kitties?
              </h3>
              <p className='Faq-answer'>
                <p>
                  First of all, thanks for participating in the Alpha test, and for playing with the Kitties again!
                </p>
                <p>
                  Sadly, it is not possible to claim those Kitties, as they only existed in the Rinkeby Ethereum test network. That network
                  doesn't use real Ethereum for transactions, and is not translatable to the
                  Main Ethereum network that the game runs on.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                Can You Transfer My Kitties To Another Address?
              </h3>
              <p className='Faq-answer'>
                <p>
                  First, we should explain that your CryptoKitties user is linked to your wallet address. Therefore, we cannot merge addresses
                  or transfer kitties, but the good news is you can. Thanks, blockchain!
                </p>
                <p>
                  You can go to your kitty profile page and gift your Kitty to your other address (the one you'd like to keep using) for free,
                  just covering the gas fee that the Ethereum network charges for processing
                  your transaction.
                </p>
                <p>
                  Please let us know if that worked, and if there's anything else we can help you with.
                </p>
              </p>
            </HelpFaq>
          </div>
        </div>
        <div className='FaqGroup'>
          <h2 className='FaqGroup-title'>
            Help with Transactions and Ethereum
          </h2>
          <div className='FaqGroup-questions'>
            <HelpFaq>
              <h3 className='Faq-question'>My transactions keep failing</h3>
              <p className='Faq-answer'>
                CryptoKitties has become so popular that the Ethereum network used to manage Kitty
                ownership is having trouble processing all the additional traffic our users are
                creating. We are looking into how to work around this congestion problem, but
                the only solution so far has been increasing gas prices to improve the probability
                that your transactions will be processed.
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                A Transaction Timed Out But Was Successful
              </h3>
              <p className='Faq-answer'>
                <p>
                  When a transaction “times out,” it doesn’t mean the transaction has failed, only that network is very busy. As a result,
                  CryptoKitties won’t update until the transaction is finalized in the network.
                </p>
                <p>
                  This can occur because of low gas prices or a spike in network congestion.
                </p>
                <p>
                  Most of these issues are related to the decentralized nature of the blockchain, and we are working to communicate that better
                  in future versions.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                A Transaction Failed and Took My Gas Fee
              </h3>
              <p className='Faq-answer'>
                <p>
                  Sorry to hear your transaction failed. Such is the nature of the blockchain as a decentralized platform; it’s also the reason
                  why it’s so secure. When a transaction fails, unfortunately you still have
                  to pay the gas fee.
                </p>
                <p>
                  For more info,
                  <a
                    href='https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369'
                    target='_blank'
                  >
                    this article
                  </a>
                  {' '}
                  explains how the Ethereum blockchain handles fees.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                My Transaction Failed But I Was Charged. Can I Get a Refund?
              </h3>
              <p className='Faq-answer'>
                <p>
                  We’re sorry you’re having trouble with transactions. But unfortunately, there is no way for us to refund your ether as we
                  were never holding your funds.
                </p>
                <p>
                  CryptoKitties is a series of smart contracts run on a decentralized network - Ethereum. This offers the really unique benefits
                  of you being able to own your Kitty and combine it with other Kitties to
                  produce unique kittens. However, it also means that any transaction you conduct
                  is beyond our control. We are the facilitators and interface for you to interact
                  with MetaMask and Ethereum respectively, but we have no control over the
                  transactions being processed.
                </p>
                <p>
                  Right now, the Ethereum network is incredibly congested due to the influx of tens of thousands of new users and their transactions.
                  We are working hard with MetaMask to resolve any issues you're experiencing
                  as soon as possible, and we've also reached out to the team behind Ethereum
                  to see if we can help find a solution. Right now, there's no simple fix.
                </p>
                <p>
                  When interacting with the blockchain, remember that the gas price is the fee that the Ethereum network charges for processing
                  transactions. Depending on the price you set for it, the transaction can
                  fail or succeed, and the gas will be charged by the network for processing
                  the transaction regardless of its result. We can think about it as the fee
                  the users pay for attempting to execute transactions in the decentralized
                  network.
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>What is Gas?</h3>
              <p className='Faq-answer'>
                <p>
                  “Gas” is a unit used by the Ethereum network to measure how complex an action is. A transaction that needs a lot of gas is
                  more complex for the network to process than a transaction that needs less
                  gas. You don’t get to choose how much gas your transaction uses.
                </p>
                <p>
                  You can choose the “gas price,” which affects the total cost of your transactions, but makes them more likely to get processed
                  quickly. Transactions in the Ethereum network are almost always processed
                  most expensive first.
                </p>
                <p>
                  Read more about gas and its effects on transactions
                  <a
                    href='https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas'
                    target='_blank'
                  >
                    here
                  </a>
                  .
                </p>
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                I Didn’t Receive Ethereum For A Sale or Siring.
              </h3>
              <p className='Faq-answer'>
                If you successfully sired or sold a cat, the other user definitely sent you ether. However, since the user paid for the siring
                or sale through our smart contract, the payment is not reflected as a typical
                IN/OUT transaction in Etherscan. To see the Ether generated from CryptoKitty
                auctions, check the
                <strong>Internal Transactions</strong> tab in Etherscan.
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                I Want to Cancel a Transaction, But It Won’t Work
              </h3>
              <p className='Faq-answer'>
                <p>
                  Sorry to hear you’re having trouble with transactions. There's an option to cancel the transaction on our website, but sometimes
                  it's too late to do that since the transaction has already been sent to the
                  Ethereum blockchain.
                </p>
                <p>
                  The issue with most transactions is that CryptoKitties has become so popular that the Ethereum network used to manage Kitty
                  ownership is having troubles processing all the additional traffic.
                </p>
                <p>
                  We are looking into how to work around this congestion problem, but the only solution so far has been increasing gas prices
                  to improve the probability that your transactions will be processed. You
                  can look more into current gas pricing on
                  <a href='https://ethgasstation.info' target='_blank'>
                    EthGasStation
                  </a>
                  .
                </p>
              </p>
            </HelpFaq>
          </div>
        </div>
        <div className='FaqGroup'>
          <h2 className='FaqGroup-title'>Help with MetaMask</h2>
          <div className='FaqGroup-questions'>
            <HelpFaq>
              <h3 className='Faq-question'>Why is MetaMask being so slow?</h3>
              <p className='Faq-answer'>
                If you have a lot of tabs open, MetaMask will suffer memory leaks and slow down.
                To fix this issue, close all your tabs, restart the browser, and things should
                improve.
              </p>
            </HelpFaq>
            <HelpFaq>
              <h3 className='Faq-question'>
                Change MetaMask Address or Password
              </h3>
              <p className='Faq-answer'>
                <p>
                  We are sorry to hear that you lost access to your Metamask account, sadly this is something we cannot help with. Your CryptoKitties
                  user is linked to your wallet address, not to your email or username. That
                  is because your kitties are stored in the wallet, not our databases.
                </p>
                <p>
                  <a
                    href='https://support.metamask.io/kb/article/28-abbu-always-be-backed-up-how-to-make-sure-your-12-word-metamask-seed-phrase-is-backed-up'
                    target='_blank'
                  >
                    Read more about the nature of the MetaMask security here.
                  </a>
                </p>
                <p>
                  We understand this may be harsh news so we'd encourage you to request support from MetaMask
                  <a href='https://support.metamask.io/new' target='_blank'>
                    here
                  </a>

                  to see if there's a potential solution. Unfortunately, your Seed
                  Phrase is intended to be unrecoverable by nature, to avoid anyone else from
                  taking control of your secure keys.
                </p>
              </p>
            </HelpFaq>
          </div>
        </div>
      </div>
      <div className='Container Container--sm Container--center'>
        <p>Need additional support?</p>
        <a
          className='Button Button--larger Button--cta'
          href='https://discord.gg/3GvT66U'
          target='_blank'
          rel='noopener noreferrer'
        >
          Join our discord community
        </a>
      </div>
    </div>

  </Layout>
)

export default Help

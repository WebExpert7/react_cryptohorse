import React from 'react';
import styles from './LandingPage.scss';
import classNames from 'classnames/bind';

import { PageTemplate } from 'components';
import { HeaderContainer } from 'containers';

import landing_kitty01 from 'static/image/landing-kitty01.svg'
import landing_kitty02 from 'static/image/landing-kitty02.svg'
import landing_kitty03 from 'static/image/landing-kitty03.svg'
import landing_kitty04 from 'static/image/landing-kitty04.svg'
import landing_kitty05 from 'static/image/landing-kitty05.svg'
import landing_kitty06 from 'static/image/landing-kitty06.svg'
import landing_kitty07 from 'static/image/landing-kitty07.svg'
import landing_kitty08 from 'static/image/landing-kitty08.svg'
import landing_kitty09 from 'static/image/landing-kitty09.svg'
import landing_kitty16 from 'static/image/landing-kitty16.svg' 
import landing_kitty11 from 'static/image/landing-kitty11.svg' 
import landing_kitty12 from 'static/image/landing-kitty12.svg' 
import landing_kitty13 from 'static/image/landing-kitty13.svg' 
import landing_kitty14 from 'static/image/landing-kitty14.svg' 
import landing_kitty15 from 'static/image/landing-kitty15.svg'
import landing_kitty17 from 'static/image/landing-kitty17.png'
import landing_kitty18 from 'static/image/landing-kitty18.svg' 

import kitty_eth from 'static/image/kitty-eth.svg'
import kitty_love_1 from 'static/image/kitty-love-1.svg'
import kitty_love_2 from 'static/image/kitty-love-2.svg'
import kitty_love_3 from 'static/image/kitty-love-3.svg'

const cx = classNames.bind(styles);

const LandingPage = () => {
  return (
    <PageTemplate header={<HeaderContainer container_half/>}  padding responsive>
      <div>
        <div className={cx('Landing')}>
            <div className={cx('Landing-description')}>
                <h1 className={cx('Landing-headline')}>Collectible.</h1>
                <h1 className={cx('Landing-headline')}>Breedable.</h1>
                <h1 className={cx('Landing-headline')}>Adorable.</h1>
                <p className={cx('Landing-subheadline')}>Collect and breed digital cats.</p><a className={cx('Button','Button--largest','Button--love','Button--cta')} aria-current="false">Start meow</a></div>
            <div className={cx('Landing-slots')}>
                <div className={cx('Landing-pattern')}><img className={cx('Landing-kitty')} src={landing_kitty01} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty02} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty03} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty04} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty05} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty16} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty06} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty07} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty08} alt="" /></div>
                <div className={cx('Landing-pattern')}><img className={cx('Landing-kitty')} src={landing_kitty06} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty07} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty08} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty09} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty11} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty17} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty14} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty15} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty18} alt="" /></div>
                <div className={cx('Landing-pattern')}><img className={cx('Landing-kitty')} src={landing_kitty11} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty12} alt=""/><img className={cx('Landing-kitty')} src={landing_kitty13} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty14} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty15} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty18} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty01} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty02} alt="" /><img className={cx('Landing-kitty')} src={landing_kitty03} alt="" /></div>
            </div>
        </div>
        <div className={cx('Explainer')}>
            <div className={cx('Explainer-bg')}>
                <div className={cx('Container','Container--lg')}>
                    <div className={cx('Explainer-what')}>
                        <div className={cx('Explainer-ethKitty')}><img src={kitty_eth} alt="" /></div>
                        <div className={cx('Explainer-what-text')}>
                            <h2 className={cx('Explainer-headline')}>What is Kitties?</h2>
                            <p className={cx('Explainer-description')}>Kitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call Kitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('Container','Container--center')}>
                <div className={cx('Explainer-why')}>
                    <h2 className={cx('Explainer-headline')}>What’s the big deal?</h2>
                    <p className={cx('Explainer-description')}>Kitties is one of the world’s first games to be built on blockchain technology—the same breakthrough that makes things like Bitcoin and Ethereum possible. Bitcoin and ether are cryptocurrencies but Kitties are cryptocollectibles. You can buy, sell, or trade your Kitties like it was a traditional collectible, secure in the knowledge that blockchain will track ownership securely.</p>
                </div>
            </div>
            <div className={cx('Explainer-bg')}>
                <div className={cx('Container','Container--lg')}>
                    <div className={cx('Explainer-breed')}>
                        <div className={cx('Explainer-breedKitty')}><img src={kitty_love_1} alt="" /></div>
                        <div className={cx('Explainer-breedKitty','Explainer-breedKitty--icons')}><img src={kitty_love_2} alt="" /></div>
                        <div className={cx('Explainer-breedKitty')}><img src={kitty_love_3} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className={cx('Container','Container--center')}>
                <div className={cx('Explainer-cta')}>
                    <p className={cx('Explainer-description2')}>But, unlike traditional collectibles, you can breed two Kitties to create a brand-new, genetically unique offspring.</p>
                    <p className={cx('Explainer-description2')}><strong>It results in something special—just like you!</strong></p><a className={cx('Button','Button--largest','Button--love','Button--cta')} aria-current="false">Start meow</a></div>
            </div>
        </div>
      </div>
    </PageTemplate>
  );
  // return (
  //   <div>asdf</div>
  // );
};

export default LandingPage;
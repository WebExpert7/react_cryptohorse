import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = ({onClickButton, container_half, Container__full}) => {
  return (
    <div className={cx('header')}>
      <div className={cx('Container', {container_half}, {Container__full})} id="header">
        <div className={cx('Header')}>
          <a className={cx('Header-home','active')} aria-current="true" href="/">
              <div className={cx('Header-logoWrapper')}>
                  <div className={cx('Header-logo')}></div>
              </div>
              <h1 className={cx('Header-wordmark')}>CryptoHorse</h1></a>
          <nav className={cx('Header-navigation')}>
              <a className={cx('Header-navigation-item')} aria-current="false" href="signin">Sign in</a>
              <a className={cx('Header-navigation-item')} aria-current="false" href="marketplace">Marketplace</a>     

              <a className={cx('Header-navigation-item')} aria-current="false" href="/marketplace/racing">Racing</a>
                <a className={cx('Header-navigation-item')} aria-current="false" href="/marketplace/ico">ICO</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
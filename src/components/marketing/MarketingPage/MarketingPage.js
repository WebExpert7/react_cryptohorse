import React from 'react';
import styles from './MarketingPage.scss';
import classNames from 'classnames/bind';

import { PageTemplate } from 'components';
import { Marketing_header } from 'components'
import { HeaderContainer } from 'containers';

import kitty_love_1 from 'static/image/landing-kitty01.svg';

const cx = classNames.bind(styles);
const MarketingPage = () => {
  return (
    <PageTemplate header={<HeaderContainer Container__full/>}  padding responsive>
          <div className={cx('BrowsePage')}>
            <Marketing_header type="siring">
            </Marketing_header>
          </div>
          <div className={cx('KittiesGallery')}>
              <div className={cx('Container','Container--lg')}>
                  <div className={cx('KittiesGrid')}>

                      <div className={cx('KittiesGrid-item')} ng-repeat="kitty in kitti_data track by $index">
                          <a aria-current="false" href="/kitty/{{ kitty[$index].kitty_id }}">
                              <div className={cx('KittyCard-wrapper')}>
                                  <div className={cx('KittyCard','u-bg-alt-topaz','KittyCard--responsive')}>
                                      <img className={cx('KittyCard-image')} src={kitty_love_1} alt="Kitty {{ kitty[$index].kitty_id }} - null" />
                                      <div className={cx('KittyCard-status')}>
                                          <div className={cx('KittyStatus')}>
                                              <div className={cx('KittyStatus-item')}>         
                                                  <span className={cx('KittyStatus-itemText')}>For sale<span className={cx('KittyStatus-note')}>
                                                      <small>Ξ</small>0.0599</span>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={cx('KittyCard-details')}>
                                      <div className={cx('KittyCard-subname')}>Kitty 288755</div>
                                      <div className={cx('KittyCard-coldown')}></div>
                                  </div>
                              </div>
                          </a>
                      </div>

                  </div>
              </div>
          </div>
          <div className={cx('KittiesGalleryPagination')}>
              <div className={cx('Pagination')}>
                  <div className={cx('Pagination-pages')}>
                      <button className={cx('Pagination-page','Pagination-page--active')}>1</button>
                      <button className={cx('Pagination-page')}>2</button>
                      <button className={cx('Pagination-page')}>3</button>
                      <button className={cx('Pagination-page')}>4</button>
                      <button className={cx('Pagination-page')}>5</button>
                      <button className={cx('Pagination-page')}>6</button>
                      <button className={cx('Pagination-page')}>7</button>
                      <button className={cx('Pagination-page')}>8</button>
                      <button className={cx('Pagination-page')}>9</button>
                      <button className={cx('Pagination-page')}>10</button>
                  </div>
                  <div>
                      <button className={cx('Pagination-button','Pagination-button--disabled')}>Previous</button>
                      <button className={cx('Pagination-button')}>Next</button>
                  </div>
              </div>
          </div>
    </PageTemplate>
  ); 
};

export default MarketingPage;
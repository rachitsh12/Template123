import React from 'react'
import { useEffect, useState } from 'react';
import jQuery from 'jquery';
import $ from 'jquery';
import './style.css';

const Header = () => {
   

  return (
    <div>
      <section className="section_hero">
                        <div className="div-block-23 hero">
                            <div className="capsule-2 is-secondary _1">
                                <div className="html-embed-14 w-embed">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.27763 0.397949C3.81027 0.397949 0.175781 4.03244 0.175781 8.4998C0.175781 12.9672 3.81027 16.6017 8.27763 16.6017C12.745 16.6017 16.3795 12.9672 16.3795 8.4998C16.3795 4.03244 12.745 0.397949 8.27763 0.397949ZM7.46745 13.3609V9.30999H4.22671L9.08782 3.63869V7.68962H12.3286L7.46745 13.3609Z" fill="#C3B378" fill-opacity="0.75" />
                                    </svg>
                                </div>
                                <div className="capsule-text-2 text-size-14">Early Retirement planning</div>
                            </div>
                            <div className="capsule-2 is-secondary _2">
                                <div className="html-embed-14 w-embed">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.27763 0.397949C3.81027 0.397949 0.175781 4.03244 0.175781 8.4998C0.175781 12.9672 3.81027 16.6017 8.27763 16.6017C12.745 16.6017 16.3795 12.9672 16.3795 8.4998C16.3795 4.03244 12.745 0.397949 8.27763 0.397949ZM7.46745 13.3609V9.30999H4.22671L9.08782 3.63869V7.68962H12.3286L7.46745 13.3609Z" fill="#C3B378" fill-opacity="0.75" />
                                    </svg>
                                </div>
                                <div className="capsule-text-2 text-size-14">Mutual Fund selection</div>
                            </div>
                            <div className="capsule-2 is-secondary _3">
                                <div className="html-embed-14 w-embed">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.27763 0.397949C3.81027 0.397949 0.175781 4.03244 0.175781 8.4998C0.175781 12.9672 3.81027 16.6017 8.27763 16.6017C12.745 16.6017 16.3795 12.9672 16.3795 8.4998C16.3795 4.03244 12.745 0.397949 8.27763 0.397949ZM7.46745 13.3609V9.30999H4.22671L9.08782 3.63869V7.68962H12.3286L7.46745 13.3609Z" fill="#C3B378" fill-opacity="0.75" />
                                    </svg>
                                </div>
                                <div className="capsule-text-2 text-size-14">Asset Allocation</div>
                            </div>
                            <div className="capsule-2 is-secondary _4">
                                <div className="html-embed-14 w-embed">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.27763 0.397949C3.81027 0.397949 0.175781 4.03244 0.175781 8.4998C0.175781 12.9672 3.81027 16.6017 8.27763 16.6017C12.745 16.6017 16.3795 12.9672 16.3795 8.4998C16.3795 4.03244 12.745 0.397949 8.27763 0.397949ZM7.46745 13.3609V9.30999H4.22671L9.08782 3.63869V7.68962H12.3286L7.46745 13.3609Z" fill="#C3B378" fill-opacity="0.75" />
                                    </svg>
                                </div>
                                <div className="capsule-text-2 text-size-14">Tax Planning</div>
                            </div>
                        </div>
                        <div className="container-xl-2">
                            <div className="hero_bg-image-wrapper-2">
                                <div className="hero-content_wrapper-2">
                                    <div className="hero_content-2">
                                        <div className="hero_heading-wrapper-2">
                                            <h1 className="hero_heading-2">
                                                <span className="_35px-2">Personal Finance </span>
                                                <br />
                                                Made Simple In <br />
                                                <span className="text-color-gold">2 Hours</span>
                                                ⚡
                                            </h1>
                                            <div className="div-block-23 hero mobile"></div>
                                            <p className="hero_para">
                                                Learn the science behind <strong>personal finance</strong>
                                                and achieve all your<strong>financial goals</strong>
                                                easily.
                                            </p>
                                        </div>
                                        <div className="hero_capsule-wrapper-2">
                                            <div className="capsule-3">
                                                <div className="capsule_logo-2 small w-embed">
                                                    <svg width="" height="" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 20.5H16C17.103 20.5 18 19.603 18 18.5V4.5C18 3.397 17.103 2.5 16 2.5H14V0.5H12V2.5H6V0.5H4V2.5H2C0.897 2.5 0 3.397 0 4.5V18.5C0 19.603 0.897 20.5 2 20.5ZM2 5.5H16V7.5H2V5.5Z" fill="#ECD996" />
                                                    </svg>
                                                </div>
                                                <div className="capsule_text-2">
                                                    <strong>4th November, 4 PM</strong>
                                                </div>
                                            </div>
                                            <div className="capsule-3">
                                                <div className="capsule_logo-2 w-embed">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.4997 0.333252C6.06667 0.333252 0.833008 5.56692 0.833008 11.9999C0.833008 18.4329 6.06667 23.6666 12.4997 23.6666C18.9327 23.6666 24.1663 18.4329 24.1663 11.9999C24.1663 5.56692 18.9327 0.333252 12.4997 0.333252ZM16.3415 17.4914L11.333 12.4829V4.99992H13.6663V11.5169L17.9912 15.8418L16.3415 17.4914V17.4914Z" fill="#ECD996" />
                                                    </svg>
                                                </div>
                                                <div className="capsule_text-2">
                                                    <strong>2 Hours</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero_button-wrapper-2">
                                            <a href="https://pay.onepercentclub.io/wp/sharan-f1" className="button w-button">Book Your Seat</a>
                                            <div className="skill-2">
                                                <div className="progres-bar-2 card-bar">
                                                    <div className="progress-bar__content _1"></div>
                                                </div>
                                                <div className="skill-header-2">
                                                    <h4 className="card-text-2">
                                                        <span className="sold-out-percentage-2">78.5%</span>
                                                        sold out!
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default Header

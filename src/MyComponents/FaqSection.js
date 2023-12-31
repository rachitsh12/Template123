import React from 'react'
import { useEffect } from 'react';

import $ from "jquery";
import './style.css';
const FaqSection = () => {

    

    useEffect(() => {
        const accordion = (function() {
            var $accordion = $('.js-accordion');
            var $accordion_header = $accordion.find('.js-accordion-header');
            var $accordion_item = $('.js-accordion-item');

            var settings = {
                speed: 400,
                oneOpen: false,
            };

            return {
                init: function($settings) {
                    $accordion_header.on('click', function() {
                        accordion.toggle($(this));
                    });

                    $.extend(settings, $settings);

                    if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                        $('.js-accordion-item.active:not(:first)').removeClass('active');
                    }

                    $('.js-accordion-item.active').find('> .js-accordion-body').show();
                },
                toggle: function($this) {
                    if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                        $this.closest('.js-accordion').find('> .js-accordion-item').removeClass('active').find('.js-accordion-body').slideUp();
                    }

                    $this.closest('.js-accordion-item').toggleClass('active');
                    $this.next().stop().slideToggle(settings.speed);
                }
            };
        })();

        accordion.init({
            speed: 300,
            oneOpen: true
        });

        return () => {
            // Cleanup logic if needed
        };
    }, []);

  return (
    <div>
      <div className="section_faq-2">
                            <div className="padding-global-5">
                                <div className="container-large w-container">
                                    <h2 data-w-id="118a5668-4540-3f3a-af85-e09563328ef0" style={{ opacity: 1 }} className="gray-gradient-3 line-height-50 margin-bottom">FAQs</h2>
                                    <div data-ix="fade-up-1" className="accordion-2 js-accordion">
                                        <div className="w-embed">

                                        </div>
                                        <div className="accordion__item-3 js-accordion-item active">
                                            <div className="accordion-header-2 js-accordion-header">
                                                <h5 className="question-text-7">How will I get the link to attend the masterclassName?</h5>
                                                <div className="faq-icon-im-wrapper">
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec9_bx-minus.svg" loading="lazy" alt="" className="minnus-icon" />
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg" loading="lazy" alt="" className="plus-icon" />
                                                </div>
                                            </div>
                                            <div data-ix="hide-on-load" className="accordion-body js-accordion-body">
                                                <div className="accordion-body__contents-4">
                                                    You will get your individual Zoom link on the <strong>email address</strong>
                                                    and <strong>WhatsApp</strong>
                                                    number you register with. Reminders will be sent before the masterclassName as well. Make sure you don &#x27;t share the link with anyone, only one person can join with one link.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion__item-3 js-accordion-item active">
                                            <div className="accordion-header-2 js-accordion-header">
                                                <h5 className="question-text-7">What is the difficulty level of the concepts taught in the className?</h5>
                                                <div className="faq-icon-im-wrapper">
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec9_bx-minus.svg" loading="lazy" alt="" className="minnus-icon" />
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg" loading="lazy" alt="" className="plus-icon" />
                                                </div>
                                            </div>
                                            <div data-ix="hide-on-load" className="accordion-body js-accordion-body">
                                                <div className="accordion-body__contents-4">The masterclassName will begin with entry-level concepts and move to more advanced ones in the later half. You &#x27;ll learn a good deal whether you &#x27;re a student, a working professional, or an entrepreneur.</div>
                                            </div>
                                        </div>
                                        <div className="accordion__item-3 js-accordion-item active">
                                            <div className="accordion-header-2 js-accordion-header">
                                                <h5 className="question-text-7">How will I get the tools?</h5>
                                                <div className="faq-icon-im-wrapper">
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec9_bx-minus.svg" loading="lazy" alt="" className="minnus-icon" />
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg" loading="lazy" alt="" className="plus-icon" />
                                                </div>
                                            </div>
                                            <div data-ix="hide-on-load" className="accordion-body js-accordion-body">
                                                <div className="accordion-body__contents-4">They will be delivered to you on your registered email address within 24-48 hours of the masterclassName.</div>
                                            </div>
                                        </div>
                                        <div className="accordion__item-3 js-accordion-item active">
                                            <div className="accordion-header-2 js-accordion-header">
                                                <h5 className="question-text-7">In which language will the masterclassName be conducted?</h5>
                                                <div className="faq-icon-im-wrapper">
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec9_bx-minus.svg" loading="lazy" alt="" className="minnus-icon" />
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg" loading="lazy" alt="" className="plus-icon" />
                                                </div>
                                            </div>
                                            <div data-ix="hide-on-load" className="accordion-body js-accordion-body">
                                                <div className="accordion-body__contents-4">
                                                    It will be conducted in simple <strong>English</strong>
                                                    language.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion__item-3 js-accordion-item active">
                                            <div className="accordion-header-2 js-accordion-header">
                                                <h5 className="question-text-7">What if I &#x27;m not able to attend the masterclassName after registering?</h5>
                                                <div className="faq-icon-im-wrapper">
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec9_bx-minus.svg" loading="lazy" alt="" className="minnus-icon" />
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg" loading="lazy" alt="" className="plus-icon" />
                                                </div>
                                            </div>
                                            <div data-ix="hide-on-load" className="accordion-body js-accordion-body">
                                                <div className="accordion-body__contents-4">If you miss the masterclassName, we &#x27;ll invite you to the next one for a nominal fee.</div>
                                            </div>
                                        </div>
                                        <div className="accordion__item-3 js-accordion-item active">
                                            <div className="accordion-header-2 js-accordion-header">
                                                <h5 className="question-text-7">Where should I seek assistance before/after registering?</h5>
                                                <div className="faq-icon-im-wrapper">
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec9_bx-minus.svg" loading="lazy" alt="" className="minnus-icon" />
                                                    <img src="https://assets-global.website-files.com/64674f96d214289aa3cf2e66/64674f96d214289aa3cf2ec8_bx-plus.svg" loading="lazy" alt="" className="plus-icon" />
                                                </div>
                                            </div>
                                            <div data-ix="hide-on-load" className="accordion-body js-accordion-body">
                                                <div className="accordion-body__contents-4">
                                                    Email us<a href="mailto:support@onepercentclub.io?subject=Contact%20Us"></a>
                                                    <a href="#"></a>
                                                    <a href="mailto:support@onepercentclub.io?subject=support%40onepercentclub.io"></a>
                                                    <a href="#"></a>
                                                    <a href="#"></a>
                                                    <a href="mailto:support@onepercentclub.io?subject=support%40onepercentclub.io"></a>
                                                    from your registered email address on
                                                    <a href="mailto:support@onepercentclub.io?subject=Sharan&#x27;s%20MasterclassName">
                                                        <strong>support@onepercentclub.io</strong>
                                                    </a>
                                                    and we will help you right away.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default FaqSection

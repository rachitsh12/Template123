import React from 'react'
import { motion, useScroll } from "framer-motion"

// import './style.css';
import { useEffect } from 'react';

 


const BeginSection = ({isVisible}) => {
  
  
    


  return (
    <div>
      
    
      <section className="section_begin" >
                        <div className="padding-global-5">
                            <div className="container-large">
                                <div className="begin_content-wrapper">
                                    <div data-w-id="118a5668-4540-3f3a-af85-e09563328cf3" style={{ opacity: 1 }} className="begin_heading-wrapper">
                                        <div className="begin_sub-heading" >But you don’t know</div>
                                        <h2 className="begin_heading">where to begin</h2>
                                        <div className="begin_sub-heading">Start with</div>
                                    </div>
                                    <img src="https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e883fc6a9a0090466c_Frame.webp" loading="lazy" alt="" className="down-arrow" />
                                    <div data-w-id="118a5668-4540-3f3a-af85-e09563328cfb" style={{ opacity: 1 }} className="begin_video-wrapper">
                                        <img src="https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046e4_sharan-video.webp" loading="lazy" width="1056" sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 1279px) 92vw, 1056px" alt="" srcset="https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046e4_sharan-video-p-500.png 500w, https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046e4_sharan-video-p-800.png 800w, https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046e4_sharan-video-p-1080.png 1080w, https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046e4_sharan-video-p-1600.png 1600w, https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046e4_sharan-video.webp 2148w" className="begin_video desktop" />
                                        <img src="https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046eb_Frame%201160444751.webp" loading="lazy" width="1056" sizes="(max-width: 479px) 86vw, 100vw" alt="" srcset="https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046eb_Frame%25201160444751-p-500.png 500w, https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/64f773e983fc6a9a009046eb_Frame%201160444751.webp 720w" className="begin_video mobile" />
                                        <a href="https://youtube.com/watch?v=J-DHPt8HU-4" className="play-video w-inline-block w-lightbox" >
                                        {/* <ReactPlayer url='https://youtube.com/watch?v=J-DHPt8HU-4' /> */}
                                        <div className="play-button w-embed">
                                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="48" cy="48" r="46.5" fill="black" stroke="#ECD996" stroke-width="3" />
                                                <path d="M66 48.5L39.75 63.6554L39.75 33.3446L66 48.5Z" fill="white" />
                                            </svg>
                                        </div>
                                        {/* <script type="application/json" className="w-json">
                                            {
  "items": [
    {
      "url": "https://youtube.com/watch?v=J-DHPt8HU-4",
      "originalUrl": "https://youtube.com/watch?v=J-DHPt8HU-4",
      "width": 940,
      "height": 528,
      "thumbnailUrl": "https://i.ytimg.com/vi/J-DHPt8HU-4/hqdefault.jpg",
      "html": "<iframe className=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FJ-DHPt8HU-4%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ-DHPt8HU-4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJ-DHPt8HU-4%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
      "type": "video"
    }
  ],
  "group": ""
}
                                        </script> */}
                                        </a >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
    
  )
}

export default BeginSection

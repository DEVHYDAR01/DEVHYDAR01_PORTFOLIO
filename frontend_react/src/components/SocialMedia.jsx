import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
           <a href="https://twitter.com/aliyuah03811444/">
               <BsTwitter /> 
           </a>
        </div>
        <div>
            < a href="">
               <FaFacebook /> 
            </a>
        </div>
        <div>
            <a href="https://instagram.com/_fearlessdev_?igshid=YmMyMTA2M2Y=">
               <BsInstagram /> 
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
               image="https://resources.platform.bcci.tv/bcci/photo/2019/11/23/d5250374-0406-4283-bdd3-f6101e4e79ae/PINKD2_395.JPG"
               profileSrc="https://www.thefamouspeople.com/profiles/images/virat-kohli-1.jpg"
               title="Virat"
            />   
             
            <Story
               image="https://assets.vogue.in/photos/5f23a45c63616a15c5d4198a/2:3/w_474,h_711,c_limit/sophie%20turner%20jewellery.jpg"
               profileSrc="https://assets.vogue.com/photos/59482cc3704a2a32d66c6b75/master/w_2560%2Cc_limit/sophie-turner-got-lede.jpg"
               title="Sophie"
            />   
            <Story
               image="https://static.toiimg.com/photo/78008594.cms"
               profileSrc="https://c.ndtvimg.com/2018-10/lql7pp2g_cristiano-ronaldo-juventus-afp_625x300_06_October_18.jpg?q=60"
               title="Cristiano"
            />   
            
            <Story
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4jNfJhG_F8KidMBDbgTlNzZIKFwCAgA1Cg&usqp=CAU"
               profileSrc="https://p.kindpng.com/picc/s/180-1801331_elon-musk-tesla-motors-chief-executive-spacex-neuralink.png"
               title="Elon"
            />  
            <Story
               image="https://media.allure.com/photos/5c59dfb198c1c62d02ada717/master/w_1600%2Cc_limit/0319-allure-cover-kendall-jenner-cover.jpg"
               profileSrc="https://media.allure.com/photos/5f1d9705fabe7da0f486d0c4/1:1/w_1700,h_1700,c_limit/kendall-jenner-nails-lede.jpg"
               title="Kendall"
            />  
        </div>
    )
}

export default StoryReel

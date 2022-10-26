import React, { Component } from 'react';

import "../../styles/style.scss"


import card0 from '../../images/image-deep-earthPC.jpg';
import card1 from '../../images/image-night-arcadePC.jpg';
import card2 from '../../images/image-soccer-teampc.jpg';
import card3 from '../../images/image-gridPC.jpg';
import card4 from '../../images/image-from-abovePC.jpg';
import card5 from '../../images/image-pocket-borealisPC.jpg';
import card6 from '../../images/image-curiosityPC.jpg';
import card7 from '../../images/image-fisheyePC.jpg';


console.log(card0);



class SectionMain2 extends Component {
    imgSection2 = [{ text: "DEEP EARTH", img: card0 }, { text: "NIGHT ARCADE", img: card1 }, { text: "SOCCER TEAM VR", img: card2 }, { text: "THE GRID", img: card3 }, { text: "FROM UP ABOVE VR", img: card4 }, { text: "POCKET BOREALIS", img: card5 }, { text: "THE CURIOSITY", img: card6 }, { text: "MAKE IT FISHEYE", img: card7 }];

    render() {
        return (
            <>
                <div className='div__section2'>
                    <div className='div__sectionTop'>
                        <span>OUR CREATIONS</span>
                        <button>SEE ALL</button>
                    </div>
                    <div className='wrapper'>
                        {
                            this.imgSection2.map((item, index) => (
                                
                                <img key={index} src={item.img} />                                
                                // <h3 key={index}>{item.text}</h3>
                            ))
                        }
                    </div>
                </div>
            </>

        )
    }
}

export default SectionMain2;
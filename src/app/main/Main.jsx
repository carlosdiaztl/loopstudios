import React, { Component } from 'react';
// import "..main/style.scss";

import SectionMain1 from './sectionMain/SectionMain1.jsx';
import SectionMain2 from './sectionMain/SectionMain2.jsx';

class Main extends Component {

    render() {
        return (
           <main className='main'>
               <SectionMain1 />
               <SectionMain2 />
           </main>
        )
    }
}

export default Main;
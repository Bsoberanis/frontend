import { Router, Routes } from 'react-router-dom';
import { Channels } from '../channel/Channels';

export const Content = ({channels}) =>{
    return(
        <div className='content-container'>
            <Router>
            <Route path='channels' element={<Channels channels={channels}/>}/>                
            </Router>
        </div>
    )
}
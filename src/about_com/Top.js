import RightImg from "about";
import Paragraph from "./paragraph";
import './about.css';

const inner = {
    width: '750px',
    height: '500px',
    position: 'relative',
    backgroundImage: 'url("./chef_about.png")',
    float: 'left'
}


function Top() {
    return(
        <div className='top'>
            <div className='inner' style={inner}>
                <Paragraph />
            </div>
            <div className='right'>
                <RightImg />
            </div>
        </div>
    )
}

export default Top;
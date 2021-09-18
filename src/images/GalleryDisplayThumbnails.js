import img0 from '../images/MCP_2660.png';
import img1 from '../images/MCP_2661.png'
import img2 from '../images/MCP_2663.png'
import img3 from '../images/MCP_2665.png'
import img4 from '../images/MCP_2667.png'
import img5 from '../images/MCP_2674.png'


let count;
export default function GalleryDisplay2d(props){
    const pictures = [img0,img1,img2,img3,img4,img5];
    count = pictures.length;
    return(
        <img className={props.className} id={props.id} src={pictures[props.pos]}/>
    )
}

export {count}
import img0 from '../images/Concept.png';

let count;
export default function GalleryDisplay2d(props){
    const pictures = [img0]
    count = pictures.length;
    return(
        <img src={pictures[props.pos]}/>
    )
}

export {count}
import React,{useRef,useState,useEffect} from 'react';
import ItemCanvas from './ItemCanvas';

const Canvas = ({listCanvas,title}) => {
    const refCanvas = useRef(null)
    const [count,setCount] = useState(0);
    useEffect(() => {
        window.addEventListener('resize', () =>{
            setCount(0);
        } )
    }, []);
    useEffect(() => {
        let total= count*280;
        const item =  refCanvas.current;
        const max =  Math.ceil((item.scrollWidth - item.clientWidth)/280);
        if( count <0){
            setCount(0);
        }else if( count > max){
            setCount(max);
        }else if(total <= item.scrollWidth && total>=0){
            item.style.transform=`translateX(-${total}px)`
        }
    }, [count]);
    const moveList = number =>{
        if(number === 1){
            setCount(count+1)
        }else if(number === 2){
            setCount(count-1);
        }
    }
    const loadItem = () =>{
        return  (
            listCanvas.map(wine =>
                <ItemCanvas key={wine.id} wine={wine} />
            )
        )
    }
    return (
        <section className="newpr">
            <div className="container">
                <p className="introduce__title">{title} </p><img className="introduce__sub" src="img/title-dark.png" />
                <div className="newproduct">
                    <div className="newproduct__list" ref={refCanvas}>
                        {loadItem()}
                    </div>
                </div>
                <button className="newproduct__icon -right" onClick={()=> moveList(1)}> <i className="fas fa-arrow-right"></i></button>
                <button className="newproduct__icon -left" onClick={()=> moveList(2)}> <i className="fas fa-arrow-left"></i></button>
            </div>
        </section>
    );
}

export default Canvas;
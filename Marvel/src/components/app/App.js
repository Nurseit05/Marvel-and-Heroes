import {useState, useEffect, useReducer} from 'react';
import {Container} from 'react-bootstrap';
// import './App.css';

const withSlider = (BaseContainer, getData) => props => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setSlide(getData);
    }, [])

    function changeSlide(i) {
        setSlide(slide => slide + i)
    }

    return <BaseContainer {...props} slide={slide}  changeSlide={changeSlide} />
}



const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

function reducer(state, action) {
    switch (action.type) {
        case 'toggle': 
            return {autoplay: !state.autoplay}
        case 'slow':
            return {autoplay: 300}
        case 'fast':
            return {autoplay: 700}
        default:
            throw new Error();
    }
}


const SliderSecond = (props) => {

    const [autoplay, dispatch] = useReducer(reducer, false);

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br/>{autoplay.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>Slow autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>Fast autoplay</button>
                </div>
            </div>
        </Container>
    )
}

// const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch)
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch)

function App() {
    return (
        <>
            {/* <SliderWithFirstFetch/> */}
            <SliderWithSecondFetch/>
        </>
    );
}

export default App;

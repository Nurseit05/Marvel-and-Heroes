import { useState } from "react"
import RandomChar from "../randomChar/RandomChar"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"



import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setSelectedChar] = useState(null)

    const onCharSelected = (id) => {
        setSelectedChar(id);
    } 

    return (
        <>
            <RandomChar/>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <CharInfo charId={selectedChar}/>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>    
        </>
    )
}

export default MainPage;
import { useState, useEffect } from "react";

import StyleGlobal from './StyleGlobal'
import StyleContainer from './StyleContainer'
import StyleH1 from './StyleH1'
import StyleP from './StyleP'
import StyleButton from './StyleButton'
import StyleImg from './StyleImg'
import StylePicture from './StylePicture'

import pauseMobile from "../images/pattern-divider-mobile.svg"
import pauseDesktop from "../images/pattern-divider-desktop.svg"
import dice from "../images/icon-dice.svg"

const DataFecth = () => {

    const [text, setText] = useState([])

    const fetchAdvice = async () => {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        // console.log(data)
        setText(data.slip)
    }

    useEffect(() => {
        fetchAdvice()
    }, [])

    return (
        <>
            <StyleGlobal />
            <StyleContainer>
                <StyleH1>Advice #{text.id}</StyleH1>
                <StyleP>"{text.advice}."</StyleP>
                <StylePicture>
                    <source media="(min-width: 768px)" srcSet={pauseDesktop} />
                    <StyleImg src={pauseMobile} alt="" />
                </StylePicture>
                <StyleButton onClick={fetchAdvice}> <img src={dice} alt="" /> </StyleButton>
            </StyleContainer>
        </>
    );
}

export default DataFecth
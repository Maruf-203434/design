"use client"

import Lottie from "lottie-react"

const AnimationLottie = ({animationPath,width}) =>{
    const defaultOptions   = {
        loop:true,
        autopaly:true,
        animationData:animationPath,
        style:{
        width:'100%',
        }
    };
    return(
        <Lottie {...defaultOptions}/>
    );
};

export default AnimationLottie
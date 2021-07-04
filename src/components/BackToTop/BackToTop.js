import React,{useEffect, useState} from 'react';
import './BackToTop.scss';

function BackToTop() {
    const [hideBackToTop, sethideBackToTop] = useState(true);
    useEffect(() => {
        window.onscroll = ()=>{
            
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                sethideBackToTop(false)
            }
            else{
                sethideBackToTop(true)
            }
        }
        
    }, []);

    let onBackToTop = ()=>{
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0
    }

    return (
        <div className={`back-to-top ${hideBackToTop ? 'hide' : '' }`} onClick={onBackToTop}>
            <i class="fas fa-angle-up"></i>
            <i class="fa fa-ellipsis-v"></i>
        </div>
    );
}

export default BackToTop;
import R3LinkButton from "../R3Button/R3LinkButton";
import { useState, useEffect } from 'react';

function Social() {
    return (
        <div>
            <R3LinkButton imageSrc="in.png" textButton='R3TECH' link='https://www.linkedin.com/company/r3technologiesinfo/?viewAsMember=true'/>
            <R3LinkButton imageSrc="ig.png" textButton='r3tech_cz' link='https://instagram.com/r3tech_cz?igshid=MzRlODBiNWFlZA=='/>
            <R3LinkButton imageSrc="web.png" textButton='www.r3tech.cz' link=''/>
            {/* <R3LinkButton imageSrc="fb.png" textButton='in progress' link=''/> */}

        </div>
    );
}

export default Social;
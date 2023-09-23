import R3Button from "../R3Button/R3Button";

function Social() {
    return (
        <div>
            <R3Button textButton='LinkedIn' onMouseUpCallback={() => console.log('linkedin')}/>
            <R3Button textButton='Facebook' onMouseUpCallback={() => console.log('fb')}/>
            <R3Button textButton='Instagram' onMouseUpCallback={() => console.log('ig')}/>
            <R3Button textButton='Web' onMouseUpCallback={() => console.log('web')}/>
        </div>
    );
}

export default Social;
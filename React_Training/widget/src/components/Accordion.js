import React, {useRef} from 'react';

export default function Accordion(props) {
    const parentElement = useRef();
    const activeItemInd = useRef(props.defaultActiveItem);
    /**
     * create list
     * @returns 
     */
    const renderList = () => props.data.map((item, ind) => 
            (
                <div className={`item_${ind}`} key={ item.id || item.title}>
                    <div className={`${activeItemInd.current === ind ? 'active' : ''} title`} onClick={(e) => onTitleClick(e.target, ind)}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`${activeItemInd.current === ind ? 'active' : ''} content`}>
                        {item.contents.map((content, ind) => <p key={content}>{content}</p>)}
                    </div>
                </div>
            )
    )
    /**
     * 
     * @param {*} nextActiveElement
     * @param {Number} ind the index of item that user click on it
     * @returns 
     */
    const onTitleClick = (nextActiveElement, ind) => {
        if (!nextActiveElement.classList.contains('active')) 
        {
            // Get prevActiveElement element
            const prevActiveElement = getActiveElement();
            // Remove class active from prevActiveElement
            prevActiveElement.querySelectorAll('.active').forEach((element) => element.classList.remove('active'));
            // Add class active to nextActiveElement
            nextActiveElement.classList.add('active');
            // Add class active to sibling of nextActiveElement
            nextActiveElement.parentElement.querySelector('.content').classList.add('active');
            // update active item index
            activeItemInd.current = ind;
        }
    }
    /**
     * 
     * @returns 
     */
    const getActiveElement = () => {
        return parentElement.current.getElementsByClassName(`item_${activeItemInd.current}`)[0];
    }

    return (
        <div ref={parentElement} className={`ui ${props.styled ? 'styled' : ''} accordion`}>
            {renderList()}
        </div>
    );
}

Accordion.defaultProps = {
    defaultActiveItem: 0,
    styled: true,
    data: [{
        title: 'What is a dog?',
        contents: ['A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'],
    }, {
        title: 'What kinds of dogs are there?',
        contents: ['There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'],
    }, {
        title: 'How do you acquire a dog?',
        contents: [
            'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.',
            'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.'
        ]
    }]
};
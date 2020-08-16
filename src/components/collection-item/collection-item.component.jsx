import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, ...otherCollectionItemProps}) => (
    <div className="collection-item">
        <div className="image"
        style = {{
            backgroundImage: `url(${otherCollectionItemProps.imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className="title">{otherCollectionItemProps.name}</span>
            <span className="price">{otherCollectionItemProps.price}</span>
        </div>
    </div>
)

export default CollectionItem;
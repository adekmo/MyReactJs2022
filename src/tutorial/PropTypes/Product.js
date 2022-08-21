import React from 'react'
import PropTypes from 'prop-types';

const Product = ({title, body, id}) => {
    return (
        <div>

            <h3>{id} . {title}</h3>
            <p>{body}</p>

        </div>
    )
}

Product.propTypes = {
    // jika object, gnti string dg object,
    // jika nomor, gnti string dg number
    title:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired
}

Product.defaultProps = {
    // nilai default masing2
    title:'default title',
    body:'aselose'
}

export default Product

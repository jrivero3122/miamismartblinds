import React from 'react';

const products = (props) => {


    const products = props.products.map((product, i) => {
        return(
            <section className="module bg-dark-60 portfolio-page-header" data-background={product.url_img} id={product.shortcut}>
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2 className="module-title titan-title-size-3 font-alt">{product.title}</h2>
                    <div className="module-subtitle mb-30 titan-title-size-2"><b>{product.price}</b></div>
                    <div className="module-subtitle mb-30 font-alt">{product.description}</div>
                    <div className="font-alt mb-10 titan-title-size-1 text-center">{product.ofert1}</div>
                    <div className="font-alt mb-10 titan-title-size-1 text-center">{product.ofert2}</div>
                    <div className="font-alt mb-30 titan-title-size-1 text-center">{product.ofert3}</div>
                    <div className="font-alt mb-20 titan-title-size-2 text-center">{product.contact_text}</div>
                    {/* <a className="section-scroll btn btn-border-w btn-round text-center" href={product.url_button}>{product.text_button}</a> */}
                </div>
                </div>
            </div>
            </section>
        )
    })

    return(
        <div>
            {products}
        </div> 
    )
}

export default products;
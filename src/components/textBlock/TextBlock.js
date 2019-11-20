import React from 'react';

const textBlock = (props) => {
    return(
        <section className="module" id="alt-features">
            <div className="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                        <h2 class="module-title font-alt">{props.texts[0].title}</h2>
                        <div class="module-subtitle font-serif">{props.texts[0].description}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default textBlock;
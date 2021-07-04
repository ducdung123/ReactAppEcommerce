import React from 'react';
import './Blog.scss';

function Blog() {
    return (
        <div className="blog">
            <h1>The Latest Blog</h1>
            <div className="blog__content">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="blog__item">
                            <div className="blog__item__img">
                                <img src="./img/blog1.jpg"></img>
                            </div>
                            <h6>3 April, 2021</h6>
                            <p>All about vodka What does vodka taste like?</p>
                            <div className="blog__item__read">
                                Read more
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="blog__item">
                            <div className="blog__item__img">
                                <img src="./img/blog2.jpg"></img>
                            </div>
                            <h6>3 April, 2021</h6>
                            <p>Why sometimes it’s called “whiskey” and sometimes “whisky”</p>
                            <div className="blog__item__read">
                                Read more
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="blog__item">
                            <div className="blog__item__img">
                                <img src="./img/blog3.jpg"></img>
                            </div>
                            <h6>3 April, 2021</h6>
                            <p>15 Whisky Cocktails Recipes from a Winemaker’s Restaurant</p>
                            <div className="blog__item__read">
                                Read more
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="blog__item">
                            <div className="blog__item__img">
                                <img src="./img/blog4.jpg"></img>
                            </div>
                            <h6>3 April, 2021</h6>
                            <p>I’ll drink to That: Bruce Neyers of Neyerw Vineyards</p>
                            <div className="blog__item__read">
                                Read more
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
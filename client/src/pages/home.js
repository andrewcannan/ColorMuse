import React from 'react';

const Home = () => {
    return (
        <div className='container-fluid content'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <h1>Unleash Your Design Inspiration with Color Muse</h1>
                    <h2>Effortlessly Generate Color Palettes from Any Image</h2>
                    <a className='btn btn-primary'>Get Started</a>
                </div>
                <div className='col-12 col-md-6'>

                </div>
            </div>

            <div className='row'>
                <div col-8 offset-2>
                    <div className='card-group'>
                        <div class="card m-3">
                            <div class="card-body">
                                <h5 class="card-title">Effortless Inspiration</h5>
                                <p class="card-text">Simply upload an image, and Color Muse will instantly extract stunning color palettes.</p>
                            </div>                            
                        </div>
                        <div class="card m-3">
                            <div class="card-body">
                                <h5 class="card-title">Unlock New Creativity</h5>
                                <p class="card-text">Discover unexpected color combinations to spark fresh ideas for your design projects.</p>
                            </div>                            
                        </div>
                        <div class="card m-3">
                            <div class="card-body">
                                <h5 class="card-title">Seamless Workflow</h5>
                                <p class="card-text">Easily view and copy color codes (hex codes) for direct use in your design software.</p>
                            </div>                            
                        </div>
                        <div class="card m-3">
                            <div class="card-body">
                                <h5 class="card-title">Responsive Design</h5>
                                <p class="card-text">Access Color Muse from any device – desktop, mobile, or tablet.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
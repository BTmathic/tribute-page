import React from 'react';

const Header = () => (
    <div>
        <h1>Paul Erdős</h1>
        <h3 className='subtitle'>Described by his biographer, Paul Hoffman, as "probably the most eccentric mathematician in the world," Erdős spent most of his adult life living out of a suitcase.</h3>
        <figure className='image'>
            <img src='./Erdos.jpg'
                alt='Erdős chatting with fellow mathematician David Kendall in Cambridge, England'
            /> {/*include caption*/}
            <figcaption className='img-caption'>
                Erdős chatting with fellow mathematician David Kendall in Cambridge, England, on June 4, 1968. 
                <a href='https://www.maa.org/press/periodicals/convergence/whos-that-mathematician-paul-r-halmos-collection-page-27'>
                    Source
                </a>
            </figcaption>
        </figure>
    </div>
);

export default Header;
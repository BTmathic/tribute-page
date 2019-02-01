import React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import Footer from './Footer';

export default class Tribute extends React.Component {
    state = {
        timeline: [
            [1913, 'Born in Budapest, Austria-Hungary, on the 26th of March'],
            [1917, 'Given your age, he could calculate -- in his head -- the number of seconds you had lived'],
            [1930, 'Started attending University of Budapest'],
            [1934, 'Awarded a doctorate from the University of Budapest'],
            [1934, 'Moved to Manchester to be a guest lecturer as being Jewish in the growing Communist country meant no positions were available for him'],
            [1938, 'Moved to his first American position in Princeton and '],
            [1943, 'Began working at Purdue University'],
            [1948, 'Returned to Hungary for the first time after the war to be reunited with surviving family, then spent the next three years travelling frequently between England and the US working with many collaborators'],
            [1951, 'Won the Cole Prize of the American Mathematical Society'],
            [1952, 'Accepted a position at the University of Notre Dame giving him full freedom to travel and do joint work with others whenever he wanted'],
            [1954, 'He was not allowed back into the US, but no clear reason was given, though having family in Hungary meant the growing feelings against communism in the US may have played a part'],
            [1954, 'Moved to Israel and spent much of the next decade contuining his travelling research career until being allowed back to the US in 1963'],
            [1956, 'Elected to the Hungarian Academy of Science'],
            [1977, 'Established the Anna and Lajos Erdős prize in Mathematics in honour of his parents, changed to the Erdős prize posthumously in 1996'],
            [1979, 'Elected to the National Academy of Science in the US'],
            [1983, 'Won the Wolf Prize'],
            [1989, 'Elected to the British Royal Society'],
            [1996, 'Died of a heart attack at a conference in Warsaw, Poland, at the age of 83, shortly after proving a geometry problem']
        ]
    }
    
    render() {
        return (
            <div>
                <div className='main'>
                    <Header />
                    <Timeline timeline={this.state.timeline} />
                </div>
                <Footer />
            </div>
        );
    }
}
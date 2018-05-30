import React from 'react';

const Timeline = (props) => (
    <div>
        <p className='overall'>Overall, Erdős published over 1500 articles collaborating with over 500 other mathematicians, was a leader in the development of Ramsey theory, solved many problems in discrete mathematics as well as giving elementary proofs of numerous major theorems. There are <a href='https://en.wikipedia.org/wiki/List_of_things_named_after_Paul_Erd%C5%91s'>over 40 theorems</a>, awards, lectures or concepts in mathematics named after him.</p>
        <h2>
            Some of the main events in Erdős' life
        </h2>
        <div className='timeline'>
            {/* aim for 15-20 items */}
            {props.timeline.map((event) => (
                <div key={event} className='timeline-item'>
                    <span className='timeline-date'>
                        {event[0]}
                    </span>
                    -
                    <span className='timeline-event'>
                        {event[1]}
                    </span>
                </div>
            ))}
        </div>
        <div className='bottom-content'>
            <p className='quote'>"Never, mathematicians say, has there been an individual like Paul Erdős. He was one of the century's greatest mathematicians, who posed and solved thorny problems in number theory and other areas and founded the field of discrete mathematics, which is the foundation of computer science. He was also one of the most prolific mathematicians in history, with more than 1,500 papers to his name. And, his friends say, he was also one of the most unusual."</p>
            <p className='quote-from'>--<a href='http://www.nytimes.com/1996/09/24/us/paul-erdos-83-a-wayfarer-in-math-s-vanguard-is-dead.html'>Gina Kolata</a></p>
        </div>
        <div className='wiki-link'>
            <p>If you have time you can read more about his incredible life and the far reaching influence he had on the mathematical world in his <a href='https://en.wikipedia.org/wiki/Paul_Erd%C5%91s'>Wikipedia entry</a>, or watch the 1993 documentary <a href='https://www.youtube.com/watch?v=HaHZe5aXsaA'>N is a Number: A Portrait of Paul Erdos</a>.</p>
        </div>
    </div>
);

export default Timeline;
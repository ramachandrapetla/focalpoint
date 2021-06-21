import './AboutAuthor.css'
import React from 'react';

const AboutAuthor = ({author}) => {
    return (
        <section className="author-section">
            <div className="author-img">
                <img src="https://media-exp1.licdn.com/dms/image/C5103AQFy6Nx5hWZXmg/profile-displayphoto-shrink_200_200/0/1540145902259?e=1628121600&amp;v=beta&amp;t=vWjxgldRcCcqU4Vdlvo4z7Z-XH0U1sY14hDygmZiQqw" loading="lazy" alt="ramachandra petla" class="presence-entity__image  pv-top-card__photo  lazy-image ember-view" />
            </div>
            <div className="author-about">
                <h2>Published by {author}</h2>
                <p>Allison is a writer who loves all things digital marketing and WordPress. 
                    When she’s not writing you can find her curled up with a good mystery book, 
                    eating cheese, and spending time with her dog, Splinter (yes, like Master Splinter from the Ninja Turtles).</p>
            </div>
        </section>  
    )
}

export default AboutAuthor;
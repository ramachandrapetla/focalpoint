import React from 'react';
import axios from 'axios';
import './PostItem.css'
import PostHero from '../PostHero/PostHero'
import AboutAuthor from './AboutAuthor';

export class PostItem extends React.Component {

    constructor() {
        super();
        this.state = {
          posts : []
        }
      }

    async componentDidMount() {
        const res = await axios.get('http://localhost:1337/posts');
        console.log(res.data[0]);
        this.setState({posts : res.data});
    }

    render() {
        const {posts} = this.state;
        if(posts.length === 0) return <div>No Posts Found</div>
        console.log(posts[0]);
        return(
            <div>
                <PostHero 
                    postTitle={posts[0].postTitle} 
                    postAuthor={posts[0].admin_user}
                    postDate={posts[0].postDate}
                    featuredImage={posts[0].featuredImage}
                    postCategories={posts[0].categories}
                />
                <div className="post-body" dangerouslySetInnerHTML={{__html : posts[0].postContent}} />
                <AboutAuthor author={posts[0].admin_user.firstname}/>
            </div>

            
        )
    }
}
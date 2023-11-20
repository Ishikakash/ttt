import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import {  FaThumbsUp } from "react-icons/fa";
const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulating data fetch (replace this with your actual data fetching logic)
    const fetchData = async () => {
      const data = {
        user: {
            "name": "Anuj Gosalia",
          posts: [
            {
                name: "Anuj Gosalia",
              title: "Exploring the Wilderness",
              postcontent:
                "Venturing into the heart of nature, discovering hidden wonders. Add some content here. A long paragraph would be nice. I am just typing random stuff to fill up the space. I hope this is enough. I guess it is. I will stop now. Bye.",
              liked: true,
              date: "August 12",
              readingtime: "3",
              views: "234",
              category: "musing",
            },
            {
                name: "Anuj Gosalia",
                "title": "Coding Adventures",
          "postcontent": "Embarking on a coding journey, unraveling the mysteries of programming. Same for here. Add some content here. A long paragraph would be nice. I am just typing random stuff to fill up the space. I hope this is enough. I guess it is. I will stop now. Bye.",
          "liked": false,
          "date": "September 5",
          "readingtime": "5",
          "views": "120",
          "category": "thoughts"
            },
          ],
        },
      };
      setUserData(data.user);
    };

    fetchData();
  }, []);

  const handleLikeToggle = (index) => {
    setUserData((prevUserData) => {
      const updatedPosts = [...prevUserData.posts];
      updatedPosts[index].liked = !updatedPosts[index].liked;
      return { ...prevUserData, posts: updatedPosts };
    });
  };

  return (
    <div>
        <br/>
      {userData && (
        <div>
            <div style={{ display: 'inline-block', border: '1px solid grey', padding: '10px', borderRadius: '5px', paddingLeft: '20px' }}>
    <h2 style={{ color: '#0D9488', margin: '0' }}>{userData.posts.length} Posts</h2>
</div>

          
<div>
  {userData.posts.map((post, index) => (
    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '15px', borderRadius: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <h3>{post.title}</h3>
  <div>
    {post.liked ? (
      <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleLikeToggle(index)} />
    ) : (
      <FontAwesomeIcon icon={faThumbsDown} style={{ color: 'black', cursor: 'pointer' }} onClick={() => handleLikeToggle(index)} />
    )}
  </div>
</div>
      <p>{post.postcontent}</p>
      

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p style={{ paddingLeft: '20px', color: 'blue' }}>{post.category} </p> &nbsp;<p> by {post.name} . </p>
        <p>&nbsp; {post.date} . {post.readingtime} minutes Read . {post.views} Views</p>
      </div>
      
    </div>
  ))}
</div>


        </div>
      )}
    </div>
  );
};

export default UserProfile;

import React, { useState, useEffect } from 'react';


const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get('/api/tags')
      .then(response => setTags(response.data))
      .catch(error => console.error('There was an error fetching the tags!', error));
  }, []);

  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>{tag.tag_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;

import React from 'react';
import BlogPostCard from './BlogPostCard';
import { BlogPost } from '../types/index';

interface RelatedBlogPostsProps {
  currentPostId: number;
  posts: BlogPost[];
}

const RelatedBlogPosts: React.FC<RelatedBlogPostsProps> = ({ currentPostId, posts }) => {
  const relatedPosts = posts.filter(post => post.id !== currentPostId).slice(0, 3);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-[#120081]">Another Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );for (let i = 0; i < 5; i++) {
  console.log('Hello world!');
}

};

export default RelatedBlogPosts;
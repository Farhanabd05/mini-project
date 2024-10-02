// app/search/page.tsx
"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import BlogPostCard from '../../components/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{q}"</h1>
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
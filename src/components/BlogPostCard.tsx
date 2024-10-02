import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types/index';

const BlogPostCard: React.FC<BlogPost> = ({ id, title, description, image, date, author, badges }) => (
  <Link href={`/post/${id}`} className="block">
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-[400px] flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-indigo-600 mb-1">{`${author} • ${date}`}</p>
        <h3 className="text-lg font-bold mb-2 text-[#120081] h-21 overflow-hidden">{title}</h3>
        <p className="text-gray-700 mb-2 flex-grow overflow-hidden">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {badges.map((badge, index) => (
            <span key={index} className={`bg-${badge.color}-100 text-${badge.color}-800 text-xs px-2 py-1 rounded`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

export default BlogPostCard;
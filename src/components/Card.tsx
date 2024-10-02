import * as React from "react";
import { Image, StructuredText } from 'react-datocms';
import { BlogPost } from '../types'
import Link from "next/link";


const Card: React.FC<BlogPost> = ({title, description, image, date, author, slug, badges}) => (
    <Link href={`/${slug}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden h-[400px] flex flex-col">
          <div className="bg-gradient-to-b from-[#120081] to-[#7660FF] p-[4px] rounded-lg">
            {// eslint-disable-next-line jsx-a11y/alt-text 
            <Image data={image} className="w-full h-full object-cover"/>
            }
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-sm font-semibold text-indigo-600 mb-1">{`${author} • ${date}`}</p>
              <h3 className="text-lg font-bold mb-2 text-[#120081] h-21 overflow-hidden">{title}</h3>
              <p>{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
          {badges.map((badge, index) => (
            <span key={index} className={`bg-${badge.color}-100 text-${badge.color}-800 text-xs px-2 py-1 rounded`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </Link>  
);


export default Card;

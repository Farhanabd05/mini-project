"use client"
import React, { useEffect, useState } from 'react';
import { performRequest } from '@/lib/dato';
import { Article } from '../types';
import  Home from '../components/HomePage'


const PAGE_CONTENT_QUERY = `
  query Home {
    allArticles(orderBy: publishedDate_DESC) {
      id
      title
      slug
      publishedDate
      image {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          sizes
          src
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
      author
      description
      content {
        value
      }
    }
  }
`;

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchArticles = async () => {
      const { data } = await performRequest({ query: PAGE_CONTENT_QUERY});
      setArticles(data.allArticles);
      setLoading(false);
    };
    fetchArticles();
  }, []);

  if (loading) return <div className='bg-white w-screen h-screen items-center justify-center text-center align-middle'></div>;

  return (
    <div className='flex w-screen mx-[5%] items-center justify-center'>
      <Home allArticles={articles}/>
    </div>
  );
};

export default HomePage;
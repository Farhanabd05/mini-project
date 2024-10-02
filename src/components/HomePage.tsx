import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import Card from '../components/Card';
import PaginationNumbers from '../components/PaginationNumbers';
import { performRequest } from "../lib/dato"
import { useMediaQuery } from 'react-responsive';
import { Article, ResponsiveImage } from '../types/index';

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

interface HomeProps {
    allArticles: Article[];
}

export async function getStaticProps() {
    const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });

    return {
        props: {
        allArticles: data.allArticles,
        },
    };
}

const Home: React.FC<HomeProps> = ({ allArticles }) => {
    
    const [currentPage, setCurrentPage] = useState(1);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });

    // Set items per page based on screen size
    const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

    const totalItems = allArticles.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentArticles = allArticles.slice(startIndex, endIndex);

return (
    <div className='w-full items-center justify-center'>
        <div className="w-full h-fit bg-white py-8 mb-8">
            <div className="container mx-auto px-4">
                <HeroSlider slides={allArticles} />
            </div>
        </div>
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#120081]">Blog Posts</h2>
            <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((article: Article) => (
                    <div key={article.id} className="hover:scale-[1.02] transition-all duration-300 my-6 rounded-md p-4">
                    <Card key={article.id}
                    slug={article.slug}
                    id={article.id}
                    title={article.title}
                    description={article.description} 
                    image={article.image.responsiveImage} 
                    date={article.publishedDate} 
                    author={article.author} 
                    badges={[
                        { color: 'indigo', text: 'Badge 1' },
                    ]}  />
                    </div>
                ))}
            </div>
            <PaginationNumbers 
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                currentPage={currentPage} />
        </div>
    </div>
);
};

export default Home;
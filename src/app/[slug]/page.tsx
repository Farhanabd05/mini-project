import { Image, StructuredText } from "react-datocms";
import { performRequest } from "../../lib/dato";
import { Article } from "../../types";
import Link from "next/link";

const PAGE_CONTENT_QUERY = `
query Article($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
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
        content {
            value
        }
    }
    allArticles(orderBy: publishedDate_DESC) {
        title
        slug
        author
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
    }
}
`;

interface ArticlePageProps {
  params: { slug: string };
}


export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  const {
    data: { article, allArticles },
  }: { data: { article: Article; allArticles: Article[] } } =
    await performRequest({
      query: PAGE_CONTENT_QUERY,
      variables: { slug },
    });

  const otherArticles = allArticles.filter(
    (otherArticle) => otherArticle.slug !== slug
  );

  return (
    <main className="w-full h-full mb-12 bg-white">
        <div className="max-w-7xl h-full mx-auto px-4">
            <div className="flex pt-10 flex-col md:flex-row gap-[10%]">
                <div className="md:w-[60%]">
                <p className="text-indigo-600 mb-1">{`${article.author} • ${article.publishedDate}`}</p>
                <h1 className="text-3xl font-bold mb-4 text-[#120081]">
                    {article.title}
                </h1>
                <div className="rounded-md bg-gradient-to-b from-[#120081] to-[#7660FF] p-[4px]">
                    {
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <Image
                        data={article.image.responsiveImage}
                        className="rounded-md"
                        />
                    }
                </div>
                    <div className="my-10 text-justify font-[400] text-[#0E0064]">
                        <StructuredText data={article.content.value} />
                    </div>
                </div>
                <div className="md:w-[30%]">
                <h2 className="text-2xl font-bold mb-4 text-[#120081]">
                    Another Posts
                </h2>
                <div className="space-y-4">
                    {otherArticles.slice(0, 3).map((otherArticle) => (
                        <Link key={otherArticle.slug} href={`../${otherArticle.slug}`}>
                            <div className="bg-white rounded-lg overflow-hidden">
                                <div className="rounded-md bg-gradient-to-b from-[#120081] to-[#7660FF] p-[4px]">
                                {
                                    // eslint-disable-next-line jsx-a11y/alt-text
                                    <Image
                                    data={otherArticle.image.responsiveImage}
                                    className=" rounded-md"
                                    />
                                }
                                </div>
                            <div className="py-4">
                                <p className="text-sm text-indigo-600 mb-1">{`${otherArticle.author} • ${otherArticle.publishedDate}`}</p>
                                <h3 className="text-lg font-bold mb-2 text-[#120081]">
                                {otherArticle.title}
                                </h3>
                            </div>
                            </div>
                        </Link>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </main>
);
};
import { StructuredTextDocument } from "react-datocms";


export interface Badge {
    color: string;
    text: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    description: any;
    image: any;
    date: string;
    author: string;
    badges: Badge[];
    slug: string;
  }

  export interface ResponsiveImage {
    width: number;
    webpSrcSet: string;
    title: string;
    srcSet: string;
    sizes: string;
    src: string;
    height: number;
    bgColor: string;
    base64: string;
    aspectRatio: number;
    alt: string;
  }
  
  export interface Article {
    id: string;
    title: string;
    slug: string;
    publishedDate: string;
    image: {
      responsiveImage: ResponsiveImage;
    };
    author: string;
    description: string;
    content: {
      value: StructuredTextDocument;
    };
  }
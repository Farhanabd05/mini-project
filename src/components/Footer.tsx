import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-indigo-900 text-white py-4 mt-auto z-50">
    <div className="container mx-auto text-center">
      &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
    </div>
  </footer>
);

export default Footer;
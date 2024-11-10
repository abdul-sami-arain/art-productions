
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, author, lang = 'en' }) => {
    return (
        <Helmet>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
        </Helmet>
    );
};

export default SEO;

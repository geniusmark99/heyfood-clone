import Document, { Html, Head, Main, NextScript } from 'next/document';
import FooterWidget from './components/FooterWidget';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className='relative'>
          <Main />
          <NextScript />
<div id='sort-widget-container' className='mb-20'></div>
<FooterWidget/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

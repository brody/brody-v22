import Image from 'next/image';
import { useEffect } from 'react';

/* eslint-disable @next/next/no-sync-scripts */
export default function Reading() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      "https://www.goodreads.com/review/custom_widget/1073529.Brody's%20bookshelf:%20currently-reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=none&widget_id=1532863785&widget_text_color=000000&widget_title_size=medium&widget_width=full";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id='gr_custom_widget_1532863785'>
        <div className='gr_custom_container_1532863785'>
          <div className='gr_custom_each_container_1532863785'>
            <div className='gr_custom_book_container_1532863785'>
              <a
                title='Green Eggs and Ham'
                rel='nofollow'
                href='https://www.goodreads.com/review/show/4199125546?utm_medium=api&amp;utm_source=custom_widget'
              >
                <Image
                  height='150'
                  width='100'
                  alt='Green Eggs and Ham'
                  src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1468680100l/23772.jpg'
                />
              </a>
            </div>
            <div className='gr_custom_title_1532863785'>
              <a
                rel='nofollow'
                href='https://www.goodreads.com/review/show/4199125546?utm_medium=api&amp;utm_source=custom_widget'
              >
                Green Eggs and Ham
              </a>
            </div>
            <div className='gr_custom_author_1532863785'>
              by{' '}
              <a rel='nofollow' href='https://www.goodreads.com/author/show/4384050.Oliver_Burkeman'>
                Dr. Seuss
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}

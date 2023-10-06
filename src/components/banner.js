import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
function Banner() {
    return (
        <>
          <div className='row see_all'>
            <div className='slide col-12'>
              <UncontrolledCarousel
                items={[
                  {
                      id:1,
                      altText: 'Slide 1',
                      caption: 'Sách Hay',
                      src: 'img/banner_img/sách1.jpg'
                  },
                  {
                      id:2,
                      altText: 'Slide 2',
                      caption: 'Sách Mới',
                      src: 'img/banner_img/sách2.jpg'
                  },
                  {
                      id:3,
                      altText: 'Slide 3',
                      caption: 'Sách Đẹp',
                      src: 'img/banner_img/sách3.jpg'
                  }
                ]}
              />
            </div>
          </div>
        </>
    );
}

export default Banner;
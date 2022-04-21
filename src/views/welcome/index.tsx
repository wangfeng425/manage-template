import React from 'react';
import { Carousel } from 'antd';
import './index.scss'

const welcome = () => {
  return (
    <div className="page-welcome">
      <Carousel>
        <div>
          <h3 className="welcome-banner-1"></h3>
        </div>
        <div>
          <h3 className="welcome-banner-2"></h3>
        </div>
        <div>
          <h3 className="welcome-banner-3"></h3>
        </div>
        <div>
          <h3 className="welcome-banner-4"></h3>
        </div>
      </Carousel>
    </div>

  )
}

export default welcome
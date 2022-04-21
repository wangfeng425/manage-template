import React, { useRef, useEffect } from 'react';
import bodymovin from 'bodymovin'

const loading = () => {
  const loadingContent = useRef(null)
  let anim: any
  useEffect(() => {
    console.log(document.querySelector('#loadingContent'))
    const animData = {
      wrapper: document.querySelector('#loadingContent'),
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      animationData: require('./data.json')
    };
    anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(1.42);

    return function cleanup () {
      anim = ''
    };
  }, [])
  return (
    <div className="wp100 hp100">
      <div className="wp100 hp100"
        id="loadingContent"
        ref={loadingContent}></div>
    </div>
  )
}

export default loading
const videos = document.querySelectorAll('[data-name="video-container"]');

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

const createIframe = (id) => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
};

const initVideo = (video) => {
  let link = video.querySelector('[data-name="video-link"]');
  let button = video.querySelector('[data-name="video-button"]');
  let id = link.dataset.id;

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  // link.removeAttribute('href');
  // video.classList.add('video--enabled');
};

const findVideos = () => {
  if (videos) {
    for (let i = 0; i < videos.length; i++) {
      initVideo(videos[i]);
    }
  }
};

export {findVideos};

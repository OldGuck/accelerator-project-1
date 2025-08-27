const videoContainer = document.querySelector('.about__video-wrapper');
const videoPreview = videoContainer.querySelector('picture');
const playButton = document.querySelector('.about__play-button');

const createIframe = (className, src) => {
  const iframe = document.createElement('iframe');
  iframe.classList.add(className);
  iframe.setAttribute('src', src);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('allowfullscreen', 'true');

  return iframe;
};

playButton.addEventListener('click', () => {
  const iframe = createIframe('about__video', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=0');

  videoContainer.classList.add('about__video-wrapper--playing');
  videoPreview.remove();
  playButton.remove();
  videoContainer.appendChild(iframe);
});

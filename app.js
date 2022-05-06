
const links = document.querySelectorAll('.link__item');
const flourish = document.querySelector('.flourish');

const flourishData = [
   {
      dataName: `<iframe src='https://flo.uri.sh/visualisation/9770296/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:80vw;height:85vh; sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div class="made-flourish"><a class='flourish-credit' href='https://public.flourish.studio/visualisation/9770296/?utm_source=embed&utm_campaign=visualisation/9770296' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`,
      title: 'Оң тарап'
   },
   {
      dataName: `<iframe src='https://flo.uri.sh/visualisation/9813699/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:80vw;height:85vh; sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div class="made-flourish"><a class='flourish-credit' href='https://public.flourish.studio/visualisation/9813699/?utm_source=embed&utm_campaign=visualisation/9813699' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`,
      title: 'Сол тарап'
   },
   {
      dataName: `<iframe src='https://flo.uri.sh/visualisation/9813744/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:80vw;height:85vh; sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div class="made-flourish"><a class='flourish-credit' href='https://public.flourish.studio/visualisation/9813744/?utm_source=embed&utm_campaign=visualisation/9813744' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`,
      title: 'Ортаңғы тарап'
   },
]

function visualisation(i = 0) {
   flourish.innerHTML = ''

   links.forEach(link => link.classList.remove('active'))
   links[i].classList.add('active')

   const loading = document.createElement('img');
   loading.src = 'img/spinner.svg';

   flourish.innerHTML = '<img src="img/spinner.svg" alt="Spinner" />'
   setTimeout(() => {
      flourish.innerHTML = '';
      const el = document.createElement('div')
      el.innerHTML = flourishData[i].dataName

      flourish.append(el);
   }, 200)
}

visualisation();

links.forEach((link, i) => {
   link.addEventListener('click', (e) => showVisualization(e, i))
})

function showVisualization(e, i) {
   e.preventDefault();

   for (let j = 0; j < flourishData.length; j++) {
      if (i === j) {
         visualisation(i);
      }
   }
}
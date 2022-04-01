let center = [50.0830009795472,14.445121182872695];

function init() {
	const map = new ymaps.Map('map-test', {
		center: center,
		zoom: 18
   });
   const placemark1 = new ymaps.Placemark(center, {
      balloonContent: `
      
      <div class="balloon">
         <div class="balloon__text"><strong>Adresa: Vlkova 532/8, Praha 3</strong>
         Žižkov, 130 00</div>
         <div class="balloon__text"><strong>VOLEJTE 24/7:</strong>
         +(420) 234 076 097</div>
         <div class="balloon__text"><strong>Firma:LiaRo s.r.o</strong>
         IČO:07564741</div>
      </div>

      
      `
   }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/ico/placemark.svg',
      iconImageSize: [68, 68],
      iconImageOffset: [-35, -45],
   });


	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
   
   // map.geoObjects.add(placemark);
   map.geoObjects.add(placemark1);
}

ymaps.ready(init);
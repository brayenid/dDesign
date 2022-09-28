const logo = document.querySelector('.logo');
const translateKotakKiri = document.querySelector('.kotak1');
const translateKotakKanan = document.querySelector('.kotak2');

window.addEventListener('scroll', function () {
  const scroll = document.documentElement.scrollTop;
  let scrollOpacity = -scroll / 110 + 1;
  let scrollScale = scroll / 120 + 1;
  logo.style.opacity = scrollOpacity;
  logo.style.transform = `scale(${scrollScale})`;

  const kotak1 = this.document.querySelector('.kotak1');
  const kotak2 = this.document.querySelector('.kotak2');
  kotak1.classList.add('kotakOpacity');
  kotak2.classList.add('kotakOpacity');
  let scrollOpacityContent = Math.min(1, scroll / 120);

  let translateLeft = Math.min(0, scroll * 5 - 1000);
  translateKotakKiri.style.transform = `translate(${translateLeft}px,${translateLeft}px)`;
  translateKotakKiri.style.opacity = scrollOpacityContent;
  let translaterRight = Math.min(0, scroll * 4.5 - 1000);
  translateKotakKanan.style.transform = `translate(${-translaterRight}px,${-translaterRight}px)`;
  translateKotakKanan.style.opacity = scrollOpacityContent;

  let scrollValueRounded = Math.round(scroll);
  const silang = this.document.querySelector('.tutup');
  const menuList = this.document.querySelector('.menu ul');
  if (scrollValueRounded >= 120) {
    this.document.body.classList.add('bodyBgChange');
    logo.style.zIndex = '-1';
    silang.classList.add('tutupAppear');
    menuList.classList.add('menuListDissapear');
  } else {
    logo.style.display = 'block';
    this.document.body.classList.remove('bodyBgChange');
    silang.classList.remove('tutupAppear');
    logo.style.zIndex = 'inherit';
    menuList.classList.remove('menuListDissapear');
  }

  const atasGaleriAwalOffset = document.querySelector('.containerKotak').getBoundingClientRect().y;
  const imgGrids = document.querySelectorAll('.bingkaiImgGrid');
  for (let i = 0; i < imgGrids.length; i++) {
    imgGrids[i].style.transition = `.5s transform ${i / 4.8}s`;
  }
  if (scrollValueRounded >= atasGaleriAwalOffset + 200) {
    imgGrids.forEach((imgGrid) => {
      imgGrid.classList.add('imgScalingNormal');
    });
  } else {
    imgGrids.forEach((imgGrid) => {
      imgGrid.classList.remove('imgScalingNormal');
    });
  }
  if (scrollValueRounded <= atasGaleriAwalOffset + 100) {
    document.querySelector('.toggleMenu').classList.remove('appearToggle');
    document.getElementById('checkClose').checked = false;
  }
  if (scrollValueRounded >= atasGaleriAwalOffset + 1450) {
    document.querySelector('.viewMore').classList.add('inheritView');
  } else {
    document.querySelector('.viewMore').classList.remove('inheritView');
  }
  if (scrollValueRounded >= atasGaleriAwalOffset + 1450) {
    document.querySelector('.whatIdo').classList.add('widGrow');
  } else {
    document.querySelector('.whatIdo').classList.remove('widGrow');
  }
  if (scrollValueRounded >= atasGaleriAwalOffset + 1450) {
    document.querySelector('.contact').classList.add('contactGrow');
  } else {
    document.querySelector('.contact').classList.remove('contactGrow');
  }
});

const toggleClick = document.querySelector('.tutup');
toggleClick.addEventListener('click', () => {
  document.querySelector('.toggleMenu').classList.toggle('appearToggle');
});

const tutupMbl = document.querySelector('.tutupMbl');
tutupMbl.addEventListener('click', () => {
  document.querySelector('.menuMbl').classList.toggle('menuMblAppear');
});
// Jquery
$('.page-scroll').on('click', function (e) {
  let href = $(this).attr('href');
  let bungkusanhref = $(href);
  $('html').animate(
    {
      scrollTop: bungkusanhref.offset().top - 60,
    },
    2000,
    'easeOutExpo'
  );
  e.preventDefault();
});

// data
Vue.component('podcast-post', {
  props: ['title', 'cover', 'intro', 'url', 'latest'],
  template: `
    <a :href="url" class="w-full bg-white md:flex md:h-48 rounded">
      <div class="article-mast py-12 md:w-1/2 bg-cover bg-center text-white text-opacity-75 rounded-t md:rounded-l md:rounded-r-none flex" :style="'background-image: url(img/podcasts/'+ cover +')'">
        <i class="fa fa-play-circle-o fa-4x m-auto" role="presentation" aria-label="Play"></i>
      </div>
      <div class="article-info p-8 md:w-1/2 md:h-full self-center overflow-y-scroll">
        <h3 v-if="latest" class="mb-2 font-bold text-xl text-yellow-500 uppercase">Latest Episode</h3>
        <p class="leading-tight"><b>{{ title }}</b></p>
        <small v-if="intro" class="pt-2 block text-gray-600 text-opacity-50 leading-tight">{{ intro }}</small>
      </div>
    </a>
  `
});

var vm = new Vue({
  el: '.page',
  data() {
    return {
      site_title: 'Ideas by Elliot',
      site_author: 'Elliot "Waxmaster" C.',
      site_slogan: 'Podcasts and unintelligible musings',
      podcasts_search: null,
      podcasts: [
        {
          title: 'November 13, 2020 - Wisconsin Rep Shae Sortwell',
          cover: '0039.jpg',
          intro: '',
          url: 'https://youtu.be/-oSv-NSEI5Q',
        },
        {
          title: 'November 9, 2020 Fluoride Removal Activist: Brenda Staudenmaier',
          cover: '0038.jpg',
          intro: '',
          url: 'https://youtu.be/NLkpIB_y3OA',
        },
        {
          title: 'Green Bay Guy Zima Ideas By Elliot Podcast',
          cover: '0037.jpg',
          intro: '',
          url: 'https://youtu.be/NBUta4wQtWA',
        },
        {
          title: '0035 Absolute Packer Podcast',
          cover: '0035.jpg',
          intro: '',
          url: 'http://www.stitcher.com/s?eid=50792536',
        },
        {
          title: '0034 Donxay Rasavong',
          cover: '0034.jpg',
          intro: '',
          url: 'https://youtu.be/uFgerq6s4to',
        },
        {
          title: '0033 Tommy TRC',
          cover: '0033.jpg',
          intro: '',
          url: 'https://youtu.be/gDJ4pnGeveo',
        },
        {
          title: 'S017 - Mic Test with Tricia Nell',
          cover: 's017.jpg',
          intro: '',
          url: 'https://youtu.be/DzeteNEvf-4',
        },
        {
          title: 'S016 Tricia Nell',
          cover: 's016.jpg',
          intro: 'On the Pending Brendan Dassey Release',
          url: 'https://youtu.be/Kj-0jJ8_y_4',
        },
        {
          title: '0032 Anthony Alvarado',
          cover: '0032.jpg',
          intro: '',
          url: 'https://youtu.be/BAHLJhSO3cU',
        },
        {
          title: '0031 Troy Frisque',
          cover: '0031.jpg',
          intro: '',
          url: 'https://youtu.be/5xJOV6BRgxc',
        },
        {
          title: '0030 Tricia Nell',
          cover: '0030.jpg',
          intro: '',
          url: 'https://youtu.be/oCb091ZBz0I',
        },
        {
          title: '0029 Michael Taylor',
          cover: '0029.jpg',
          intro: '',
          url: 'https://youtu.be/ezXul9LxLBU',
        },
        {
          title: '0028 Brian Simons',
          cover: '0028.jpg',
          intro: '',
          url: 'https://youtu.be/lMKGjqATrSQ',
        },
        {
          title: '0027 Scott Clark',
          cover: '0027.jpg',
          intro: '',
          url: 'https://youtu.be/YvJOgiP7D5g',
        },
        {
          title: '0026 Brent Weycker',
          cover: '0026.jpg',
          intro: '',
          url: 'https://youtu.be/oc2TEzH6dLo',
        },
        {
          title: '0025 Z-man',
          cover: '0025.jpg',
          intro: '',
          url: 'https://youtu.be/_w1ep-9aPkY',
        },
        {
          title: 'S015 Emma Fulwilder',
          cover: 's015.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/imc71dTJocs',
        },
        {
          title: 'S014 Evan Hucek',
          cover: 's014.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/CWeB2hSBkvU',
        },
        {
          title: 'S013 Mark Becker',
          cover: 's013.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/Upun2pj4fWE',
        },
        {
          title: '0024 Eric Christenson',
          cover: '0024.jpg',
          intro: 'ORK',
          url: 'https://youtu.be/P0KFlxfAGhs',
        },
        {
          title: '0023 Richard Parins',
          cover: '0023.jpg',
          intro: '',
          url: 'https://youtu.be/I2pQP9lM9wM',
        },
        {
          title: 'S012 Jim Ridderbush',
          cover: 's012.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/EqzsCcJpKew',
        },
        {
          title: 'S011 Rhonda Sitnikau',
          cover: 's011.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/6UsWwi5a0g0',
        },
        {
          title: 'S010 Heba Mohammad',
          cover: 's010.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/zYhxeIElUgE',
        },
        {
          title: 'S009 Amanda Patterson-Luedtke',
          cover: 's009.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/qpRjldKoSvA',
        },
        {
          title: 'S008 Vanya Koepke',
          cover: 's008.jpg',
          intro: 'Election Special',
          url: 'https://youtu.be/TNxVaELbu5U',
        },
        {
          title: 'S006 Mufasa and Son',
          cover: 's006.jpg',
          intro: '',
          url: 'https://youtu.be/XVHzs9g0-9I',
        },
        {
          title: 'S005 Online Kid Safety Special',
          cover: 's005.jpg',
          intro: '',
          url: 'https://youtu.be/eJaJi3MHD9I',
        },
        {
          title: '0022 Naresh Rimal',
          cover: '0022.jpg',
          intro: '',
          url: 'https://youtu.be/e0lzT1lHRDs',
        },
        {
          title: '0021 Alex Galt',
          cover: '0021.jpg',
          intro: '',
          url: 'https://youtu.be/ZFlpE9Wi37s',
        },
        {
          title: '0020 David Snopek',
          cover: '0020.jpg',
          intro: '',
          url: 'https://youtu.be/GwYOU7PVW0A',
        },
        {
          title: 'S004 Presidential Political Pundits Part 2',
          cover: 's004.jpg',
          intro: '',
          url: 'https://youtu.be/jEihq0HAcYc',
        },
        {
          title: 'S003 Star Wars Fan Show',
          cover: 's003.jpg',
          intro: '',
          url: 'https://youtu.be/KF-QbqJLr7g',
        },
        {
          title: 'S002 Presidential Political Pundits Part 1',
          cover: 's002.jpg',
          intro: '',
          url: 'https://youtu.be/jEihq0HAcYc',
        },
        {
          title: '0019 Betsy Malueg',
          cover: '0019.jpg',
          intro: '',
          url: 'https://youtu.be/WG1RB20q5gA',
        },
        {
          title: 'S001 Thanksgiving 2015',
          cover: 's001.jpg',
          intro: '',
          url: 'https://youtu.be/cKlbfIb4ErE',
        },
        {
          title: '0018 Jared Mason, Justin Mason',
          cover: '0018.jpg',
          intro: '',
          url: 'https://youtu.be/PJykua_QHio',
        },
        {
          title: '0017 Tommy TRC',
          cover: '0017.jpg',
          intro: '',
          url: 'https://youtu.be/W6nDoSvAlX0',
        },
        {
          title: '0016 Erin Davisson',
          cover: '0016.jpg',
          intro: '',
          url: 'https://youtu.be/1N4m4pYEQxY',
        },
        {
          title: '0015 Chris Pretti, James Baker',
          cover: '0015.jpg',
          intro: '',
          url: 'https://youtu.be/FfdfJd9mfEg',
        },
        {
          title: '0014 Dan Terrio',
          cover: '0014.jpg',
          intro: '',
          url: 'https://youtu.be/n0uebTkApho',
        },
        {
          title: '0013 Melissa Tanke',
          cover: '0013.jpg',
          intro: '',
          url: 'https://youtu.be/0jh3mucJHQU',
        },
        {
          title: '0012 Don Nelson',
          cover: '0012.jpg',
          intro: '',
          url: 'https://youtu.be/fudVNyGorWc',
        },
        {
          title: '0011 Ask Me Anything',
          cover: '0011.jpg',
          intro: '',
          url: 'https://youtu.be/wpmQ80CWF8c',
        },
        {
          title: '0010 Meg Pickett',
          cover: '0010.jpg',
          intro: '',
          url: 'https://youtu.be/yfTEgpCwdvo',
        },
        {
          title: '0009 Terry Taylor',
          cover: '0009.jpg',
          intro: '',
          url: 'https://youtu.be/jsiJQmJrQLo',
        },
        {
          title: '0008 Heather Ludwig, Krystina Engebos',
          cover: '0008.jpg',
          intro: '',
          url: 'https://youtu.be/jVHx7BDszto',
        },
        {
          title: '0007 Nicole Zich',
          cover: '0007.jpg',
          intro: '',
          url: 'https://youtu.be/jTAoNkJGnlA',
        },
        {
          title: '0006 Scott Eastman',
          cover: '0006.jpg',
          intro: '',
          url: 'https://youtu.be/SrFJs9-sTtk',
        },
        {
          title: '0005 Justin Laser',
          cover: '0005.jpg',
          intro: '',
          url: 'https://youtu.be/d8-SnWdA-h8',
        },
        {
          title: '0004 Tricia Nell',
          cover: '0004.jpg',
          intro: '',
          url: 'https://youtu.be/zpcE7tPV7zs',
        },
        {
          title: '0003 Adam Funk',
          cover: '0003.jpg',
          intro: '',
          url: 'https://youtu.be/MAfSsdf8zxU',
        },
        {
          title: '0002 Randy Scannell',
          cover: '0002.jpg',
          intro: '',
          url: 'https://youtu.be/QfjyfE9vdOE',
        },
        {
          title: '0001 Rhonda Sitnikau',
          cover: '0001.jpg',
          intro: '',
          url: 'https://youtu.be/tB7xhZqR2UY',
        },
        {
          title: '0000 Gina Christenson',
          cover: '0000.jpg',
          intro: '',
          url: 'https://youtu.be/5QrbReW2OUI',
        },
      ]
    };
  },
  computed: {
    podcasts_results(){
      if(this.podcasts_search){
        return this.podcasts.filter((item)=>{
          return this.podcasts_search.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v)) || this.podcasts_search.toLowerCase().split(' ').every(v => item.intro.toLowerCase().includes(v))
        })
      } else {
        return this.podcasts;
      }
    }
  }
});
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {config, library} from '@fortawesome/fontawesome-svg-core'
import {faLink, faPlug} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLastfm, faTwitter} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
require('typeface-nunito-sans');

//config.autoAddCss = false;
library.add(faGithub, faLink, faPlug, faLastfm, faTwitter);

export default function(Vue, {router, head, isClient})
{
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.component('font-awesome', FontAwesomeIcon);

    head.meta.push({
        name: 'keywords',
        content: 'techchrism,Web Developer,Developer,Programmer'
    });
    head.meta.push({
        name: 'description',
        content: 'Chris Miller\'s Personal Website'
    });
    head.meta.push({
        name: 'author',
        content: 'Chris Miller'
    });
}



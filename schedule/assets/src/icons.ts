import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCalendarAlt, faUserAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

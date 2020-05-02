import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faUserAlt, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCalendarAlt, faUserAlt, faArrowCircleLeft, faArrowCircleRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyA8AKcVYA9_nqxpsE9Xm2LPV6bLgSNijF0',
	authDomain: 'todosapp-fe6d8.firebaseapp.com',
	projectId: 'todosapp-fe6d8',
	storageBucket: 'todosapp-fe6d8.appspot.com',
	messagingSenderId: '110273618637',
	appId: '1:110273618637:web:7ae1c42505f35210e5ff84',
	databaseURL: 'https://todosapp-fe6d8-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

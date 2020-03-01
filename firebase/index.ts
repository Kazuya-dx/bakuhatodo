import firebase from 'firebase';
import config from './config';

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();

/*
firebase/index.ts をmodules/(createSlice)にインポートすることでデータベースを使用します。
reduxでステートを変更していたところをFireStoreのロジックで置き換えます。

参考url: https://qiita.com/gonta616/items/278a7e81a8b624d9621e
*/
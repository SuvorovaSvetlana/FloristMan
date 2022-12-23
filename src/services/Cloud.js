import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "floristman-a4faf.firebaseapp.com",
      projectId: "floristman-a4faf",
      storageBucket: "floristman-a4faf.appspot.com",
      messagingSenderId: "282969411711",
      appId: process.env.APP_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();

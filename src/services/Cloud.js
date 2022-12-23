import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: "AIzaSyADGuzPSHmwmRrN5c8btMUKOsaYAAcFdQ0",
      authDomain: "floristman-a4faf.firebaseapp.com",
      projectId: "floristman-a4faf",
      storageBucket: "floristman-a4faf.appspot.com",
      messagingSenderId: "282969411711",
      appId: "1:282969411711:web:d132b449040d7f34676f4a"
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();

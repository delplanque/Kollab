import Firebase from "firebase";
import { global } from "./environments";

let app = Firebase.initializeApp(global.firebase);
export const database = app.database();

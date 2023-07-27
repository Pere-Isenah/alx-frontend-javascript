import { uploadPhoto, createUser } from './utils';

let body;
let names;
export default function handleProfileSignup() {
  uploadPhoto().then((data) => {
    body = data.body;
  });
  createUser().then((e) => {
    names = `${e.firstName} ${e.lastName}`;
  }).then(() => {
    console.log(`${body} ${names}`);
  })
  .catch((error) => {
    console.log("Signup system offline");
  });
}

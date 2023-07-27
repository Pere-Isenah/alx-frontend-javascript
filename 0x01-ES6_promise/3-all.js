import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body } = photoResponse;
      const { firstName, lastName } = userResponse;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}

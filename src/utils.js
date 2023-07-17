import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));
  const path = new URL(request.url).pathname;
  console.log(path);
  // console.log(typeof isLoggedIn);
  console.log(request);
  if (!isLoggedIn) {
    return redirect(`/login?message=You must log in first.&redirectTo=${path}`);
    // const response = redirect("/login?message=You must log in first");
    // response.body = true;
    // throw response;
  } else {
    // return redirect("/host");
    return null;
  }
  // return null;
}

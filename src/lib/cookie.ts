export function setUserCookie(username: string) {
    document.cookie = `username=${username}; path=/`;
    console.log(`Cookie set for user: ${username}`);
  }
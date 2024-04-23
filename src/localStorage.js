export const Key_Access_Token="email";
export const password="password";


export function getItem(key){
    return localStorage.getItem(key);
}
export function setItem(key,value){
    localStorage.setItem(key,value);
}
export function deleteUser(key){
    localStorage.removeItem(key)
}
// export function countUser(key,value){
//     return localStorage.setItem(key,value)
// }
// export function getCountUser(key){
//     return localStorage.getItem(key)
// }
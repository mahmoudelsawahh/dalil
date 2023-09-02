import { localUrl } from "./baseUrl"

export async function registerUser(param) {
    const res = await fetch(`${localUrl}/rest/test.peoples/register`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(param),
      cache : 'no-store'
    })
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return "loading"
    }
   
    return res.json()
  }

 export async function getStates() {
    const res = await fetch(`http://192.168.0.201:8080/dalil-New/rest/test.branch/getStates`,{
      cache : 'no-store'
    })
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return "loading"
    }
   
    return res.json()
  }

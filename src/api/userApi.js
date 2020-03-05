export async function registerUser(user) {
  const response = await fetch('http://localhost:3001/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
      body:JSON.stringify(user),
    
  })
  return await response.json();
  
  }
  
  // export async function loginUser(user) {
  //   const response = await fetch('http://localhost:3001/api/users/:id', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'},
  //       body:JSON.stringify(user),
      
  //   })
  //   return await response.json();
  // }
    
  // export async function getProfileData() {
  //   const response = await fetch ('http://localhost:3001/api/users/register', {
  //     method: 'POST'
  //     });
  //     return await response.json();
  //   }
  
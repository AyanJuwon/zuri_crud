export async function getUserInfo(req, res) {
  // just testing things out
  
  res.json({
    fullname: 'Jane Doe',
    password: 'password',
    country: 'Shitty Nigeria'
  });
}
import http from 'k6/http';

export default function () {
  const url = 'http://{API}]/Authentication';
  const payload = JSON.stringify({
  userId: 0,
  userName: "test",
  email: "string@string.com",
  password: "test",
  admin: true
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
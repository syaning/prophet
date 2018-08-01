import { Base64 } from 'js-base64'

export default function parseToken(token) {
  if (!token) {
    return {}
  }

  const payload = Base64.decode(token.split('.')[1])
  return JSON.parse(payload)
}

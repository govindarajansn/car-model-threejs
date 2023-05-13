import { backendDevURL } from './ApiURlConstants';

export async function fetchColorPalette(body: Record<string, string>) {
  const colorPlatteUrl = `${backendDevURL}/api/handler`;
  const response = await fetch(colorPlatteUrl, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

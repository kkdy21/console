import { http } from 'msw';

export const handlers = [
    http.get('/testuser', () => {}),
    http.post('/testlogin', () => {}),
    http.delete('/testuser/:userId', () => {}),
];

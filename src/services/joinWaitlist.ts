import api from '@/utils/axios';

export const joinWaitlist = async (data: { email?: string; whatsapp?: string }) => {
    await api.get('/sanctum/csrf-cookie', { withCredentials: true });
    const res = await api.post('/api/waitlist/join', data);
    return res.data;
};

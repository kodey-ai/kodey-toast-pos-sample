import axios from 'axios';

interface AuthResponse {
  accessToken: string;
}

export async function getToastApiToken(clientId: string, clientSecret: string): Promise<string> {
  const authUrl = 'https://[toast-api-hostname]/authentication/v1/authentication/login';
  try {
    const response = await axios.post<AuthResponse>(authUrl, {
      clientId,
      clientSecret,
      userAccessType: 'TOAST_MACHINE_CLIENT',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.accessToken;
  } catch (error) {
    console.error('Error obtaining Toast API token:', error);
    throw new Error('Failed to obtain Toast API token');
  }
}

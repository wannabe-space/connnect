import { headers } from 'next/headers'
import { env } from '~/env'

export async function GET() {
  const headersStore = await headers()
  const accessToken = headersStore.get('Authorization')?.split(' ')[1]

  if (accessToken !== env.UPDATES_TOKEN) {
    return new Response('Unauthorized', { status: 401 })
  }

  return Response.json({
    version: '0.1.1',
    platforms: {
      'darwin-aarch64': {
        signature: 'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVSRnc3d0ZLSFJVaTRTNllFUzVCVHo3azFBVDZNLzdweGIwTnFxd2VRc3hUc0VaMWwxV2ltY3RLbFVnSFEwYkVVV1huMzZRcGlxVVI0SFZ5eUVhRDFNaFJqeUVBajJvZGdBPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzM2MDk1MTk5CWZpbGU6Q29ubm5lY3QuYXBwLnRhci5nego3MG5HMXhWSjFnVTlQZDIwOXJnM2VmbVM4NFdnam9JakF6S0dMN1Qra2dmNC9aSHBUUzJOcUp0Ynl4dlNUeDZaaldGaXZSRVF2c05JMzB4cy9SRHlCUT09Cg==',
        url: 'https://oywnxcvzfsqzhfwvavrd.supabase.co/storage/v1/object/public/releases/v1/0.1.0.tar.gz',
      },
    },
  })
}

export function parseConnectionString(connectionString: string) {
  const url = new URL(connectionString)

  const parsed = {
    protocol: url.protocol.slice(0, -1) || null,
    username: url.username,
    password: url.password || null,
    host: url.hostname,
    port: Number.parseInt(url.port),
    database: url.pathname.slice(1) || null,
    options: url.searchParams.toString() || null,
  }

  if (!parsed.protocol || !parsed.host || !parsed.port || !parsed.database) {
    throw new Error('Invalid connection string format')
  }

  return parsed
}

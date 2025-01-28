import { load } from '@tauri-apps/plugin-store'
import { env } from '~/env'
import { createEncryptor } from './secrets'

function loadStore() {
  return load('.kv.dat')
}

async function set<T>(key: string, value: T) {
  const encryptor = await createEncryptor(env.VITE_PUBLIC_KV_SECRET)
  const store = await loadStore()
  const encrypted = await encryptor.encrypt(JSON.stringify(value))

  await store.set(key, encrypted)
}

async function remove(key: string) {
  const store = await loadStore()

  await store.delete(key)
}

async function get<T>(key: string) {
  const store = await loadStore()
  const encrypted = await store.get<string>(key)

  if (!encrypted) {
    return null
  }

  const encryptor = await createEncryptor(env.VITE_PUBLIC_KV_SECRET)

  const decrypted = await encryptor.decrypt(encrypted)

  if (!decrypted) {
    return null
  }

  return JSON.parse(decrypted) as T
}

export const kv = {
  set,
  remove,
  get,
}

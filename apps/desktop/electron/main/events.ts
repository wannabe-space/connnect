import { createRequire } from 'node:module'
import { decrypt, encrypt } from '@connnect/shared/encryption'
import { DatabaseType } from '@connnect/shared/enums/database-type'
import { app, ipcMain } from 'electron'
import { pgQuery, pgTestConnection } from './pg'

const { autoUpdater } = createRequire(import.meta.url)('electron-updater') as typeof import('electron-updater')

const encryption = {
  encrypt: ({ text, secret }: { text: string, secret: string }) => {
    return encrypt({ text, secret: secret + import.meta.env.VITE_PUBLIC_ELECTRON_LOCAL_SECRET })
  },
  decrypt: ({ encryptedText, secret }: { encryptedText: string, secret: string }) => {
    return decrypt({ encryptedText, secret: secret + import.meta.env.VITE_PUBLIC_ELECTRON_LOCAL_SECRET })
  },
}

const databases = {
  test: async ({
    type,
    connectionString,
  }: {
    type: DatabaseType
    connectionString: string
  }) => {
    const queryMap = {
      [DatabaseType.Postgres]: pgTestConnection,
    }

    return queryMap[type]({ connectionString })
  },
  query: async <T>({
    type,
    connectionString,
    query,
    values,
  }: {
    type: DatabaseType
    connectionString: string
    query: string
    values?: string[]
  }) => {
    const queryMap = {
      [DatabaseType.Postgres]: pgQuery,
    }

    return queryMap[type]({ connectionString, query, values }) as Promise<T[]>
  },
}

const _app = {
  checkForUpdates: () => {
    return autoUpdater.checkForUpdates()
  },
  quitAndInstall: () => {
    autoUpdater.quitAndInstall()
  },
}

const versions = {
  app: () => app.getVersion(),
}

export const electron = {
  databases,
  encryption,
  app: _app,
  versions,
}

export function initElectronEvents() {
  for (const [key, events] of Object.entries(electron)) {
    for (const [key2, handler] of Object.entries(events)) {
      ipcMain.handle(`${key}.${key2}`, (event, arg) => handler(arg))
    }
  }
}

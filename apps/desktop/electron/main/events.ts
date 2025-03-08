import { createRequire } from 'node:module'
import { decrypt, encrypt } from '@connnect/shared/encryption'
import { ConnectionType } from '@connnect/shared/enums/connection-type'
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

const connections = {
  test: async ({
    type,
    connectionString,
  }: {
    type: ConnectionType
    connectionString: string
  }) => {
    const queryMap = {
      [ConnectionType.Postgres]: pgTestConnection,
    }

    return queryMap[type]({ connectionString })
  },
}

const databases = {
  query: async <T>({
    type,
    connectionString,
    query,
    values,
  }: {
    type: ConnectionType
    connectionString: string
    query: string
    values?: string[]
  }) => {
    const queryMap = {
      [ConnectionType.Postgres]: pgQuery,
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
  connections,
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

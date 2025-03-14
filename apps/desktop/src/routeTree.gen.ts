/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as publicAuthImport } from './routes/(public)/_auth'
import { Route as protectedDashboardImport } from './routes/(protected)/_dashboard'
import { Route as protectedDashboardIndexImport } from './routes/(protected)/_dashboard/index'
import { Route as publicAuthTwoFactorImport } from './routes/(public)/_auth/two-factor'
import { Route as publicAuthSignUpImport } from './routes/(public)/_auth/sign-up'
import { Route as publicAuthSignInImport } from './routes/(public)/_auth/sign-in'
import { Route as protectedDashboardCreateImport } from './routes/(protected)/_dashboard/create'
import { Route as publicAuthTwoFactorSetupImport } from './routes/(public)/_auth/two-factor.setup'
import { Route as protectedDashboardDatabaseIdImport } from './routes/(protected)/_dashboard/database/$id'
import { Route as protectedDashboardDatabaseIdSqlImport } from './routes/(protected)/_dashboard/database/$id/sql'
import { Route as protectedDashboardDatabaseIdTablesTableImport } from './routes/(protected)/_dashboard/database/$id/tables.$table'

// Create Virtual Routes

const publicImport = createFileRoute('/(public)')()
const protectedImport = createFileRoute('/(protected)')()

// Create/Update Routes

const publicRoute = publicImport.update({
  id: '/(public)',
  getParentRoute: () => rootRoute,
} as any)

const protectedRoute = protectedImport.update({
  id: '/(protected)',
  getParentRoute: () => rootRoute,
} as any)

const publicAuthRoute = publicAuthImport.update({
  id: '/_auth',
  getParentRoute: () => publicRoute,
} as any)

const protectedDashboardRoute = protectedDashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => protectedRoute,
} as any)

const protectedDashboardIndexRoute = protectedDashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => protectedDashboardRoute,
} as any)

const publicAuthTwoFactorRoute = publicAuthTwoFactorImport.update({
  id: '/two-factor',
  path: '/two-factor',
  getParentRoute: () => publicAuthRoute,
} as any)

const publicAuthSignUpRoute = publicAuthSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => publicAuthRoute,
} as any)

const publicAuthSignInRoute = publicAuthSignInImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => publicAuthRoute,
} as any)

const protectedDashboardCreateRoute = protectedDashboardCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => protectedDashboardRoute,
} as any)

const publicAuthTwoFactorSetupRoute = publicAuthTwoFactorSetupImport.update({
  id: '/setup',
  path: '/setup',
  getParentRoute: () => publicAuthTwoFactorRoute,
} as any)

const protectedDashboardDatabaseIdRoute =
  protectedDashboardDatabaseIdImport.update({
    id: '/database/$id',
    path: '/database/$id',
    getParentRoute: () => protectedDashboardRoute,
  } as any)

const protectedDashboardDatabaseIdSqlRoute =
  protectedDashboardDatabaseIdSqlImport.update({
    id: '/sql',
    path: '/sql',
    getParentRoute: () => protectedDashboardDatabaseIdRoute,
  } as any)

const protectedDashboardDatabaseIdTablesTableRoute =
  protectedDashboardDatabaseIdTablesTableImport.update({
    id: '/tables/$table',
    path: '/tables/$table',
    getParentRoute: () => protectedDashboardDatabaseIdRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(protected)': {
      id: '/(protected)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedImport
      parentRoute: typeof rootRoute
    }
    '/(protected)/_dashboard': {
      id: '/(protected)/_dashboard'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedDashboardImport
      parentRoute: typeof protectedRoute
    }
    '/(public)': {
      id: '/(public)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicImport
      parentRoute: typeof rootRoute
    }
    '/(public)/_auth': {
      id: '/(public)/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicAuthImport
      parentRoute: typeof publicRoute
    }
    '/(protected)/_dashboard/create': {
      id: '/(protected)/_dashboard/create'
      path: '/create'
      fullPath: '/create'
      preLoaderRoute: typeof protectedDashboardCreateImport
      parentRoute: typeof protectedDashboardImport
    }
    '/(public)/_auth/sign-in': {
      id: '/(public)/_auth/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof publicAuthSignInImport
      parentRoute: typeof publicAuthImport
    }
    '/(public)/_auth/sign-up': {
      id: '/(public)/_auth/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof publicAuthSignUpImport
      parentRoute: typeof publicAuthImport
    }
    '/(public)/_auth/two-factor': {
      id: '/(public)/_auth/two-factor'
      path: '/two-factor'
      fullPath: '/two-factor'
      preLoaderRoute: typeof publicAuthTwoFactorImport
      parentRoute: typeof publicAuthImport
    }
    '/(protected)/_dashboard/': {
      id: '/(protected)/_dashboard/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedDashboardIndexImport
      parentRoute: typeof protectedDashboardImport
    }
    '/(protected)/_dashboard/database/$id': {
      id: '/(protected)/_dashboard/database/$id'
      path: '/database/$id'
      fullPath: '/database/$id'
      preLoaderRoute: typeof protectedDashboardDatabaseIdImport
      parentRoute: typeof protectedDashboardImport
    }
    '/(public)/_auth/two-factor/setup': {
      id: '/(public)/_auth/two-factor/setup'
      path: '/setup'
      fullPath: '/two-factor/setup'
      preLoaderRoute: typeof publicAuthTwoFactorSetupImport
      parentRoute: typeof publicAuthTwoFactorImport
    }
    '/(protected)/_dashboard/database/$id/sql': {
      id: '/(protected)/_dashboard/database/$id/sql'
      path: '/sql'
      fullPath: '/database/$id/sql'
      preLoaderRoute: typeof protectedDashboardDatabaseIdSqlImport
      parentRoute: typeof protectedDashboardDatabaseIdImport
    }
    '/(protected)/_dashboard/database/$id/tables/$table': {
      id: '/(protected)/_dashboard/database/$id/tables/$table'
      path: '/tables/$table'
      fullPath: '/database/$id/tables/$table'
      preLoaderRoute: typeof protectedDashboardDatabaseIdTablesTableImport
      parentRoute: typeof protectedDashboardDatabaseIdImport
    }
  }
}

// Create and export the route tree

interface protectedDashboardDatabaseIdRouteChildren {
  protectedDashboardDatabaseIdSqlRoute: typeof protectedDashboardDatabaseIdSqlRoute
  protectedDashboardDatabaseIdTablesTableRoute: typeof protectedDashboardDatabaseIdTablesTableRoute
}

const protectedDashboardDatabaseIdRouteChildren: protectedDashboardDatabaseIdRouteChildren =
  {
    protectedDashboardDatabaseIdSqlRoute: protectedDashboardDatabaseIdSqlRoute,
    protectedDashboardDatabaseIdTablesTableRoute:
      protectedDashboardDatabaseIdTablesTableRoute,
  }

const protectedDashboardDatabaseIdRouteWithChildren =
  protectedDashboardDatabaseIdRoute._addFileChildren(
    protectedDashboardDatabaseIdRouteChildren,
  )

interface protectedDashboardRouteChildren {
  protectedDashboardCreateRoute: typeof protectedDashboardCreateRoute
  protectedDashboardIndexRoute: typeof protectedDashboardIndexRoute
  protectedDashboardDatabaseIdRoute: typeof protectedDashboardDatabaseIdRouteWithChildren
}

const protectedDashboardRouteChildren: protectedDashboardRouteChildren = {
  protectedDashboardCreateRoute: protectedDashboardCreateRoute,
  protectedDashboardIndexRoute: protectedDashboardIndexRoute,
  protectedDashboardDatabaseIdRoute:
    protectedDashboardDatabaseIdRouteWithChildren,
}

const protectedDashboardRouteWithChildren =
  protectedDashboardRoute._addFileChildren(protectedDashboardRouteChildren)

interface protectedRouteChildren {
  protectedDashboardRoute: typeof protectedDashboardRouteWithChildren
}

const protectedRouteChildren: protectedRouteChildren = {
  protectedDashboardRoute: protectedDashboardRouteWithChildren,
}

const protectedRouteWithChildren = protectedRoute._addFileChildren(
  protectedRouteChildren,
)

interface publicAuthTwoFactorRouteChildren {
  publicAuthTwoFactorSetupRoute: typeof publicAuthTwoFactorSetupRoute
}

const publicAuthTwoFactorRouteChildren: publicAuthTwoFactorRouteChildren = {
  publicAuthTwoFactorSetupRoute: publicAuthTwoFactorSetupRoute,
}

const publicAuthTwoFactorRouteWithChildren =
  publicAuthTwoFactorRoute._addFileChildren(publicAuthTwoFactorRouteChildren)

interface publicAuthRouteChildren {
  publicAuthSignInRoute: typeof publicAuthSignInRoute
  publicAuthSignUpRoute: typeof publicAuthSignUpRoute
  publicAuthTwoFactorRoute: typeof publicAuthTwoFactorRouteWithChildren
}

const publicAuthRouteChildren: publicAuthRouteChildren = {
  publicAuthSignInRoute: publicAuthSignInRoute,
  publicAuthSignUpRoute: publicAuthSignUpRoute,
  publicAuthTwoFactorRoute: publicAuthTwoFactorRouteWithChildren,
}

const publicAuthRouteWithChildren = publicAuthRoute._addFileChildren(
  publicAuthRouteChildren,
)

interface publicRouteChildren {
  publicAuthRoute: typeof publicAuthRouteWithChildren
}

const publicRouteChildren: publicRouteChildren = {
  publicAuthRoute: publicAuthRouteWithChildren,
}

const publicRouteWithChildren =
  publicRoute._addFileChildren(publicRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof protectedDashboardIndexRoute
  '/create': typeof protectedDashboardCreateRoute
  '/sign-in': typeof publicAuthSignInRoute
  '/sign-up': typeof publicAuthSignUpRoute
  '/two-factor': typeof publicAuthTwoFactorRouteWithChildren
  '/database/$id': typeof protectedDashboardDatabaseIdRouteWithChildren
  '/two-factor/setup': typeof publicAuthTwoFactorSetupRoute
  '/database/$id/sql': typeof protectedDashboardDatabaseIdSqlRoute
  '/database/$id/tables/$table': typeof protectedDashboardDatabaseIdTablesTableRoute
}

export interface FileRoutesByTo {
  '/': typeof protectedDashboardIndexRoute
  '/create': typeof protectedDashboardCreateRoute
  '/sign-in': typeof publicAuthSignInRoute
  '/sign-up': typeof publicAuthSignUpRoute
  '/two-factor': typeof publicAuthTwoFactorRouteWithChildren
  '/database/$id': typeof protectedDashboardDatabaseIdRouteWithChildren
  '/two-factor/setup': typeof publicAuthTwoFactorSetupRoute
  '/database/$id/sql': typeof protectedDashboardDatabaseIdSqlRoute
  '/database/$id/tables/$table': typeof protectedDashboardDatabaseIdTablesTableRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(protected)': typeof protectedRouteWithChildren
  '/(protected)/_dashboard': typeof protectedDashboardRouteWithChildren
  '/(public)': typeof publicRouteWithChildren
  '/(public)/_auth': typeof publicAuthRouteWithChildren
  '/(protected)/_dashboard/create': typeof protectedDashboardCreateRoute
  '/(public)/_auth/sign-in': typeof publicAuthSignInRoute
  '/(public)/_auth/sign-up': typeof publicAuthSignUpRoute
  '/(public)/_auth/two-factor': typeof publicAuthTwoFactorRouteWithChildren
  '/(protected)/_dashboard/': typeof protectedDashboardIndexRoute
  '/(protected)/_dashboard/database/$id': typeof protectedDashboardDatabaseIdRouteWithChildren
  '/(public)/_auth/two-factor/setup': typeof publicAuthTwoFactorSetupRoute
  '/(protected)/_dashboard/database/$id/sql': typeof protectedDashboardDatabaseIdSqlRoute
  '/(protected)/_dashboard/database/$id/tables/$table': typeof protectedDashboardDatabaseIdTablesTableRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/create'
    | '/sign-in'
    | '/sign-up'
    | '/two-factor'
    | '/database/$id'
    | '/two-factor/setup'
    | '/database/$id/sql'
    | '/database/$id/tables/$table'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/create'
    | '/sign-in'
    | '/sign-up'
    | '/two-factor'
    | '/database/$id'
    | '/two-factor/setup'
    | '/database/$id/sql'
    | '/database/$id/tables/$table'
  id:
    | '__root__'
    | '/(protected)'
    | '/(protected)/_dashboard'
    | '/(public)'
    | '/(public)/_auth'
    | '/(protected)/_dashboard/create'
    | '/(public)/_auth/sign-in'
    | '/(public)/_auth/sign-up'
    | '/(public)/_auth/two-factor'
    | '/(protected)/_dashboard/'
    | '/(protected)/_dashboard/database/$id'
    | '/(public)/_auth/two-factor/setup'
    | '/(protected)/_dashboard/database/$id/sql'
    | '/(protected)/_dashboard/database/$id/tables/$table'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  protectedRoute: typeof protectedRouteWithChildren
  publicRoute: typeof publicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  protectedRoute: protectedRouteWithChildren,
  publicRoute: publicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(protected)",
        "/(public)"
      ]
    },
    "/(protected)": {
      "filePath": "(protected)",
      "children": [
        "/(protected)/_dashboard"
      ]
    },
    "/(protected)/_dashboard": {
      "filePath": "(protected)/_dashboard.tsx",
      "parent": "/(protected)",
      "children": [
        "/(protected)/_dashboard/create",
        "/(protected)/_dashboard/",
        "/(protected)/_dashboard/database/$id"
      ]
    },
    "/(public)": {
      "filePath": "(public)",
      "children": [
        "/(public)/_auth"
      ]
    },
    "/(public)/_auth": {
      "filePath": "(public)/_auth.tsx",
      "parent": "/(public)",
      "children": [
        "/(public)/_auth/sign-in",
        "/(public)/_auth/sign-up",
        "/(public)/_auth/two-factor"
      ]
    },
    "/(protected)/_dashboard/create": {
      "filePath": "(protected)/_dashboard/create.tsx",
      "parent": "/(protected)/_dashboard"
    },
    "/(public)/_auth/sign-in": {
      "filePath": "(public)/_auth/sign-in.tsx",
      "parent": "/(public)/_auth"
    },
    "/(public)/_auth/sign-up": {
      "filePath": "(public)/_auth/sign-up.tsx",
      "parent": "/(public)/_auth"
    },
    "/(public)/_auth/two-factor": {
      "filePath": "(public)/_auth/two-factor.tsx",
      "parent": "/(public)/_auth",
      "children": [
        "/(public)/_auth/two-factor/setup"
      ]
    },
    "/(protected)/_dashboard/": {
      "filePath": "(protected)/_dashboard/index.tsx",
      "parent": "/(protected)/_dashboard"
    },
    "/(protected)/_dashboard/database/$id": {
      "filePath": "(protected)/_dashboard/database/$id.tsx",
      "parent": "/(protected)/_dashboard",
      "children": [
        "/(protected)/_dashboard/database/$id/sql",
        "/(protected)/_dashboard/database/$id/tables/$table"
      ]
    },
    "/(public)/_auth/two-factor/setup": {
      "filePath": "(public)/_auth/two-factor.setup.tsx",
      "parent": "/(public)/_auth/two-factor"
    },
    "/(protected)/_dashboard/database/$id/sql": {
      "filePath": "(protected)/_dashboard/database/$id/sql.tsx",
      "parent": "/(protected)/_dashboard/database/$id"
    },
    "/(protected)/_dashboard/database/$id/tables/$table": {
      "filePath": "(protected)/_dashboard/database/$id/tables.$table.tsx",
      "parent": "/(protected)/_dashboard/database/$id"
    }
  }
}
ROUTE_MANIFEST_END */

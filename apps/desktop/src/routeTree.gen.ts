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

// Create Virtual Routes

const publicImport = createFileRoute('/(public)')()
const protectedImport = createFileRoute('/(protected)')()

// Create/Update Routes

const publicRoute = publicImport.update({
  id: '/(public)',
  path: '/',
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
  }
}

// Create and export the route tree

interface protectedDashboardRouteChildren {
  protectedDashboardIndexRoute: typeof protectedDashboardIndexRoute
}

const protectedDashboardRouteChildren: protectedDashboardRouteChildren = {
  protectedDashboardIndexRoute: protectedDashboardIndexRoute,
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

interface publicAuthRouteChildren {
  publicAuthSignUpRoute: typeof publicAuthSignUpRoute
  publicAuthTwoFactorRoute: typeof publicAuthTwoFactorRoute
}

const publicAuthRouteChildren: publicAuthRouteChildren = {
  publicAuthSignUpRoute: publicAuthSignUpRoute,
  publicAuthTwoFactorRoute: publicAuthTwoFactorRoute,
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
  '/sign-up': typeof publicAuthSignUpRoute
  '/two-factor': typeof publicAuthTwoFactorRoute
}

export interface FileRoutesByTo {
  '/': typeof protectedDashboardIndexRoute
  '/sign-up': typeof publicAuthSignUpRoute
  '/two-factor': typeof publicAuthTwoFactorRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(protected)': typeof protectedRouteWithChildren
  '/(protected)/_dashboard': typeof protectedDashboardRouteWithChildren
  '/(public)': typeof publicRouteWithChildren
  '/(public)/_auth': typeof publicAuthRouteWithChildren
  '/(public)/_auth/sign-up': typeof publicAuthSignUpRoute
  '/(public)/_auth/two-factor': typeof publicAuthTwoFactorRoute
  '/(protected)/_dashboard/': typeof protectedDashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/sign-up' | '/two-factor'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/sign-up' | '/two-factor'
  id:
    | '__root__'
    | '/(protected)'
    | '/(protected)/_dashboard'
    | '/(public)'
    | '/(public)/_auth'
    | '/(public)/_auth/sign-up'
    | '/(public)/_auth/two-factor'
    | '/(protected)/_dashboard/'
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
        "/(protected)/_dashboard/"
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
        "/(public)/_auth/sign-up",
        "/(public)/_auth/two-factor"
      ]
    },
    "/(public)/_auth/sign-up": {
      "filePath": "(public)/_auth/sign-up.tsx",
      "parent": "/(public)/_auth"
    },
    "/(public)/_auth/two-factor": {
      "filePath": "(public)/_auth/two-factor.tsx",
      "parent": "/(public)/_auth"
    },
    "/(protected)/_dashboard/": {
      "filePath": "(protected)/_dashboard/index.tsx",
      "parent": "/(protected)/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */

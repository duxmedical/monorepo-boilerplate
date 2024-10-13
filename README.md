# Monorepo Boilerplate

## Get Started

**Must have Node installed to setup locally**

```sh
pnpm i
```

## Development

```sh
pnpm dev
```

## Build

```sh
pnpm build
```

### Running native apps

```
- pnpm android
- pnpm ios
- pnpm web
```

### Folder Structure

This monorepo consists of the two workspaces `apps` & `packages`

```bash
universal-app-starter
└── apps
    ├── native
    └── web
└── packages
    ├── ui
    └── app
```

### Apps and Packages

- `apps/native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `apps/web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `packages/ui`: a shared package that contains shared UI components between `web` and `native` applications
- `packages/app`: a shared package that contains shared logic between `web` and `native` applications

### Technologies

- [Expo](https://docs.expo.dev/) for native development
- [Next.js](https://nextjs.org/) for web development
- [React Native](https://reactnative.dev/) for native development
- [React Native Web](https://necolas.github.io/react-native-web/) for web development
- [NativeWind](https://www.nativewind.dev/) styling solution for native
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
- [Turborepo](https://turborepo.dev/) build system for managing monorepo

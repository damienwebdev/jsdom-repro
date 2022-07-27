# JSDOM runScripts vm.createContext Memory Leak

## Problem

JSDom, when run with `{ runScripts: 'dangerously' } or { runScripts: 'outside-only' }` exhibits a severe memory leak.

## Replication

```bash
git clone https://github.com/damienwebdev/jsdom-repro.git
npm ci
node main.js
ab -c 1 -n 1000 http://localhost:4000
```

## Helpful Debugging Flags for Node

```bash
node --inspect main.js
node --trace-gc main.js
node --expose-gc main.js
```

## Other Examples that may be helpful in distillation of the underlying issue.

As a debugging attempt to try and understand why memory isn't being recovered, I've added a few other examples:

- [server/other-examples/main-vm-context.js](./server/other-examples/main-vm-context.js)
---
title: "What Shared Worker is?"
description: "Keynote Introduction"
---

**MDN Says:**

The `SharedWorker` interface represents a specific kind of worker that can be accessed from several browsing contexts,
such as:<p>

- several windows
- several tabs
- iframes
- workers

They implement an interface different than dedicated workers and have a different global scope, [SharedWorkerGlobalScope.](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)

> Note: If `SharedWorker` can be accessed from several browsing contexts,
> all those browsing contexts must share the exact same origin (same protocol, host and port)

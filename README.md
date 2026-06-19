# System76 Technical Documentation

This repository contains the Technical documentation about System76 products. It
can be viewed at https://system76.com/tech-docs/.

## Editing

There are two methods to view and edit the book. There is a quick method that
does not include additional UI elements such as search, and the complete way
that will render the book as it is rendered on the official website.

### GitHub (Quick)

The book can be viewed and edited on GitHub by going to
[src/content/docs/index.md](src/content/docs/index.md).

### Astro (Complete)

- Install one of the following packages via apt
    - docker.io
    - podman-docker
- Install [Dev Container CLI](https://github.com/devcontainers/cli#try-it-out)
- Clone the repository using `git`.
- From the cloned repository run
    - `devcontainer up`
    - `devcontainer exec pnpm install`
    - `devcontainer exec pnpm dev`
- You may now view the book at `http://localhost:4321/tech-docs`
- Edits are made in the `src/content/docs` directory. The server will automatically update

#### Cleanup

- When finished editing, run `docker ps` to get the container's ID or name
- To stop the container (for quicker setup next time), run `docker stop <container>`
- To stop and remove the container (to start fresh next time), `docker rm -f <container>`
    - Remove generated files outside of the container: `rm -r .astro .pnpm-store`

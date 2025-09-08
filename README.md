pnpm init

pnpm add -D typescript ts-node @types/node

npx tsc --init


pnpm prune
pnpm install
pnpm run build

node dist/index.js

npx @modelcontextprotocol/inspector  http://localhost:5001/mcp
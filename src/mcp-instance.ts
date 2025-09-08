import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

// Create an MCP server
export const server = new McpServer({
  name: 'MCPDemo',
  version: '0.0.0',
});

// Add a tool to the server that adds two numbers
server.tool('add', { a: z.number(), b: z.number() }, async ({ a, b }) => ({
  content: [{ type: 'text', text: String(a + b) }],
}));
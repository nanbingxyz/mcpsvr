<img src="./public/logo.png" width="68" alt="mcpsvr logo"/>

# Discover Exceptional MCP Servers

[Chinese Version](./README_cn.md)

MCPSvr is an innovative spin-off project from  [5ire](http://github.com/nanbingxyz/5ire) designed to host a community-driven directory of MCP servers. This platform empowers developers to discover exceptional tools while offering a streamlined process for sharing their own MCP server creations.

**🚀 The servers here enable MCP clients like 5ire to install and run directly.**

![5ire tools market](https://github.com/user-attachments/assets/c034bef6-5ecd-4cc1-b0ea-e5226ae1a4b4)


## Contribution Guidelines

All registered MCP servers are maintained in the centralized repository located at `/public/servers.json`. Developers can submit new server configurations through GitHub pull requests (PRs).

### Configuration Schema
```json
{
  "name": "Server Identifier",
  "key": "Unique alphanumeric identifier",
  "description": "Concise implementation overview",
  "command": "Execution environment specifier (e.g., uvx, npx, python, node)",
  "args": [
    "Required runtime arguments"
  ],
  "env": {
    "ENVIRONMENT_VARIABLE": "Value assignment"
  },
  "homepage": "Official documentation URL"
}
```

### Best Practices

1. **Field Organization**: Maintain alphabetical ordering for configuration keys
2. **Identifier Requirements**:
   - Must be a unique alphanumeric string starting with a letter
   - Strictly prohibits numeric prefixes
3. **Metadata Handling**:
   - Optional `name` field defaults to `key` display value
   - Environment variables and homepage URLs are supplementary fields

### User-Defined Parameters

For interactive parameter requirements, adhere to the standardized format:
```
{{paramName@paramType::paramDescription}}
```
This convention enables parameter extraction and presentation in client applications.

**Example Implementation**:
```json
{
  "name": "File System Access Control",
  "key": "FileSystem",
  "command": "npx",
  "description": "Enforces directory-level operation restrictions through specified arguments",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "{{dirs@list::directories you about to access. Include trailing slash}}"
  ],
  "homepage": "https://github.com/modelcontextprotocol/servers"
}
```
**Parameter Extraction**:
```json
{
  "name": "dirs",
  "type": "list",
  "description": "Directories you about to access. Include trailing slash"
}
```

**Field Constraints**:
- `paramName` must be unique within the server configuration
- Supported data types include string,list and number,make sure to use the right type!
- Descriptive text remains optional

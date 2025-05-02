import type {Metadata} from 'next'
import '@fontsource-variable/bricolage-grotesque'
import './globals.css'

export const metadata: Metadata = {
    title: 'MCPServer -Discover Exceptional MCP Servers',
    keywords: 'Open Source, LLM, MCP Servers, Model Context Protocol, MCP',
    description:
        'MCPSvr is a hub for users to discover top MCP servers, unlocking advanced AI capabilities and accelerating innovation.',
    openGraph: {
        title: 'MCPServer - Discover Exceptional MCP Servers',
        description:
            'MCPSvr is a hub for users to discover top MCP servers, unlocking advanced AI capabilities and accelerating innovation.',
        url: `https://github.com/nanbingxyz/mcpsvr`,
        siteName: 'MCPSvr',
        images: [
            {
                url: 'https://github.com/nanbingxyz/mcpsvr/open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'mcpsvr.com',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MCPServer -Discover Exceptional MCP Servers',
        description:
            'MCPSvr is a hub for users to discover top MCP servers, unlocking advanced AI capabilities and accelerating innovation.',
        creator: '@1ronben',
        images: [
            {
                url: 'https://github.com/nanbingxyz/mcpsvr/open-graph.jpg',
                width: 1200,
                height: 630,
                alt: 'mcpsvr.com',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="h-full">
            <body className="antialiased flex justify-center h-full">{children}</body>
        </html>
    )
}

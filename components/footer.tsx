export default function Footer() {
    return (
        <footer className="flex w-full flex-col border-t mt-6">
            <div className="mx-auto w-full lg:py-6 lg:flex lg:items-center lg:justify-between max-w-6xl gap-2">
            <div className="flex flex-col items-center justify-center gap-2 flex-shrink-0 lg:border-r lg:pr-4 lg:mr-4">
                <div className="mt-4 lg:mt-0 mx-auto lg:mx-0">
                    <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
                        <div className="flex items-center">
                            <img src="/logo.png" alt="mcpsvr logo" width="28" className="-mt-1"/>
                            <span className="text-small font-medium ml-2">
                                MCPSvr
                            </span>
                        </div>
                        <div className="border-r h-3">&nbsp;</div>
                        <span className="border-none px-0 text-default-500">
                            <span className="tint-color">●</span>&nbsp;
                            <a href="https://5ire.app" target="_blank" className="font-normal">Go with the 5ire MCP Client.</a>
                        </span>
                    </div>
                    <p className="text-center text-tiny text-gray-400 lg:text-end">
                        &copy; 2025 MCPSvr . All rights reserved.
                    </p>
                </div>
                </div>
                <div className="text-sm text-gray-400 px-4 lg:px-0 lg:my-0 my-2">
                    MCPSvr is an  <a href="https://github.com/nanbingxyz/mcpsvr" className="underline">project </a> designed to host a community-driven directory of MCP servers. This platform empowers developers to discover exceptional tools while offering a streamlined process for sharing their own MCP server creations.
                </div>
            </div>
            
        </footer>
    )
}

'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {github} from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function ServerDialog({
    server,
    open,
    setOpen,
}: {
    server: any
    open: boolean
    setOpen: (open: boolean) => void
}) {
    return (
        <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
            <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
                <DialogHeader className="contents space-y-0 text-left">
                    <DialogTitle className="border-b border-border px-6 py-4 text-base">
                        {server.name || server.key}
                    </DialogTitle>
                    <div className="overflow-y-auto">
                        <DialogDescription asChild>
                            <SyntaxHighlighter language="json" style={github}>
                                {JSON.stringify(server, null, 2)}
                            </SyntaxHighlighter>
                        </DialogDescription>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

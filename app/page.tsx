'use client'
import HeroText from '@/components/hero-text'
import SearchInput from '@/components/search-input'
import allServers from '@/public/servers.json'
import {useState, useMemo} from 'react'

export default function Home() {
    const [filter, setFilter] = useState<string[]>([])

    const onSearch = (words: string[]) => {
        setFilter(words)
    }
    const highlightText = (text: string) => {
        let result = text
        filter.forEach((word) => {
            const regex = new RegExp(word, 'gi')
            result = result.replace(
                regex,
                (match) => `<span class="highlight">${match}</span>`
            )
        })
        return result
    }
    const servers = useMemo(() => {
        let filteredServers = allServers
        if (filter.length > 0) {
            filteredServers = allServers.filter((s: any) => {
                return filter.some((f) => {
                    return (
                        (s.name || s.key)
                            .toLowerCase()
                            .includes(f.toLowerCase()) ||
                        (s.description || '')
                            .toLowerCase()
                            .includes(f.toLowerCase())
                    )
                })
            })
        }
        return filteredServers.sort((a, b) => {
            const nameA = a.name || a.key
            const nameB = b.name || b.key
            return nameA.localeCompare(nameB)
        })
    }, [filter])

    return (
        <div className="p-5 mx-auto ">
            <header className="mb-10">
                <div className="flex justify-between items-center">
                    <div className='mr-3'>
                        <img src="/logo.png" width="48" alt="mcpsvr logo" />
                    </div>
                    <div className="flex gap-2">
                        <SearchInput onSearch={onSearch} />
                        <a
                            href="https://github.com/nanbingxyz/mcp-server-market"
                            target="_blank"
                            className="bg-stone-800 px-4 py-2 rounded-md text-gray-50"
                        >
                            Submit
                        </a>
                    </div>
                </div>
                <div className="text-2xl font-bold">
                    <div className="w-[768px] hidden md:block">
                        <HeroText />
                    </div>
                    <div className="block md:hidden mt-6">
                        <p className="text-4xl font-bold">
                            Discover Exceptional MCP Servers
                        </p>
                    </div>
                </div>
            </header>
            <main className="flex flex-col gap-2 max-w-2xl">
                {servers.map((s) => (
                    <div
                        key={s.key}
                        className="hover:bg-stone-100 p-2 rounded-lg"
                    >
                        <div className="text-xl font-bold">
                            <span className="tint-color">●</span>&nbsp;
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: highlightText(s.name || s.key),
                                }}
                            />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: highlightText(s.description || ''),
                            }}
                        />
                        {s.homepage && (
                            <div>
                                <a
                                    href={s.homepage}
                                    target="_blank"
                                    className="text-sm text-gray-400 hover:text-gray-600"
                                >
                                    {s.homepage}
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    )
}

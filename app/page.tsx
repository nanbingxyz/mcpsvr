"use client";
import Footer from "@/components/footer";
import HeroText from "@/components/hero-text";
import SearchInput from "@/components/search-input";
import allServers from "@/public/servers.json";
import { useState, useMemo } from "react";

export default function Home() {
  const [filter, setFilter] = useState<string[]>([]);

  const onSearch = (words: string[]) => {
    setFilter(words);
  };
  const highlightText = (text: string) => {
    let result = text;
    filter.forEach((word) => {
      const regex = new RegExp(word, "gi");
      result = result.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`,
      );
    });
    return result;
  };
  const servers = useMemo(() => {
    let filteredServers = allServers;
    if (filter.length > 0) {
      filteredServers = allServers.filter((s: any) => {
        return filter.every((f) => {
          return (
            (s.name || s.key).toLowerCase().includes(f.toLowerCase()) ||
            (s.description || "").toLowerCase().includes(f.toLowerCase())
          );
        });
      });
    }
    return filteredServers.sort((a, b) => {
      const nameA = a.name || a.key;
      const nameB = b.name || b.key;
      return nameA.localeCompare(nameB);
    });
  }, [filter]);

  return (
    <div className="mx-auto w-full h-full flex flex-col">
      <header className="mb-10">
        <div className="border-b py-2 sm:px-0 px-2">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="mr-3">
            <img src="/logo.png" width="48" alt="mcpsvr logo" />
          </div>
          <div className="flex gap-2">
            <SearchInput onSearch={onSearch} />
            <a
              href="https://github.com/nanbingxyz/mcpsvr"
              target="_blank"
              className="bg-stone-800 px-4 py-2 rounded-md text-gray-50"
            >
              Submit
            </a>
          </div>
        </div>
        </div>
        <div className="text-2xl font-bold">
          <div className="hidden md:block mt-8">
            <HeroText />
          </div>
          <div className="block md:hidden mt-6">
            <p className="text-4xl font-bold px-4">
              Discover Exceptional MCP Servers
            </p>
          </div>
        </div>
      </header>
      <main className="w-full px-4 flex-grow">
          <div className="servers grid justify-items-start gap-4">
            {servers.map((s) => (
              <div
                key={s.key}
                className="hover:bg-stone-100 p-4 rounded-lg sm:w-72 w-full h-48 bg-stone-50 text-left flex flex-col"
              >
                <div className="text-xl font-medium mb-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightText(s.name || s.key),
                    }}
                  />
                </div>
                <div
                  className="text-sm overflow-hidden h-[150px]"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(s.description|| ""),
                  }}
                />
                {s.homepage && (
                  <div>
                    <a
                      href={s.homepage}
                      target="_blank"
                      className="text-sm text-gray-400 hover:text-gray-600"
                    >
                      {new URL(s.homepage).hostname}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
      </main>
      <Footer />
    </div>
  );
}

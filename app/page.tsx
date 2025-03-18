"use client";
import Footer from "@/components/footer";
import HeroText from "@/components/hero-text";
import { RetroGrid } from "@/components/ui/retro-grid";
import SearchInput from "@/components/search-input";
import allServers from "@/public/servers.json";
import { useState, useMemo, useCallback } from "react";
import ServerDialog from "@/components/server-dialog";
import { cn } from "@/lib/utils";

const cmdBgColor = (cmd: string) => {
  switch (cmd) {
    case "npx":
      return "bg-blue-100";
    case "uvx":
      return "bg-red-100";
    case "node":
      return "bg-green-100";
    case "python":
      return "bg-purple-100";
    default:
      return "bg-gray-100";
  }
};

export default function Home() {
  const [filter, setFilter] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [server, setServer] = useState(null);
  const onSearch = useCallback((words: string[]) => {
    setFilter(words);
  }, []);

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
      <header className="mb-4 w-full sm:px-2">
        <div className="border-b py-2 sm:px-0 px-2">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="mr-3 flex-shrink-0">
              <img src="/logo.png" width="48" alt="mcpsvr logo" />
            </div>
            <div className="flex gap-2">
              <SearchInput onSearch={onSearch} />
              <a
                href="https://github.com/nanbingxyz/mcpsvr"
                target="_blank"
                className="bg-stone-800 px-2 sm:px-4 py-2 rounded-md text-gray-50 flex justify-start gap-1"
              >
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#FFFFFF"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="hidden sm:inline">Submit</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header text-2xl font-bold pt-4 h-64 mx-auto relative">
          <div className="hidden md:block">
            <div className="absolute flex justify-center w-full">
              <div className="max-auto top-0">
                <HeroText />
              </div>
            </div>
            <RetroGrid />
          </div>
          <div className="block md:hidden">
            <p className="text-4xl font-bold px-4 pt-12">
              Discover Exceptional MCP Servers
            </p>
          </div>
        </div>
      </header>
      <main className="w-full px-4 flex-grow sm:mt-0 -mt-4">
        <div className="servers grid justify-items-start gap-4">
          {servers.map((s) => (
            <div
              key={s.key}
              className="hover:bg-stone-100 p-4 rounded-lg sm:max-w-72 w-full bg-stone-50 text-left flex flex-col"
            >
              <div
                className="cursor-pointer"
                onClick={() => {
                  setServer(s as any);
                  setOpen(true);
                }}
              >
                <div className="text-xl font-medium mb-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightText(s.name || s.key),
                    }}
                  />
                </div>
                <div
                  className="text-sm overflow-hidden h-[85px]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.2",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(s.description || ""),
                  }}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div
                  className={cn(
                    "text-sm px-2 rounded-md",
                    cmdBgColor(s.command),
                  )}
                >
                  {s.command}
                </div>
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
            </div>
          ))}
        </div>
      </main>
      <Footer />
      {server && <ServerDialog server={server} open={open} setOpen={setOpen} />}
    </div>
  );
}

'use client'
import {SearchIcon, XIcon} from 'lucide-react'
import {FormEvent, useCallback, useEffect, useState} from 'react'

import {FieldGroup} from '@/components/ui/field'
import {
    SearchField,
    SearchFieldClear,
    SearchFieldInput,
} from '@/components/ui/searchfield'

export default function SearchInput(options: {
    onSearch: (words: string[]) => void
}) {
    const [searchTerm, setSearchTerm] = useState('')

    const clearSearch = () => {
        setSearchTerm('')
        debouncedSearch.cancel()
        options.onSearch([])
    }

    const onInput = (evt: FormEvent<HTMLInputElement>) => {
        const value = (evt.target as HTMLInputElement).value
        if (value) setSearchTerm(value)
        else clearSearch()
    }

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            const words = value.split(/\s+/g).filter(Boolean)
            options.onSearch(words)
        }, 300),
        [options.onSearch]
    )

    useEffect(() => {
        if (searchTerm) {
            debouncedSearch(searchTerm)
        }
        return () => debouncedSearch.cancel()
    }, [searchTerm, debouncedSearch])

    return (
        <SearchField className="max-w-[400px] min-w-20">
            <FieldGroup>
                <SearchIcon
                    aria-hidden
                    className="size-4 text-muted-foreground"
                />
                <SearchFieldInput placeholder="Search..." onChange={onInput} />
                <SearchFieldClear onPress={clearSearch}>
                    <XIcon aria-hidden className="size-4" />
                </SearchFieldClear>
            </FieldGroup>
        </SearchField>
    )
}

function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
    let timeout: NodeJS.Timeout
    const debouncedFunc = (...args: Parameters<T>) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
    debouncedFunc.cancel = () => clearTimeout(timeout)
    return debouncedFunc
}

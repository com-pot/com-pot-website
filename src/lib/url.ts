import { get, derived } from "svelte/store"
import { page } from "$app/stores"
import { goto } from "$app/navigation"

export function useUrl() {
    const pageUrl = derived([page], ([page]) => page.url)
    return {
        ...pageUrl,

        withQuery(params: Record<string, string | number | null>) {
            const url = new URL(get(page).url)

            for (let [name, value] of Object.entries(params)) {
                if (value === null) {
                    url.searchParams.delete(name)
                    break
                }
                url.searchParams.set(name, value.toString())
            }

            return url.toString()
        },

        replace(url: string) {
            return goto(url, { replaceState: true, noScroll: true })
        },
    }
}

export function indexExpanded(items: { name: string }[], url: URL) {
    const names = (url.searchParams.get("expand") || "")
        .split(",")
        .map((step) => step.trim())
    const entries = items.map((item) => [item.name, names.includes(item.name)])
    return Object.fromEntries(entries)
}

import { MessageType } from './utils'

chrome.tabs.onUpdated.addListener((tabId, { status }, { url }) => {
    if (status !== 'complete') return

    const currentUrl = url ?? ''
    clearMediumCookies({ tabId, url: currentUrl })
})

chrome.tabs.onHighlighted.addListener(({ tabIds }) => {
    tabIds.forEach((tabId) => {
        chrome.tabs.get(tabId, ({ url }) => {
            const currentUrl = url ?? ''
            clearMediumCookies({ tabId, url: currentUrl })
        })
    })
})

function clearMediumCookies({ tabId, url }: { tabId: number; url: string }) {
    chrome.tabs.sendMessage(
        tabId,
        { question: 'medium 블로그인가요?' },
        (response?: MessageType) => {
            const answer = response?.answer
            if (answer === 'medium 블로그가 아닙니다.') return
            clearCookies(url)
        }
    )
}

function clearCookies(url: string) {
    chrome.cookies.getAll({ url }, (cookies) => {
        cookies.forEach(async ({ name }) => {
            await chrome.cookies.remove({ url, name })
        })
    })
}

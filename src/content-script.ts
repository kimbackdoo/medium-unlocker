import { MessageType, isMediumUrl } from './utils'

chrome.runtime.onMessage.addListener(({ question }: MessageType, _, sendResponse) => {
    const isValidQuestion = question === 'medium 블로그인가요?'
    if (!isValidQuestion) return sendResponse({ answer: '유효하지 않은 Question 입니다.' })

    const { href } = window.location
    if (isMediumUrl(href)) return sendResponse({ answer: 'medium 블로그입니다.' })

    const scripts = document.querySelectorAll('script')
    const mediumScripts = [...scripts].filter(({ src }) => isMediumUrl(src))
    const isMedium = !!mediumScripts.length
    if (isMedium) return sendResponse({ answer: 'medium 블로그입니다.' })

    sendResponse({ answer: 'medium 블로그가 아닙니다.' })
})

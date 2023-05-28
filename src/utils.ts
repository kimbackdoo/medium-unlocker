export type MessageType = {
    question?: 'medium 블로그인가요?'
    answer?: 'medium 블로그입니다.' | 'medium 블로그가 아닙니다.'
}

const MEDIUM_URL_REGEX = /https:\/\/.*\.?medium\.com.*/

export function isMediumUrl(url: string) {
    return MEDIUM_URL_REGEX.test(url)
}

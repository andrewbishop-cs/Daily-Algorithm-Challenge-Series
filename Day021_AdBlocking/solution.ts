/*
You've been tasked with implementing an advanced ad-blocker for a new web browser your
company is developing. The ad-blocker blocks specific URLs and patterns from being loaded
on the browser.

The list of blocked URLs is dynamic and can be updated at any time. The blocked URLs can
contain wildcards (*) and should support subdomain matching. To save processing power, the
browser must efficiently determine if a given URL should be blocked.

Blocking rules:
1. Exact match: "example.com" blocks "example.com"
2. Wildcard match: "*.example.com" blocks "ads.example.com", "tracking.example.com", etc.
3. Subdomain matching: "ads.example.com" should also block "ads.example.com/path" and "ads.example.com:8080"
4. Protocol matching: "https://example.com" only blocks HTTPS, "example.com" blocks both HTTP and HTTPS

Implement a feature to efficiently determine if the browser should block a given URL based
on the current list of blocked URLs and patterns.
*/

function hasURLBeenBlocked(blockedUrls: string[], url: string): boolean {

    const urlInfo = parseURL(url)
    
    for (const blockedPattern of blockedUrls) {
        if (matchesPattern(blockedPattern, urlInfo)) {
            return true
        }
    }
    
    return false
}

interface URLInfo {
    protocol: string
    domain: string
    path: string
    port: string
}

function parseURL(url: string): URLInfo {

    let protocol = ''
    let domain = url
    let path = ''
    let port = ''
    
    if (url.includes('://')) {
        const [prot, rest] = url.split('://')
        protocol = prot
        domain = rest
    }
    
    if (domain.includes('/')) {
        const [dom, p] = domain.split('/', 2)
        domain = dom
        path = '/' + p
    }
    
    if (domain.includes(':')) {
        const [dom, p] = domain.split(':')
        domain = dom
        port = ':' + p
    }
    
    return { protocol, domain, path, port }
}

function matchesPattern(pattern: string, urlInfo: URLInfo): boolean {

    const patternInfo = parseURL(pattern)
    
    if (patternInfo.protocol && patternInfo.protocol !== urlInfo.protocol) {
        return false
    }
    
    return matchesDomainPattern(patternInfo.domain, urlInfo.domain)
}

function matchesDomainPattern(pattern: string, domain: string): boolean {

    if (pattern === domain) {
        return true
    }
    
    if (pattern.startsWith('*.')) {
        const suffix = pattern.substring(2)
        return domain.endsWith('.' + suffix) || domain === suffix
    }
    
    if (pattern.includes('.')) {
        return domain === pattern || domain.endsWith('.' + pattern)
    }
    
    return false
}

export default hasURLBeenBlocked

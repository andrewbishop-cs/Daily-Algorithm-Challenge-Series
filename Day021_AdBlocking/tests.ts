import hasURLBeenBlocked from './solution';

const testCases: {blockedUrls: string[], url: string, expected: boolean, description: string}[] = [
	// Basic functionality
	{blockedUrls: ['bad.com'], url: 'good.com', expected: false, description: 'URL not in blocked list'},
	{blockedUrls: ['bad.com'], url: 'bad.com', expected: true, description: 'Exact domain match'},
	{blockedUrls: ['bad.com', 'okay.com'], url: 'okay.com', expected: true, description: 'URL in multi-item blocked list'},
	{blockedUrls: [], url: 'anything.com', expected: false, description: 'Empty blocked list'},
	
	// Protocol matching
	{blockedUrls: ['https://example.com'], url: 'https://example.com', expected: true, description: 'HTTPS protocol match'},
	{blockedUrls: ['https://example.com'], url: 'http://example.com', expected: false, description: 'HTTPS pattern blocks only HTTPS'},
	{blockedUrls: ['example.com'], url: 'https://example.com', expected: true, description: 'No protocol pattern blocks both HTTP and HTTPS'},
	{blockedUrls: ['example.com'], url: 'http://example.com', expected: true, description: 'No protocol pattern blocks both HTTP and HTTPS'},
	
	// Wildcard patterns
	{blockedUrls: ['*.example.com'], url: 'ads.example.com', expected: true, description: 'Wildcard matches subdomain'},
	{blockedUrls: ['*.example.com'], url: 'tracking.example.com', expected: true, description: 'Wildcard matches another subdomain'},
	{blockedUrls: ['*.example.com'], url: 'example.com', expected: true, description: 'Wildcard matches root domain'},
	{blockedUrls: ['*.example.com'], url: 'other.com', expected: false, description: 'Wildcard does not match different domain'},
	{blockedUrls: ['*.example.com'], url: 'ads.example.org', expected: false, description: 'Wildcard does not match different TLD'},
	
	// Subdomain matching
	{blockedUrls: ['ads.example.com'], url: 'ads.example.com', expected: true, description: 'Exact subdomain match'},
	{blockedUrls: ['ads.example.com'], url: 'ads.example.com/path', expected: true, description: 'Subdomain with path'},
	{blockedUrls: ['ads.example.com'], url: 'ads.example.com:8080', expected: true, description: 'Subdomain with port'},
	{blockedUrls: ['ads.example.com'], url: 'https://ads.example.com', expected: true, description: 'Subdomain with protocol'},
	{blockedUrls: ['ads.example.com'], url: 'tracking.example.com', expected: false, description: 'Different subdomain'},
	
	// Complex patterns
	{blockedUrls: ['https://*.ads.example.com'], url: 'https://tracking.ads.example.com', expected: true, description: 'Protocol with wildcard subdomain'},
	{blockedUrls: ['https://*.ads.example.com'], url: 'http://tracking.ads.example.com', expected: false, description: 'Protocol mismatch with wildcard'},
	{blockedUrls: ['*.ads.*.com'], url: 'tracking.ads.example.com', expected: false, description: 'Multiple wildcards not supported'},
	
	// Edge cases
	{blockedUrls: [''], url: '', expected: true, description: 'Empty string in blocked list'},
	{blockedUrls: [''], url: 'example.com', expected: false, description: 'Empty string blocked, normal URL'},
	{blockedUrls: ['*'], url: 'example.com', expected: false, description: 'Single wildcard not supported'},
	{blockedUrls: ['example.com'], url: 'EXAMPLE.COM', expected: false, description: 'Case sensitive matching'},
	
	// Path and port handling
	{blockedUrls: ['example.com'], url: 'example.com/path/to/page', expected: true, description: 'Domain blocks URL with path'},
	{blockedUrls: ['example.com'], url: 'example.com:8080', expected: true, description: 'Domain blocks URL with port'},

	// Multiple patterns
	{blockedUrls: ['*.ads.com', 'tracking.example.com'], url: 'banner.ads.com', expected: true, description: 'Matches first wildcard pattern'},
	{blockedUrls: ['*.ads.com', 'tracking.example.com'], url: 'tracking.example.com', expected: true, description: 'Matches second exact pattern'},
	{blockedUrls: ['*.ads.com', 'tracking.example.com'], url: 'other.com', expected: false, description: 'Matches neither pattern'},
];

console.log('🧪 Testing Advanced Ad Blocker Implementation\n');

for (const testCase of testCases) {
	const result = hasURLBeenBlocked(testCase.blockedUrls, testCase.url);
	const passOrFail = result === testCase.expected ? '✅' : '❌';
	console.log(`${passOrFail} ${testCase.description}`);
	console.log(`   Blocked patterns: [${testCase.blockedUrls.join(', ')}]`);
	console.log(`   URL to check: "${testCase.url}"`);
	console.log(`   Expected: ${testCase.expected}, Got: ${result}`);
	console.log('');
}

// Performance test
console.log('🚀 Performance Test:');
const largeBlockedList = [
	...Array.from({length: 5000}, (_, i) => `blocked${i}.com`),
	...Array.from({length: 5000}, (_, i) => `*.subdomain${i}.com`)
];
const startTime = performance.now();
hasURLBeenBlocked(largeBlockedList, 'blocked2500.com');
const endTime = performance.now();
console.log(`   Large list (10,000 patterns) lookup time: ${(endTime - startTime).toFixed(3)}ms`);

// Wildcard performance test
const wildcardStartTime = performance.now();
hasURLBeenBlocked(largeBlockedList, 'tracking.subdomain1000.com');
const wildcardEndTime = performance.now();
console.log(`   Wildcard pattern lookup time: ${(wildcardEndTime - wildcardStartTime).toFixed(3)}ms`);

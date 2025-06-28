class TrieNode {
    children: Map<string, TrieNode>
    isEndOfWord: boolean

    constructor() {
        this.children = new Map()
        this.isEndOfWord = false
    }
}

export class AutoCompleteSystem {

    root: TrieNode

    constructor(phraseList: string[]) {
        this.root = new TrieNode()
        for ( const phrase of phraseList ) {
            this.addPhrase(phrase)
        }
    }

    addPhrase(phrase: string): void {
        
        let curNode = this.root
        for ( const char of phrase ) {
            if ( !curNode.children.has(char) ) curNode.children.set(char, new TrieNode)
            curNode = curNode.children.get(char)!
        }
        curNode.isEndOfWord = true

    }

    autoComplete(prefix: string): string[] {
        
        const result: string[] = []
        let curNode = this.root
        for ( const char of prefix ) {
            if ( !curNode.children.has(char) ) return []
            curNode = curNode.children.get(char)!
        }

        function dfs ( node: TrieNode, word: string) {
            if ( node.isEndOfWord ) {
                result.push(word)
            }
            for ( const child of node.children.entries() || [] ) {
                dfs(child[1], word + child[0])
            }
        }

        dfs(curNode, prefix)
        
        return result
    }
}

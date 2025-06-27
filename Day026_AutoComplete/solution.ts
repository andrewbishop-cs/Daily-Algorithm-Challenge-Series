/**
* No one likes typing more than they have to, so let's build an autocomplete feature.
* You're tasked with creating a class, AutoCompleteSystem that will receive strings of
* phrases, and be able to complete them given a prefix.
*
* Examples:
* Adding "washing hands in hot soap", inputting "washing" would return
* "washing hands in hot soap", inputting "hands in" would return nothing since the
* auto complete only matches prefix.
*
* We'll simulate this in a LeetCode environment by utilizing HashMaps to create a weighted Trie.
*
* The prefix will always consist of alphabetic characters and blanks (i.e. a-z and spaces)
* Fill each mehtod out below, with 'addPhrase' entering a phrase into the system, and
* 'autoComplete' returning a list of auto completed phrases.
*/

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

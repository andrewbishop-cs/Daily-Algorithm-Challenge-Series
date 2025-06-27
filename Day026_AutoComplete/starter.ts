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

export class AutoCompleteSystem {
    constructor(phraseList: string[]) {
    // TODO: implement code here
    }

    addPhrase(phrase: string): void {
    // TODO: implement code here
    }

    autoComplete(prefix: string): string[] {
    // TODO: implement code here
    return []
    }
}

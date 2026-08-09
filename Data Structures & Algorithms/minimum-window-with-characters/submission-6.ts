class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        // get freq count of t
        // initial window contains all chars in s
        // if valid win, ie: at least all chars in t exist in window
        // start shrinnking the window, with every shrink, keep track of the size of the
        // valid window size and check if valid by compar char counts of s and t
        // once window becomes invalid that means we have our min window size

        if (t.length > s.length) return "";

        let res = "";
        let windowSize = Infinity;

        const countT = new Map();
        const countS = new Map();

        // t freq count
        for (const c of t) {
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        const getIsValidWin = (): boolean => {
            let isValid = true;
            for (const [key, val] of countT) {
                if (!countS.has(key) || countS.get(key) < val) isValid = false;
            }
            return isValid;
        };

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            countS.set(s[r], (countS.get(s[r]) || 0) + 1);

            // check if valid window
            let isValidWin = getIsValidWin();

            // once win is valid after expanding
            // start shrinking, until its invalid
            // making sure its valid along the way and keeping track of the window length
            while (isValidWin) {
                const currWindowSize = r - l + 1

                if (currWindowSize <= windowSize) {
                    windowSize = currWindowSize;
                    res = s.slice(l, r + 1);
                }

                countS.set(s[l], countS.get(s[l]) - 1);
                l++;

                // need to check validity after shrinking
                isValidWin = getIsValidWin();
            }

            // console.log({l, r, isValidWin, countS, countT, res, windowSize})
        }

        return res;
    }
}

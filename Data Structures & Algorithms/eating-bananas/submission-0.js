class Solution {
    // So we know that 
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles);
        let k = max; 

        let l = 0;
        let r = max;

        while (l <= r) {
            // k
            const m = Math.floor((l + r) / 2);

            // hours to eat all piles in k
            let totalTime = 0;
            for (const n of piles) {
                totalTime += Math.ceil(n / m);
            }

            // koko can eat all bananas in totalTime
            // look for smaller k
            if (totalTime <= h) {
                k = Math.min(k, m);
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return k;
    }
}

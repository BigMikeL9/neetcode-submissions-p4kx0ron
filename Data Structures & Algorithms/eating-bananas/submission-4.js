class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles);
        let res = Infinity;
        let l = 0;
        let r = max;

        while (l <= r) {
            // k
            const m = Math.floor((l + r) / 2);

            let totalHours = 0;
            for (const n of piles) {
                totalHours += Math.ceil(n / m)
            }
            
            console.log(totalHours)

            // smaller k -> higher totalHours
            if (totalHours <= h) {
                res = Math.min(res, m)
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return res;
    }
}

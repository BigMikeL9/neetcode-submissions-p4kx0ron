class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const hashMap = new Map()
        const visiting = new Set()
        const completed = new Set()
        const res = []

        // build the adjanceny list 
        for (let i = 0; i < numCourses; i++) {
            hashMap.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            hashMap.get(course).push(pre)
        }

        const dfs = (course) => {
            if (completed.has(course)) return true

            if (visiting.has(course)) {
                return false
            }

            visiting.add(course)

            for (const pre of hashMap.get(course)) {
                if (!dfs(pre)) return false
            }

            // [[0,1],[0, 2],[2,1]]
            // [{0: [1, 2], 1: [], 2: [1]}]
            visiting.delete(course)
            completed.add(course)
            
            res.push(course)

            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return []
        }

        return res
    }
}

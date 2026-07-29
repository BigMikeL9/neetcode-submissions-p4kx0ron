class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const hashMap = new Map()
        const visiting = new Set()
        const completed = new Set()

        // build the adjacency list
        for (let i = 0; i < numCourses; i++) {
            hashMap.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            hashMap.get(course).push(pre)
        }

        const dfs = (course) => {
            // base condition would check if we have a cycle
            // if we encounter a course more than once in the curr recursive call
            if (visiting.has(course)) {
                console.log({visiting, course})
                return false
            }

            // prevent checking completed courses again
            if (completed.has(course)) return true

            visiting.add(course)

            for (const pre of hashMap.get(course)) {
                if (!dfs(pre)) return false
            }

            // [[0,1], [0,2], [2,1]]
            // { 0: [1, 2], 1: [], 2: [1]}
            visiting.delete(course)
            completed.add(course)

            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }

        return true
    }
}

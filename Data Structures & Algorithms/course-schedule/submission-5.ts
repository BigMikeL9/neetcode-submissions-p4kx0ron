class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const hashMap = new Map<number, number[]>()

        // create the adjaceny list
        for (let i = 0; i < numCourses; i++) {
            hashMap.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            hashMap.get(course).push(pre)
        }

        // the goal of each dfs method is to find if a current course can be completed
        // ie: if it has any cycle
        const dfs = (course: number, visited: Set<number>) => {
            // base case
            // if we visited the curr course before in the curr recursive call
            // that means we have a cycle, inwhich case return false
            if (visited.has(course)) {
                return false
            }

            // if a course does not have any prereq that means we can complete it
            if (hashMap.get(course).length === 0) return true

            visited.add(course)

            for (const pre of hashMap.get(course)) {
                if (!dfs(pre, visited)) return false
                visited.delete(pre)
            }

            console.log({course, visited})
            visited.delete(course)
            hashMap.set(course, [])

            return true
        }

        // a course might have multiple prerequisites
        // that why we use numCourses to iterate
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i, new Set())) return false
        }

        return true
    }
}

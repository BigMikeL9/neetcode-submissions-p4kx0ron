class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adjList = new Map()
        const visiting = new Set()
        const completed = new Set<number>()

        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            adjList.get(course).push(pre)
        }

        const dfs = (course: number) => {
            if (completed.has(course)) return true
            if (visiting.has(course)) return false

            visiting.add(course)

            for (const n of adjList.get(course)) {
                if (!dfs(n)) return false
            }

            completed.add(course)
            visiting.delete(course)

            return true
        }

        for (let i = 0; i < numCourses; i++) {
            // if (completed.has(i)) continue
            if (!dfs(i)) return []
        }

        return [...completed]
    }
}

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList = new Map<number, number[]>()
        const visiting = new Set<number>()
        const completed = new Set<number>()

        // build adj list
        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, [])
        }

        // map to prerequisites
        for (let [c, p] of prerequisites) {
            adjList.get(c).push(p)
        }

        const dfs = (course: number) => {
            if (completed.has(course)) return true
            if (visiting.has(course)) return false // cycle

            visiting.add(course)

            for (const pre of adjList.get(course)) {
                if (!dfs(pre)) return false
            }

            completed.add(course)
            visiting.delete(course)
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }

        return true
    }
}

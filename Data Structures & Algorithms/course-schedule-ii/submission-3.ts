class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const prereqMap = new Map<number, number[]>()
        let visited = new Set()
        const res = new Set()

        // create the adjancency list
        for (let i = 0; i < numCourses; i++) {
            prereqMap.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            prereqMap.get(course).push(pre)
        }

        const dfs = (courseId: number) => {
            // base case
            if (visited.has(courseId)) {
                return false
            }

            visited.add(courseId)

            for (const pre of prereqMap.get(courseId)) {
                if (!dfs(pre)) return false
            }

            visited.delete(courseId)
            prereqMap.set(courseId, [])
            if(!res.has(courseId)) res.add(courseId)

            return true
        }
    
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return []
        }

        return [...res] as number[]
    }

}

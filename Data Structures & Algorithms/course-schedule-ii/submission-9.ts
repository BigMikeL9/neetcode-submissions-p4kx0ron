class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const hashMap = new Map()
        const completed = new Set<number>()
        const visiting = new Set<number>()

        // build adjacency list
        for (let i = 0; i < numCourses; i++) {
            hashMap.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            hashMap.get(course).push(pre)
        }


        const dfs = (course: number): boolean => {
            if (completed.has(course)) return true

            // detect cycle
            if (visiting.has(course)) return false

            visiting.add(course)

            for (const pre of hashMap.get(course)) {
                // false if pre has a cycle
                if (!dfs(pre)) return false
            }

            completed.add(course)
            visiting.delete(course)

            return true
        }

        for (let i = 0; i < numCourses; i++) {
            console.log(i, visiting)
           if(!dfs(i)) return []
        }

        console.log({completed})
        return [...completed]
    }
}

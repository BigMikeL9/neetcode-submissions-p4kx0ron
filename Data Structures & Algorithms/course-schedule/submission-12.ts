class TreeNode {
    val: number
    neighbors: TreeNode[]

    constructor(val = 0, neighbors = []) {
        this.val = val
        this.neighbors = neighbors
    }
}

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        if (!numCourses || prerequisites.length === 0) return true
        const hashMap = new Map()
        const completed = new Set()

        // create adjancy list
        for (let i = 0; i < numCourses; i++) {
            hashMap.set(i, [])
        }

        for (const [course, pre] of prerequisites) {
            hashMap.get(course).push(pre)
        }

        // {0: [1], 1: [0]}
        // visiting = [0]
        // dfs(1, [0])
        // visiting = [0, 1]
        // dfs(0, [0, 1]) -> cycle detected because course 0 is in the curr recursive call
        // completed.length = 0 -> 0 != 2

        const dfs = (course: number, visiting: Set<number>) => {
            // detect a cycle
            if (visiting.has(course)) return false

            if (completed.has(course)) return true

            visiting.add(course)

            // console.log({course, visiting})

            // need to figure out when a course is completed
            for (const pre of hashMap.get(course)) {
                if (!dfs(pre, visiting)) return false
            }

            completed.add(course)
            visiting.delete(course)
            
            return true
        }

        console.log({hashMap, completed})

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i, new Set())) return false
        }

        return true
    }
}

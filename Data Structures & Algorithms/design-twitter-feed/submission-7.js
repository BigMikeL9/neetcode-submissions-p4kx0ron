class Twitter {
    constructor() {
        this.tweets = new Map()
        this.followers = new Map()
        this.time = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const tweet = [tweetId, this.time]
        this.time += 1
        this.tweets.set(userId, (this.tweets.get(userId) || new Set()).add(tweet))
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const pq = new MaxPriorityQueue(i => i[1])

        // get followers tweets
        const followers = this.followers.get(userId) || new Set()
        let tweets = []
        for (const f of followers) {
            tweets = [...tweets, ...this.tweets.get(f)]
        }

        // get user tweets
        tweets = [...tweets, ...this.tweets.get(userId) || new Set()]

        console.log(tweets)
        
        // queue tweets in max-heap
        for (const t of tweets) {
            pq.enqueue(t)
        }

        // top 10 most recent tweets
        let res = []
        while (res.length < 10 && pq.size()) {
            const dequeued = pq.dequeue()
            console.log(dequeued)
            res.push(dequeued[0])
        }

        return res
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
        this.followers.set(followerId, (this.followers.get(followerId) || new Set()).add(followeeId))
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followerId === followeeId) return;
        if (this.followers.has(followerId)) this.followers.get(followerId).delete(followeeId) 
    }
}

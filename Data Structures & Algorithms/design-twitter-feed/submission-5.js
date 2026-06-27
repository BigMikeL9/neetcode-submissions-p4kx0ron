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
        this.tweets.set(userId, (this.tweets.get(userId) || new Set).add(tweet))
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const followers = this.followers.get(userId) || new Set()

        // get follower tweets
        let tweets = []
        for (const f of followers) {
            tweets = [...tweets, ...this.tweets.get(f)]
        }

        // get user tweets
        if (this.tweets.get(userId)) tweets = [...tweets, ...this.tweets.get(userId)]

        // sort tweets based on time
        const sorted = tweets.sort((a, b) => b[1] - a[1])

        // return top 10 tweets
        const res = sorted.slice(0, 10).map((t) => t[0]);
        
        return res;
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
        this.followers.get(followerId).delete(followeeId)
    }
}

export interface User {
    login?: string;
    id?: number;   
    nodeId?: string;
    avatarUrl?: string;
    gravatarId?: string;
    url?: string;
    htmlUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    starredUrl?: string;
    subscriptionsUrl?: string;
    organizationsUrl?: string;
    reposUrl?: string;
    eventsUrl?: string;
    receivedEventsUrl?: string;
    type?: string;
    siteAdmin?: boolean;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    hireable?: boolean;
    bio?: string;
    twitterUsername?: string;
    publicRepos?: number;
    publicGists?: number;
    followers?: number;
    following?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
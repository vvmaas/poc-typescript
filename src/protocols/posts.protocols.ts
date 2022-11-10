export type PostEntity = {
    id: number,
    text: string,
    created_at: Date
}

export type Post = Omit<PostEntity, 'id' | 'created_at'>
import { createLazyFileRoute } from '@tanstack/react-router'
import { Post } from '../pages/Post'

export const Route = createLazyFileRoute('/post')({
  component: Post
})
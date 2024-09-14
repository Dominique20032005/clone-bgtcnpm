import { createLazyFileRoute } from '@tanstack/react-router'
import { LogIn } from "../pages/LogIn";

export const Route = createLazyFileRoute('/log-in')({
  component: LogIn
})